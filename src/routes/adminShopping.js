const express = require("express")
const router = express.Router();

const AdminShoppingCollection = require("../collections/adminShopping_collections")


router.get('/', AdminShoppingCollection.GetShopping)
router.post('/', AdminShoppingCollection.PostShopping)
router.delete('/:idShopping', AdminShoppingCollection.DeleteShopping)

module.exports = router;