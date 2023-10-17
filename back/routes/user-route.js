const express = require("express")
const { createUser, userProfile, userAddress } = require("../controller/user-controller")
const { authGuard } = require("../middleware/auth-middleware")
const router = express.Router()

router.route("/register").post(createUser)
router.route("/profile").get(authGuard, userProfile)
router.route("/address").post(authGuard, userAddress)


module.exports = router