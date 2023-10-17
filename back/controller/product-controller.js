const product = require("../model/product-model")
const jwt = require("jsonwebtoken")

exports.getAllProducts = async (req, res) => {
    try {
        const result = await product.find()
        res.json({
            success: true,
            count: result.length,
            message: "Get All Products",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Can Not Get All Products " + error,
            result: null
        })
    }
}
exports.getSingleProduct = async (req, res) => {
    try {
        const result = await product.findOne({ _id: req.params.id })
        res.json({
            success: true,
            message: "Get Single Products",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Can Not Get Single Products " + error,
            result: null
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const result = await product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        res.json({
            success: true,
            message: "Product Updated",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Can Not Update Product  " + error,
            result: null
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const result = await product.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Product Deleted",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Can Not Delete Product  " + error,
            result: null
        })
    }
}

exports.addProduct = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { userId } = await jwt.verify(token, process.env.JWT_SECRETKEY)
        req.body.userId = userId
        const result = await product.create(req.body)
        res.json({
            success: true,
            message: "Product Added Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Can Not Added Product  " + error,
            result: null
        })
    }
}