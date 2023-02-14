const express = require('express');
const router = express.Router();
const CartCollection = require('../collections/cart_collections')

router.get('/:user_id', CartCollection.GetCart)
router.post('/:user_id', CartCollection.PostCart)

module.exports = router