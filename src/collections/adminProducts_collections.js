const AdminProductsModel = require("../models/adminProducts_model")

exports.GetProducts = async (req, res) => {
    try {
        //Busca a todos los usuarios dentro de UserModel en railway
        const response = await AdminProductsModel.find()
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion get")
    }
}

exports.PostProducts = async (req, res) => {
    try {
        //Traemos el body de la peticion del postman
        const { sex } = req.body;

        //Crear un Modelo nuevo con los datos indicados
        const model = new AdminProductsModel({
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

exports.DeleteProducts = async (req, res) => {
    try {
        //Buscamos su ID por parametros
        const { idProducts } = req.params;
        //Buscamos en la base de datos al Producto que tiene el id del parametro (idProducts)
        const products = await AdminProductsModel.findById(idProducts)
        //Elimino el Producto que busque por ID:
        const response = await products.remove();
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion delete")
    }
}
//----------------------------------------------------------------------------------------------

// //exports.DeleteUser = async (req, res) => {
//     try {
//         //Buscamos su ID por parametros
//         const { idUser } = req.params;
//         //Elimino el usuario que busque por ID (idUser)
//         const response = await UserModel.findByIdAndDelete(idUser)
//         res.status(200).send(response)
//     } catch (error) {
//         console.log(error)
//         res.status(400).send("hubo un error en la peticion delete")
//     }
// }
//---------------------------------------------------------------------------------------------------
exports.PutProducts = async (req, res) => {
    try {
        //Buscamos su ID por parametros
        const { idProducts } = req.params;
        //Busca el usuario por ID (idUser) => tomar el req.body y cambia el usuario encontrado
        const response = await AdminProductsModel.findByIdAndUpdate({ _id: idProducts }, req.body, { new: true })
        res.status(201).send(response);
    } catch (error) {
        console.log(error)
        res.status(400).send("hubo un error en la peticion put")
    }
}
//---------------------------------------------------------------------------------------------------
