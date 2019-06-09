const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let reservaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String
    },
    fecha: {
        type: String
    },
    numero_personas: {
        type: Number,
    },
    fecha_salida: {
        type: String
    },
    precio: {
        type: Number
    }

});

module.exports = mongoose.model('Reserva', reservaSchema);