const express = require("express")
const router = express.Router();


//colección
const UserCollection = require("../collections/user_collections")
const ResetCollections = require("../controller/resetPasswordController");
const AuthMiddleware = require("../middleware/auth");


//router + peticion
router.get('/', UserCollection.GetUsers)
router.get('/searchEmail',  ResetCollections.searchEmail)
router.post('/', UserCollection.PostUsers)
router.post('/forgotPassword', AuthMiddleware, UserCollection.PostUsers)
router.put('/product/:idProduct', AuthMiddleware, UserCollection.PutAddProduct)
router.put('/:idUser', UserCollection.PutUser)

router.put('/resetPassword/:idUser', ResetCollections.ResetPassword)
router.delete('/:idUser', UserCollection.DeleteUsers)


module.exports = router;