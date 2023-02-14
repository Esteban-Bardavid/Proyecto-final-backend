const mongoose = require('mongoose');

const PostModel = mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        require: true,
    },
    authorName: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: false,
    },
   

    createAdd: {
        type: Date,
        default: Date.now()
    },  
});

module.exports = mongoose.model('PostModel', PostModel)