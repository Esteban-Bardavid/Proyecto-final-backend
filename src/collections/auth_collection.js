const UserModel = require("../models/users_model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

//   
exports.AuthPost = async (req, res) => {
    try {
        const { email, password } = req.body;   
        const usuario = await UserModel.findOne({ email })
        //Email incorrecto
        if (!usuario) {
             return res.status(400).send("Usuario no registrado o campo incorrecto")
        }
        const response = await bcrypt.compare(password, usuario.password)
        //Password incorrecto
       if (!response) {
            return res.status(400).send("Contraseña incorrecta")
        }
        const userToken = {
            usuario: {
                id: usuario.id,
            }
        }
        jwt.sign(userToken, process.env.SECRETA, { expiresIn: 10000 },
            (error, token) => {
                if (error) {
                    console.log(error)
                }
                res.send(token)
            },
        )
    } catch (error) {
        console.log(error)
        res.status(401).send("Credenciales incorrectas")
    }
}