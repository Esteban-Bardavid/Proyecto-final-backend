const UserModel = require("../models/users_model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


exports.LoginGet = async (req, res) => {
    try {
        const response = await UserModel.findById(req.usuario.id);
        res.status(200)
        res.send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send("error en recuperacion de datos")
    }
}

exports.LoginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await UserModel.findOne({ email })
        //Email incorrecto
        if (!usuario) {
            res.status(400).send("email incorrecto")
        }
        const response = await bcrypt.compare(password, usuario.password)
        //Password incorrecto
        if (!response) {
            return res.status(400).send("contraseña incorrecta")
           
        }
        const userToken = {
            usuario: {
                id: usuario.id,
            }
        }
        jwt.sign(userToken, process.env.SECRETA, { expiresIn: 10000 },(error, token) => {
                if (error) {
                    console.log(error)
                }
                res.send(token)
            },
        )
    } catch (error) {
        console.log(error)
        res.status(401).send("campos incorrectos")
       
    }
}