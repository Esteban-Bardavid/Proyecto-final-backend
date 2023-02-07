const mongoose = require("mongoose");

const EmailModel = mongoose.Schema({
 title : {
    type: String ,
    required: true,
 },
 description :{
    type: String ,
    required: true,
 },
 author:{
    type: mongoose.Types.ObjectId
 }

})

module.exports = mongoose.model("EmailModel", EmailModel)