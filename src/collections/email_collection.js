const EmailModel = require('../models/email_model');
const UsersModel = require('../models/users_model');
const nodemailer = require('nodemailer')

exports.EmailGet = async (req, res) => {
    try {
        const emailEncontrado = await EmailModel.find();
        res.status(200).send(emailEncontrado);
    } catch (error) {
        console.log(error);
        res.status(400).send("email no encontrado");
    }
}

exports.EmailPost = async (req, res) => {
    const link = `http://localhost:3000/resetPassword/${req.usuario.id}`;
    const { title, description } = req.body;
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f24840f334d194",
            pass: "8543799b40ddf7"
        }
    });
    try {
        const emailUser = await UsersModel.findById(req.usuario.id)

        const emailModel = new EmailModel({
            title: title,
            description: description,
            author: req.usuario.id,
        })
        await emailModel.save()
        
        const response = await transport.sendMail({
            from: emailUser.email,
            to: "bardavidesteban@gmail.com",
            subject: "Enlace para recuperar contraseña",
            text: link,
        })
        res.status(200).send(response);
    } catch (error) {
        console.log(error);
        res.status(400).send("email no creado");
    }
}