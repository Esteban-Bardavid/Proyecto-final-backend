const AdminShoppingModel = require("../models/adminShopping_model")


exports.GetShopping = async (req, res) => {
    try {
        //Busca todas las ventas dentro de UserModel
        const response = await AdminShoppingModel.find()
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion get")
    }
}

exports.PostShopping = async (req, res) => {
    try {

        //Crear un Modelo nuevo con los datos indicados
        const model = new AdminShoppingModel({
            ...req.body,    
        })

        //Guardar en la base de datos el nuevo modelo
        const response = await model.save()
        res.status(201).send(response);
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion post")
    }
}


exports.DeleteShopping = async (req, res) => {
    try {
        //Buscamos su ID por parametros
        const { idShopping } = req.params;
        //Buscamos en la base de datos la venta que tiene el id del parametro (idShopping)
        const shopping = await AdminShoppingModel.findById(idShopping)
        //Elimino la venta que busque por ID:
        const response = await shopping.remove();
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion delete")
    }
}
