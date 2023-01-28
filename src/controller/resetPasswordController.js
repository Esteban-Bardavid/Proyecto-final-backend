const {User} = require("../models/users_model")
const bcrypt = require("bcrypt")

let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/;

const ResetPassword ={
    async reset (req, res) {
        if (!regExPassword.test(req.body.password)){
            res.send({
                message:
                "La contraseña debe contener al menos entre 8 y 16 caracteres, 1 numero y 1 mayuscula"
            });
            return;
        }
        try{
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const resetPassword = await User.update(req.body,{
                where: {
                    id: req.params.id,
                    tokenresetpassword: req.params.tokenresetpassword
                }
            });
            res.status(201).send({
              message: "Exito al cambiar su contraseña"  
            })
        }catch (error) {
            res.status(500).send({
                message: "error, intentelo de nuevo",
                error
            })
        }
    }
}
module.exports = ResetPassword