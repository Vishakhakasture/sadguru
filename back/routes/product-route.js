const express = require("express")
const { getAllProducts, getSingleProduct, updateProduct, deleteProduct, addProduct } = require("../controller/product-controller")
const { authGuard } = require("../middleware/auth-middleware")
const { upload } = require("../middleware/upload")

const router = express.Router()

router.route("/").get(getAllProducts)
router.route("/addProduct").post(authGuard, upload.single("image"), addProduct)
router
    .route("/:id")
    .get(getSingleProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router