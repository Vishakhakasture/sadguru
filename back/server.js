const express = require('express')

const env = require("dotenv")
env.config({ path: "./config/.env" })

// db 
const db = require("./config/db")
db()

// routes 
const product = require("./routes/product-route")
const auth = require("./routes/auth-route")
const user = require("./routes/user-route")
const order = require("./routes/order-router")
const app = express()

//body parser
app.use(express.json())
app.use(express.static("public"))
//cors
const cors = require("cors")
app.use(cors())

app.use("/api/products", product)
// http://localhost:5000/api/products/
app.use("/api/auth", auth)
// http://localhost:5000/api/auth/login
app.use("/api/user", user)
// http://localhost:5000/api/user/
app.use("/api/orders", order)
// http://localhost:5000/api/order/
const PORT = process.env.PORT;

app.listen(PORT || 5000, () => console.log(`http://localhost:${PORT || 5000}`))