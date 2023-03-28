const express = require('express');
const router = express.Router()

const LoginCollection = require("../collections/LoginCollection")
const LoginMiddleware = require("../middleware/LoginMiddleware")

//Peticion Post
router.get('/', LoginMiddleware, LoginCollection.LoginGet);
router.post('/', LoginCollection.LoginPost)

module.exports = router;