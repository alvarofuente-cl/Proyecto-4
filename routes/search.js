const express = require('express')
const router = express.Router()

const reservasController = require('../controllers/reservasController')

/**
 * @swagger
 * components:
 *  schemas:
 *    Reservas:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: El identificador único de la reserva
 *        hotel:
 *          type: string
 *          description: El nombre del hotel reservado
 *        fecha_inicio:
 *          type: string
 *          format: date
 *          description: La fecha de inicio de la reserva
 *        fecha_fin:
 *          type: string
 *          format: date
 *          description: La fecha de fin de la reserva
 *        tipo_habitacion:
 *          type: string
 *          description: El tipo de habitación reservada
 *        estado:
 *          type: string
 *          description: El estado de la reserva
 *        num_huespedes:
 *          type: integer
 *          description: El número de huéspedes para la reserva
 *      required:
 *        - id
 *        - hotel
 *        - fecha_inicio
 *        - fecha_fin
 *        - tipo_habitación
 *        - estado
 *        - num_huespedes
 *      example:
 *        id: 1
 *        hotel: "Hotel 1000 estrellas"
 *        fecha_inicio: "2021-09-01"
 *        fecha_fin: "2021-09-03"
 *        tipo_habitacion: Doble
 *        estado: Confirmada
 *        num_huespedes: 3
 */



// d. Obtener reserva por hotel
/**
 * @swagger
 * /api/search:
 *  get:
 *    summary: Obtener reserva por hotel
 *    tags: [Reservas]
 *    parameters:
 *      - in: query
 *        name: hotel
 *        schema:
 *          type: string
 *        description: The hotel of the ordered item
 *      - in: query
 *        name: fecha_inicio
 *        schema:
 *          type: string
 *          format: date
 *        description: The fecha_inicio name
 *      - in: query
 *        name: fecha_fin
 *        schema:
 *          type: string
 *          format: date
 *        description: The date of the order
 *      - in: query
 *        name: tipo_habitacion
 *        schema:
 *          type: string
 *        description: The tipo_habitacion status
 *      - in: query
 *        name: estado
 *        schema:
 *          type: string
 *        description: The estado of the order
 *      - in: query
 *        name: num_huespedes
 *        schema:
 *          type: integer
 *        description: The num_huespedes status
 *    responses:
 *      200:
 *        description: Obtener reserva por hotel
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Reservas'
 */
router.get('/', reservasController.filter)

module.exports = router
