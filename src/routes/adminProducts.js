const express = require("express")
const router = express.Router();

//colección
const AdminProductsCollection = require("../collections/adminProducts_collections")


//router + peticion
router.get('/', AdminProductsCollection.GetProducts)
router.post('/', AdminProductsCollection.PostProducts)
router.put('/:idProducts', AdminProductsCollection.PutProducts)
router.delete('/:idProducts', AdminProductsCollection.DeleteProducts)

module.exports = router;