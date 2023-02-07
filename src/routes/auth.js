const express = require('express');
const router = express.Router()

const AuthCollection = require("../collections/auth_collection")
const AuthMiddleware = require("../middleware/auth")

//Peticion Post
router.get('/', AuthMiddleware, AuthCollection.AuthGet);
router.post('/', AuthCollection.AuthPost)

module.exports = router;