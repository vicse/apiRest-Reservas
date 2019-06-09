var express = require('express');
var router = express.Router();
const Reserva = require('../models/reserva');

//============================
//Obtener todos las reservas
//============================
router.get('/', (req, res) => {

    Reserva.find({}, (err, reservas) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            reservas
        });
    });

});


//============================
//Obtener un solo una reserva por ID
//============================

router.get('/:id', (req, res) => {

    let id = req.params.id;

    Reserva.findById(id)
        .exec((err, reservaDB) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            if (!reservaDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'EL id no es correcto'
                    }
                });
            }

            res.json({
                ok: true,
                reserva: reservaDB
            });
        });

});


//============================
//Crea una nueva reserva
//============================

router.post('/', (req, res) => {

    let body = req.body;

    let reserva = new Reserva({
        nombre: body.nombre,
        correo: body.correo,
        fecha: body.fecha,
        numero_personas: body.numero_personas,
        fecha_salida: body.fecha_salida,
        pago: body.pago
    });

    reserva.save((err, reservaDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            reserva: reservaDB
        });

    });

});

//============================
//Actualizar una reserva  por ID
//============================

router.put('/:id', (req, res) => {

    let id = req.params.id;
    let body = req.body;

    let newRerserva = {
        nombre: body.nombre,
        correo: body.correo,
        fecha: body.fecha,
        numero_personas: body.numero_personas,
        fecha_salida: body.fecha_salida,
        pago: body.pago
    }

    Reserva.findOneAndUpdate(id, newRerserva, (err, reservaActualizada) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!reservaActualizada) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            reserva: reservaActualizada
        });
    });
});

//===========================
//Elimina una reserva por ID
//===========================

router.delete('/:id', (req, res) => {

    let id = req.params.id;

    Reserva.findOneAndRemove(id, (err, reservaBorrada) => {

        if (err) {
            return res.status(404).json({
                ok: false,
                err
            });
        }

        if (!reservaBorrada) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Reserva no encontrada'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Reserva borrada'
        });

    });

});

module.exports = router;