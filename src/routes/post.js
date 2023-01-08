const express = require('express');
const router= express.Router();
const PostCollection= require('../collections/post_collection')
const middleware= require('../middleware/auth')

router.get('/', PostCollection.GetPost);
router.post('/', middleware, PostCollection.PostPost);
router.put('/:idUser', PostCollection.PutPost)
router.delete('/:idUser', PostCollection.DeletePost)


module.exports = router