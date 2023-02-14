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
    admin:{
        type: String,
        required: true

    },
    product:[
        {
        type:mongoose.Schema.Type.objetId,
        ref:"product",
     }],

    createAdd:{
        type: Date,
        default: Date.now()
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordExpires:{
        type : Date,
    },
});

module.exports = mongoose.model("UserModel", UserModel)