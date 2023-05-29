const UserModel = require("../models/users_model");
const bcrypt = require("bcryptjs");


exports.GetUsers = async (req, res) => {
  try {
    const response = await UserModel.find();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion get");
  }
};


exports.PostUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    const validation = await UserModel.findOne({ email });
    if (validation) {
      return res.status(400).send("ya existe este usuario");
    }

    const encrypt = await bcrypt.genSalt(10);
    const passEncrypt = await bcrypt.hash(password, encrypt);

    const model = new UserModel({
      ...req.body,
      password: passEncrypt,
    });

    const response = await model.save();
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion post");
  }
};


exports.DeleteUsers = async (req, res) => {
  try {
    const { idUser } = req.params;
    const user = await UserModel.findById(idUser);
    const response = await user.remove();
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion delete");
  }
};


exports.DeleteUser = async (req, res) => {
  try {
    const { idUser } = req.params;
    const response = await UserModel.findByIdAndDelete(idUser);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion delete");
  }
};


exports.PutAddProduct = async (req, res) => {
  const { idProduct } = req.params;
  try {
    const result = await UserModel.findById(req.usuario.id);
    const products =
      result.product !== undefined
        ? result.product.map((item) => {
            return item;
          })
        : [];
    products.push(idProduct);
    
    const response = await UserModel.findByIdAndUpdate(
      { _id: req.usuario.id },
      { product: products },
      { new: true }
    );
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion put");
  }
};


exports.PutLikes = async (req, res) => {
  try {
    const { idImagen } = req.params;
    const response = await UserModel.findByIdAndUpdate(
      { _id: idImagen },
      req.body,
      { new: true }
    );
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send("hubo un error en la peticion put");
  }
};


exports.PutUser = async (req, res) => {
  try {
      const { idUser } = req.params;
      const response = await UserModel.findByIdAndUpdate({ _id: idUser }, req.body, { new: true })
      res.status(201).send(response);
  } catch (error) {
      console.error(error)
      res.status(400).send("hubo un error en la peticion put")
  }
}
