const express = require("express");
const router = express.Router();

//llamo a la colección
const UserCollection = require("../collections/user_collections")

//rutas definidas + peticion

router.get("/", UserCollection.GetUsers);
router.post("/", UserCollection.PostUsers);
router.put("/:idUser", UserCollection.PutUsers);
router.delete("/:idUser", UserCollection.DeleteUsers);

// res = response= la respuesta q nos da el servidor
// req= require = peticion de datos al servidor

module.exports = router;
