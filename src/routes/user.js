const express = require("express")
const router = express.Router();

//colección
const UserCollection = require("../collections/user_collections")
const ResetCollections = require("../controller/resetPasswordController")




//router + peticion
router.get('/', UserCollection.GetUsers)
router.get('/searchEmail',  ResetCollections.searchEmail)
router.post('/', UserCollection.PostUsers)
router.put('/:idUser', UserCollection.PutUsers)
router.put('/resetPassword/:idUser', ResetCollections.ResetPassword)
router.delete('/:idUser', UserCollection.DeleteUsers)

module.exports = router;