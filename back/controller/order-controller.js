const order = require("../model/order-modal")
const jwt = require("jsonwebtoken")

exports.addOrder = async (req, res) => {
    try {
        const data = await order.create(req.body)
        res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            result: data
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Order Can't Add " + error,
            result: null
        })

    }
}


// Protected Route 
exports.getAllOrder = async (req, res) => {
    try {
        const { userId } = await jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRETKEY
        )
        // const result = await order.find({ userId }),
        const result = await order.find({ userId }).populate("products.productId")
        res.status(201).json({
            count: result.length,
            success: true,
            message: "Order Fetch Successfully",
            result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Order Can't Fetch " + error,
            result: null
        })

    }
}

exports.deleteAllOrder = async (req, res) => {
    try {
        const data = await order.deleteMany()
        res.status(201).json({
            count: data.length,
            success: true,
            message: "Orders Deleted Successfully",
            result: data
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Order Can't Deleted " + error,
            result: null
        })

    }
}


exports.getAdminOrders = async (req, res) => {
    try {
        // const { userId } = await jwt.verify(
        //     req.headers.authorization,
        //     process.env.JWT_SECRETKEY
        // )
        const result = await order.find().sort({ createdAt: -1 })
        res.status(201).json({
            count: result.length,
            success: true,
            message: "All Admin Order Fetch Successfully",
            result
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Order Can't Fetch " + error,
            result: null
        })

    }
}