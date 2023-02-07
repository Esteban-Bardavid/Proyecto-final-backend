const EmailModel = require("../models/email_model");

exports.EmailGet = async (req, res) => {
    try {
        const emailEcontrado = await EmailModel.find()
        res.status(200).send(emailEcontrado);
    } catch (error) {
        console.log(error);
        res.status(400).send("email not found");
    }
}


exports.EmailPost = async (req, res) => {
    const { title, description } = req.body;
    try {
        const EmailModel = new EmailModel({
            title: title,
            description: description,
            author: req.usuario.id
        })
        const response = await EmailModel.save();
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("email no creado");
    }
}