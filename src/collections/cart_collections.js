
const compraSchema = require('../models/cart_model').default;

exports.GetCart = async (req, res) => {
    try {
        const response = await CartModel.find({user_id: req.params.user_id})
        res.status(200).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send('bad_request')
    }
}

exports.PostCart = async (req, res) => {
    const compra = new compraSchema({
        items: req.body.items,
        user_id: req.params.user_id,
      });

        try {
            //Guardar en la base de datos el nuevo modelo
            const response = await compra.save()
            res.status(201).send(response);
        } catch (error) {
            console.log(error)
            res.status(400).send("hubo un error en la peticion post")
        }
    }




    /*const cart = new CartModel({
        items: req.body.items,
        /*user_id: req.params.user_id,
      });

    try {
        const response = await cart.save()
        res.status(201).send(response)
    } catch (error) {
        console.log(error)
        res.status(400).send('bad_request')
    }*/
