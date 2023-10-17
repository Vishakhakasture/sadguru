//ENV 
const env = require("dotenv")
env.config({ path: "../config/.env" })

//DB
const db = require("../config/db")

// DATA FILES
const users = require("./data/user")
const products = require("./data/products")

//MODELS
const userModel = require("../model/user-model")
const productModel = require("../model/product-model")


const insertData = async () => {
    try {
        db()
        await userModel.deleteMany()
        await productModel.deleteMany()
        const result = await userModel.create(users)
        const admin = result[0]._id
        const sampleData = products.map(item => {
            return { ...item, userId: admin }
        })
        const data = await productModel.create(sampleData)
        console.log("DATA INSERTED SUCCESS!!!");
        // console.log(data);
        process.exit()
    } catch (error) {
        console.log(`ERROR : ${error}`);
        process.exit()
    }
}


const deleteData = async () => {
    try {
        db()
        await userModel.deleteMany()
        console.log("DATA Destroyed");
        process.exit()
    } catch (error) {
        console.log(`ERROR : ${error}`);
        process.exit()
    }
}


if (process.argv[2] === "-c") {
    insertData()
} else if (process.argv[2] === "-d") {
    deleteData()
} else {
    console.log("INVALID OPERATION");
}