const express = require("express")
const router = express.Router();

//colección
const AdminShoppingCollection = require("../collections/adminShopping_collections")


//router + peticion
router.get('/', AdminShoppingCollection.GetShopping)
router.post('/', AdminShoppingCollection.PostShopping)
router.delete('/:idShopping', AdminShoppingCollection.DeleteShopping)

module.exports = router;