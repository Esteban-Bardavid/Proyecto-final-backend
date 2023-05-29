const PostModel = require('../models/post_model');
const UserModel = require('../models/users_model');


exports.GetPost = async (req, res) => {
    try {
        const response = await PostModel.find();
        res.status(200).send(response)
    } catch (error) {
        console.error(error);
        res.status(400).send('Get function failed');
    }
}

exports.PostPost = async (req, res) => {
    const { description, image, comments } = req.body;
    try {
        const userModel= await UserModel.findById(req.usuario.id)
        const model = new PostModel({
            author: req.usuario.id,
            authorName: userModel.name,
            description: description,
            image: image,
           
        })
        const response = await model.save();
        res.status(200).send(response)

    } catch (error) {
        console.error(error);
        res.status(400).send('Error en posteo')

    }
}

exports.DeletePost = async (req, res) => {
    try {
        const {idUser} = req.params;
        const response = await PostModel.findByIdAndDelete(idUser)
        res.status(200).send(response)
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion delete")
    }
}

exports.PutPost = async (req, res) => {
    try {
        const { idUser } = req.params;
        const response = await PostModel.findByIdAndUpdate({ _id: idUser }, req.body, { new: true })
        res.status(201).send(response);
    } catch (error) {
        console.error(error)
        res.status(400).send("hubo un error en la peticion put")
    }
}