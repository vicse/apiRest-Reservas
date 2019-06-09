const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let reservaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    numero_personas: {
        type: String,
        required: true
    },
    fecha_salida: {
        type: String,
        required: true
    },
    pago: {
        type: Boolean,
        required: true
    }

});

module.exports = mongoose.model('Reserva', reservaSchema);