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
    like: {
        type: Number,
        default: 0,
    },
    share: {
        type: Number,
        default: 0,
    },
    comments: [{
        text: String,
        author: String,

    }]
});

module.exports = mongoose.model('PostModel', PostModel)