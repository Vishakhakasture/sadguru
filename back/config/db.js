const mongoose = require("mongoose")

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected");
    } catch (error) {
        console.log("MONGO ERROR " + error);
        process.exit()
    }
}

module.exports = db;