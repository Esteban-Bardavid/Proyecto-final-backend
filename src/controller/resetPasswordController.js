const User = require("../models/users_model")
const bcrypt = require("bcryptjs")





exports.ResetPassword = async (req, res) => {
    const { idUser } = req.params

    try {
        const encrypt = await bcrypt.genSalt(10)
        const passEncrypt = await bcrypt.hash(req.body.password, encrypt)

        const response = await User.findByIdAndUpdate({ _id: idUser }, { password: passEncrypt }, { new: true })
        res.status(201).send({
            message: response
        })
    } catch (error) {
        res.status(500).send({
            message: "error, intentelo de nuevo",
            error
        })
    }
}

exports.searchEmail = async (req, res) => {
    const { email } = req.body

    try {


        const response = await User.findOne({ email })
        res.status(201).send(
            response
        )
    } catch (error) {
        res.status(500).send({
            message: "error, intentelo de nuevo",
            error
        })
    }
}
