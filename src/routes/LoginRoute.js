const express = require('express');
const router = express.Router()

const LoginCollection = require("../collections/LoginCollection")
const LoginMiddleware = require("../middleware/LoginMiddleware")

router.get('/', LoginMiddleware, LoginCollection.LoginGet);
router.post('/', LoginCollection.LoginPost)

module.exports = router;