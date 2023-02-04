const mongoose = require('mongoose');

const UserModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: true
    },
    createAdd: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("UserModel", UserModel)