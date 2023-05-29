const AdminProductsModel = require("../models/adminProducts_model")

exports.GetProducts = async (req, res) => {
    try {
     
        const response = await AdminProductsModel.find()
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion get")
    }
}

exports.PostProducts = async (req, res) => {
    try {
        const { sex } = req.body;

        const model = new AdminProductsModel({
            ...req.body,
                
        })

        const response = await model.save()
        res.status(201).send(response);
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion post")
    }
}

exports.DeleteProducts = async (req, res) => {
    try {
        const { idProducts } = req.params;
        const products = await AdminProductsModel.findById(idProducts)
        const response = await products.remove();
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion delete")
    }
}

exports.PutProducts = async (req, res) => {
    try {
        const { idProducts } = req.params;
        const response = await AdminProductsModel.findByIdAndUpdate({ _id: idProducts }, req.body, { new: true })
        res.status(201).send(response);
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion put")
    }
}
