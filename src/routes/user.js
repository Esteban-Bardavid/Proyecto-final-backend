const express = require("express")
const router = express.Router();

//colección
const UserCollection = require("../collections/user_collections")



//router + peticion
router.get('/', UserCollection.GetUsers)
router.post('/', UserCollection.PostUsers)
router.put('/:idUser', UserCollection.PutUsers)
router.delete('/:idUser', UserCollection.DeleteUsers)

module.exports = router;