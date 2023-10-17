const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const fn = Date.now() + ext;
        req.body.image = `uploads/${fn}`
        cb(null, fn)
    }
})


exports.upload = multer({ storage })
