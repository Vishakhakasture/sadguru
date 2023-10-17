const user = require("../model/user-model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        // const userData = await user.findOne({email:email}) 
        const userData = await user.findOne({ email })
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "Email Not Found"
            })
        }
        const verify = await bcrypt.compare(password, userData.password)
        if (!verify) {
            return res.status(404).json({
                success: false,
                message: "Password do not Match"
            })
        }

        const token = await jwt.sign({ userId: userData._id }, process.env.JWT_SECRETKEY)
        res.json({
            success: true,
            message: "User Found",
            result: userData,
            token
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Something Went Wrong" + error
        })
    }
}