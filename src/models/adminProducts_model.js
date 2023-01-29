const mongoose = require('mongoose');

const AdminProductsModel = mongoose.Schema({
    producto:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
    },
    sex:{
        type: String,
        required: true
    },
    publicado:{
        type: Number,
        required: true
    },
    tseis:{
        type: Number,

    },
    tsiete:{
        type: Number,

    },
    tocho:{
        type: Number,

    },
    tnueve:{
        type: Number,

    },
    ccero:{
        type: Number,

    },
    cuno:{
        type: Number,

    },
    cdos:{
        type: Number,

    },
    ctres:{
        type: Number,
        
    },
    // T36:{ 
    //     type: String
    // },
    // T37:{ 
    //     type: String
    // },
    // T38:{ 
    //     type: String
    // },
    // T39:{ 
    //     type: String
    // },
    // T40:{ 
    //     type: String
    // },
    // T41:{ 
    //     type: String
    // },
    // T42:{ 
    //     type: String
    // },
    // T43:{ 
    //     type: String
    // },
    createAdd:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model("AdminProductsModel", AdminProductsModel)