const express = require('express');
const lenguasSchema = require("../modelo/lenguas"); //constante que viene desde el modelo de la base de datos 

const router = express.Router(); //constante para poder importarlo a otros modelos

//Usamos metodo post porque queremos agregar una lengua, pedimos dos parametros, (req, res) que son los que vamos a agregar 
router.post("/lenguas", (req, res) => {
    const lenguas = lenguasSchema(req.body);
    lenguas
        .save()
        .then((data) => res.json(data))
});

//Usando metodo get para Ver todas las lenguas que existen en la base de datos 
router.get("/lenguas", (req, res) => {
    lenguasSchema
        .find()
        .then((data) => res.json(data))
});
//Metodo get que se usa para poder Buscar 1 lengua dependiendo de los parametros que se den 
router.get("/lenguas/:id", (req, res) => {
    const { id } = req.params;
    lenguasSchema
        .findById(id)
        .then((data) => res.json(data))
}); 
//metodo put que se usa para poder Actualizar algun registro de la base de datos, el usuario debe de ingresar los parametros necesarios 
router.put("/lenguas/:id", (req, res) => {
    const { id } = req.params;
    const { ID, NOMBRE, TIPO, DESCRIPCION, TOKEN} = req.body;
    lenguasSchema
        .updateOne({ _id: id}, { $set: {ID, NOMBRE, TIPO, DESCRIPCION, TOKEN}})
        .then((data) => res.json(data))
}); 

//Metodo delete para borrar algun registro de la base de datos, en este caso se usa el id de esa lengua para que sea sencillo identificarla
router.delete("/lenguas/:id", (req, res) => {
    const { id } = req.params;
    lenguasSchema
        .remove({ _id: id} )
        .then((data) => res.json(data))
}); 
//se exporta a la variable principal router 
module.exports = router;