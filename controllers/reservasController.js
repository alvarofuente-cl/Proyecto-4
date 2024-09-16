// const useCreteData = async (id) =>{
//     const resp = await axios.get(`url/${id}`, data)
// }

let reserva = [
    {
        id: 1,
        hotel: "Hotel Paraíso",
        fecha_inicio: "2023-05-15",
        fecha_fin: "2023-05-20",
        tipo_habitacion: "Doble",
        estado: "Confirmada",
        num_huespedes: 3
    },
]

// a. Crear reserva
exports.create = async (req, res) => {
    try{
        const newReserva = req.body
        newReserva.id = reserva.length + 1
        reserva.push(newReserva)

        res.status(201).json({
            msg: 'Reserva creada con éxito.',
            data: newReserva,
        })
    } catch (error) {
        res.status(500).json({ msg: `Error: ${error.message}`})
    }
}

// b. Obtener la lista de reservas
exports.readAll = async (req, res) => {
    res.status(200).json({
        msg: 'Reserva realizada con éxito.',
        data: reserva,
    })
}

// c. Obtener información de un pedido específico
exports.readOne = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const order = reserva.find((o) => o.id === orderId)

    if (!order) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({
        msg: 'Pedido obtenido con éxito.',
        data: order,
    })
}

// d. Actualizar información de un pedido específico
exports.update = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const orderIndex = reserva.findIndex((o) => o.id === orderId)

    if (orderIndex === -1) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    reserva[orderIndex] = { ...reserva[orderIndex], ...req.body }
    res.json({
        msg: 'Pedido actualizado con éxito.',
        data: reserva[orderIndex],
    })
}

// e. Eliminar un pedido específico
exports.delete = async (req, res) => {
    const orderId = parseInt(req.params.id)
    const orderIndex = reserva.findIndex((o) => o.id === orderId)

    if (orderIndex === -1) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    reserva.splice(orderIndex, 1)
    res.json({ msg: 'Pedido eliminado con éxito.' })
}

// f-j. F
exports.filter = async (req, res) => {
    const { name, restaurant, date, status } = req.query

    const filteredreserva = reserva.filter((order) => {
        if (name && order.name !== name) {
            return false
        }
        if (restaurant && order.restaurant !== restaurant) {
            return false
        }
        if (date && order.date !== date) {
            return false
        }
        if (status && order.status !== status) {
            return false
        }
        return true
    })

    if (filteredreserva.length === 0) {
        return res.status(404).json({ msg: 'Pedido no encontrado.' })
    }

    res.json({
        msg: 'Pedidos filtrados con éxito.',
        data: filteredreserva,
    })
}
