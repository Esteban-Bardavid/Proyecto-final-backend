
const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  provincia: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  cp: {
    type: String,
    required: true,
  },
  formaPago: {
    type: String,
    required: true,
  },
  compra: {
    type: Array,
    required: true,
  },
  createAdd:{
    type: Date,
    default: Date.now(),
}});



module.exports = mongoose.model('CartModel', cartSchema);;
