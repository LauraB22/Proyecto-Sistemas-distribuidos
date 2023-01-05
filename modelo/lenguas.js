const mongoose = require("mongoose");

//importamos la constante a mongoose para poder conectarlo con lenguasSchema 
const lenguasSchema = mongoose.Schema({
    //el id es un parametro temporal 
    ID: {
        type: Number,
        required: true
    },
    NOMBRE: {
        type: String,
        required: true
    },
    TIPO: {
        type: String,
        required: true
    },
    DESCRIPCION: {
        type: String,
        required: true
    },
    TOKEN: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('lenguas', lenguasSchema);
//exportamos con la funcion mongoose 