const express = require("express")
const { login } = require("../controller/auth-controller")
const router = express.Router()

/* This is a route definition. The route is defined as `/login` and the HTTP method is `POST`. The
`login` function is passed as a callback to the route. */
router.route("/login").post(login)


module.exports = router