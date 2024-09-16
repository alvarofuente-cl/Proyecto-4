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

// b. Obtener la lista de reservas
/**
 * @swagger
 * /api/reservas:
 *  get:
 *    summary: Obtener la lista de reservas
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

// d. Actualizar información de un pedido específico
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *    summary: Update information of a specific Resevas
 *    tags: [reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The Resevas's unique identifier
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Resevas'
 *    responses:
 *      200:
 *        description: Resevas updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Resevas'
 *      404:
 *        description: Resevas not found
 */
router.put('/:id', reservasController.update)

// e. Eliminar un pedido específico
/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    summary: Delete a specific Resevas
 *    tags: [reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The Resevas's unique identifier
 *    responses:
 *      200:
 *        description: Resevas deleted successfully
 *      404:
 *        description: Resevas not found
 */
router.delete('/:id', reservasController.delete)

// f-j. Filtros
/**
 * @swagger
 * /api/reservas/search:
 *  get:
 *    summary: Search reservas with filters
 *    tags: [reservas]
 *    parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: The name of the Resevased item
 *      - in: query
 *        name: restaurant
 *        schema:
 *          type: string
 *        description: The restaurant's name
 *      - in: query
 *        name: date
 *        schema:
 *          type: string
 *          format: date
 *        description: The date of the Resevas
 *      - in: query
 *        name: status
 *        schema:
 *          type: string
 *        description: The Resevas's status
 *    responses:
 *      200:
 *        description: A list of reservas that match the filters
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Resevas'
 */
router.get('/search', reservasController.filter)

// c. Obtener información de un pedido específico
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    summary: Get information of a specific Resevas
 *    tags: [reservas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The Resevas's unique identifier
 *    responses:
 *      200:
 *        description: Information of the specific Resevas
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Resevas'
 *      404:
 *        description: Resevas not found
 */
router.get('/:id', reservasController.readOne)

module.exports = router
