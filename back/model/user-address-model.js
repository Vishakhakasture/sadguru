const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    houseNo: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("address", addressSchema)