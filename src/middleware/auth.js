const jwt = require('jsonwebtoken');

function authModdleware(req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) {
       return res.status(400).send("no hay token")
    }
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA)
        req.usuario = cifrado.usuario
        next()
    } catch (error) {
        console.log(error)
        res.status(401).send("error en verificacion de token")
    }
}

module.exports = authModdleware;