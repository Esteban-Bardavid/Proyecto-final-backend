const router = require("express").Router();
const EmailCollection = require("../collections/email_collection");
const AuthMiddleware = require("../middleware/auth")

router.get("/", AuthMiddleware, EmailCollection.EmailGet)

router.post("/", AuthMiddleware, EmailCollection.EmailPost)

module.exports = router;