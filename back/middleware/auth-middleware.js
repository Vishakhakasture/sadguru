const jwt = require("jsonwebtoken")
const user = require("../model/user-model")

exports.authGuard = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No Token Provided"
            })
        }

        await jwt.verify(token, process.env.JWT_SECRETKEY)
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid Token" + error,
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    const token = req.headers.authorization;
    const { userId } = jwt.verify(token, process.env.JWT_SECRETKEY)
    const { admin } = await user.findById(userId).select("isAdmin")
    console.log(admin)

    if (admin) {
        next()
    } else {
        res.status(401).json({
            success: false,
            message: "Unautherized Use. You are not Admin"
        })
    }
}