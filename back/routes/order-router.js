const express = require("express")
const { addOrder, getAllOrder, deleteAllOrder, getAdminOrders } = require("../controller/order-controller")
const { authGuard, isAdmin } = require("../middleware/auth-middleware")
const router = express.Router()

router.route("/").get(authGuard, getAllOrder).post(addOrder).delete(deleteAllOrder)

// localhost:5000/api/orders/admin-orders
/* This is a nested route. It is saying that if the user is an admin, then they can access the
`/admin-orders` route. */
router.route("/admin-orders").get(authGuard, isAdmin, getAdminOrders)

module.exports = router