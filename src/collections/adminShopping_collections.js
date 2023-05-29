const AdminShoppingModel = require("../models/adminShopping_model")


exports.GetShopping = async (req, res) => {
    try {
        const response = await AdminShoppingModel.find()
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion get")
    }
}

exports.PostShopping = async (req, res) => {
    try {

        const model = new AdminShoppingModel({
            ...req.body,    
        })

        const response = await model.save()
        res.status(201).send(response);
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion post")
    }
}


exports.DeleteShopping = async (req, res) => {
    try {
        const { idShopping } = req.params;
        const shopping = await AdminShoppingModel.findById(idShopping)
        const response = await shopping.remove();
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion delete")
    }
}
