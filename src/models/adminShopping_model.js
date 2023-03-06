const mongoose = require("mongoose");

const AdminShoppingModel = mongoose.Schema({
  dni: {
    type: Number,
    required: true
  },
  direccion: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  localidad: {
    type: String,
    required: true,
  },
  marca1: {
    type: String,
    required: true,
  },
  marca2: {
    type: String,
  },
  marca3: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  nroTarjeta: {
    type: Number,
    required: true,
  },
  precio1: {
    type: Number,
    required: true
  },
  precio2: {
    type: Number,
  },
  precio3: {
    type: Number,
  },
  producto1: {
    type: String,
    required: true
  },
  producto2: {
    type: String,
  },
  producto3: {
    type: String,
  },
  provincia: {
    type: String,
    required: true
  },
  tarjeta: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  createAdd: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("AdminShoppingModel", AdminShoppingModel);
