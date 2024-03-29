const User = require("../models/users_model")
const nodemailer = require("nodemailer")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
require("dotenv").config()

const ForgotPassword = {
    async sendMail(req, res){
        if (req.body.email == ""){
            res.status(400).send({
                message: "El email es requerido!",
            })
        }
        try{
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if(!user){
                return res.status(403).send({
               message: "No existe ese email"
            })
        }
        const token = jwt.sign({id: user.id},"esternocleidomastoideo", {expiresIn: "1h"});
        user.update({
            tokenResetPassword: token
        });
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user:`${process.env.EMAIL_ADDRESS}`,
                pass:`${process.env.EMAIL_PASSWORD}`,
            }
        });
        const emailPort = process.env.EMAIL_PORT || 4000;

        const mailOptions = {
            from: "Bardavidpablo@gmail.com",
            to: `${user.email}`,
            subjet: "Enlace para recuperar su cuenta",
            text:
            `${emailPort}/resetpassword/${user.id}/${token}`
        };
        transporter.sendMail(mailOptions, (err, res) =>{
            if(err){
                console.error("Ha ocurrido un error:", err);
            }else{
                
                res.status(200).json("El email para recuperar su cuenta ha sido enviado");
            }
        })
    }catch(error){
        res.status(500).send({
            message: "Ha ocurrido un error:",
            error
        })
    }
}
}

module.exports = ForgotPassword;