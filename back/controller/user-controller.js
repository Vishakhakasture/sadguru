const user = require("./../model/user-model")
const address = require("./../model/user-address-model")
const jwt = require("jsonwebtoken")

exports.createUser = async (req, res) => {
    try {
        const result = await user.create(req.body)
        res.json({
            success: true,
            message: "User Created Successfully",
            data: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "User Can't Create" + error,
            data: result
        })
    }
}

exports.userProfile = async (req, res) => {
    try {
        // console.log(req.headers.authorization);
        const { userId } = await jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRETKEY
        );
        console.log(userId);
        const result = await user.findById(userId)
        const addr = await address.find({
            userId: result._id
        })
        console.log(result);
        res.status(200).json({
            count: result.length,
            success: true,
            message: "All User Find Successfully",
            result: {
                id: result._id,
                name: result.name,
                email: result.email,
                isAdmin: result.isAdmin,
                address: addr
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "User Can't Find " + error,
            data: null
        })
    }
}

exports.userAddress = async (req, res) => {
    try {
        const { houseNo, street, pincode, city } = req.body;
        const token = await req.headers.authorization
        const { userId } = await jwt.verify(token, process.env.JWT_SECRETKEY)
        const result = await address.create({
            houseNo,
            street,
            pincode,
            city,
            userId
        })
        res.status(200).json({
            success: true,
            message: "Address Find ",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "User Can't Find " + error,
            data: null
        })
    }
}