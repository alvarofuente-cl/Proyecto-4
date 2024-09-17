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

// a. Crear reserva
/**
 * @swagger
 * /api/reservas:
 *  post:
 *    summary: Crear una nueva reserva
 *    tags: [Reservas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reservas'
 *    responses:
 *      201:
 *        description: Reserva creada satisfactoriamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reservas'
 */
router.post('/', reservasController.create)

// b. Obtener lista de reservas
/**
 * @swagger
 * /api/reservas:
 *  get:
 *    summary: Obtener lista de reservas
 *    tags: [Reservas]
 *    responses:
 *      200:
 *        description: Lista de reservas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reservas'
 */
router.get('/', reservasController.readAll)

// c. Obtener información de una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    summary: Obtener información de una reserva específica
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Obtener información de una reserva específica
 *    responses:
 *      200:
 *        description: Reserva especifica
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              items:
 *                $ref: '#/components/schemas/Reservas'
 */
router.get('/:id', reservasController.readOne)

// d. Actualizar información de una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *    summary: Actualizar información de una reserva específica
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Actualizar información de una reserva específica
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reservas'
 *    responses:
 *      200:
 *        description: Reservas updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reservas'
 *      404:
 *        description: Reservas not found
 */
router.put('/:id', reservasController.update)

// e. Eliminar una reserva específica
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    summary: Eliminar una reserva específica
 *    tags: [Reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Eliminar una reserva específica
 *    responses:
 *      200:
 *        description: Reserva eliminada con exito
 *      404:
 *        description: Reserva no encontrada
 */
router.delete('/:id', reservasController.delete)

module.exports = router
