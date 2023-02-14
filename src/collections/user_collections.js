const {model} = require("mongoose")
const bcrypt = require("bcryptjs")
const { response } = require("express")

const UserModel = require("../models/users_model");

exports.GetUsers= async (req, res) => {
  try {
    // Busca a todos los usuarios dentro de UserModel en railway
    const response = await UserModel.find();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send("No se pudo realizar la peticion");
  }
};

exports.PostUsers = async (req, res) => {
  try {
     
      const { password, email, dni } = req.body;
        //Validacion de email y dni 
      const validationDni = await UserModel.findOne({ dni })
      const validationEmail = await UserModel.findOne({ email })
      if (validationDni) {
          return res.status(400).send("Dni existente, ingrese uno valido")
      }if(validationEmail){
        return res.status(400).send("Email ya existente, ingrese uno valido")
      }

//   Encryptamos el password
  const encrypt = await bcrypt.genSalt(10)
  const passEncrypt = await bcrypt.hash(password, encrypt)

  //Crear un Modelo nuevo con los datos indicados
  try {
    const { name, lastname, dni, email,} = req.body;
    ;
    const model=new UserModel({
    ...req.body,
      name: name,
      lastname: lastname,
      dni: dni,
      email: email,
      password: passEncrypt,
      createAdd: Date.now(),
    
    });
    const response = await model.save() 
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send("Error, campos incompletos...");
  }
 
      const response = await model.save()
      res.status(201).send(response);
  } catch (error) {
      console.log(error)
      res.status(400).send("Hubo un error en la peticion post")
  }
};

exports.DeleteUsers = async (req, res) => {
    try {
    const { idUser } = req.params;
    const user = await UserModel.findById(idUser);

    const response = await user.remove();
    res.status(200).send(response);
} catch (error) {
    console.log(error);
    res.status(400).send("Datos eliminados o inexistentes");
} 
};

exports.PutUsers = async (req, res) => {
  try {
    
    const {idUser} = req.params;
    const response = await UserModel.findByIdAndUpdate({ _id: idUser }, req.body, {new: true})
    res.status(200).send(response);
    
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error en la peticion put");
  }
};