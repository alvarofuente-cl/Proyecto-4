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
        msg: 'Reservas obtenidas con éxito.',
        data: reserva,
    })
}

// c. Obtener información de una reserva específica
exports.readOne = async (req, res) => {
    const reservaId = parseInt(req.params.id)
    const reservaesp = reserva.find((o) => o.id === reservaId)

    if (!reservaesp) {
        return res.status(404).json({ msg: 'Reserva no encontrada.' })
    }

    res.status(200).json({
        msg: 'Reserva obtenida con éxito.',
        data: reservaesp,
    })
}

// d. Actualizar información de una reserva específica
exports.update = async (req, res) => {
    const reservaId = parseInt(req.params.id)
    const reservaIndex = reserva.findIndex((o) => o.id === reservaId)

    if (reservaIndex === -1) {
        return res.status(404).json({ msg: 'Reserva no encontrada.' })
    }

    reserva[reservaIndex] = { ...reserva[reservaIndex], ...req.body }
    res.json({
        msg: 'Reserva actualizada con éxito.',
        data: reserva[reservaIndex],
    })
}

// e. Eliminar una reserva específica
exports.delete = async (req, res) => {
    const reservaId = parseInt(req.params.id)
    const reservaIndex = reserva.findIndex((o) => o.id === reservaId)

    if (reservaIndex === -1) {
        return res.status(404).json({ msg: 'Reserva no encontrada.' })
    }

    reserva.splice(reservaIndex, 1)
    res.status(200).json({ msg: 'Reserva eliminada con éxito.' })
}

// f-j. F
exports.filter = async (req, res) => {
    const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes} = req.query

    const filteredreserva = reserva.filter((obj) => {
        if (hotel && obj.hotel !== hotel) {
            return false
        }
        if (fecha_inicio && obj.fecha_inicio !== fecha_inicio) {
            return false
        }
        if (fecha_fin && obj.fecha_fin !== fecha_fin) {
            return false
        }
        if (tipo_habitacion && obj.tipo_habitacion !== tipo_habitacion) {
            return false
        }
        if (estado && obj.estado !== estado) {
            return false
        }
        if (num_huespedes && obj.num_huespedes != num_huespedes) {
            return false
        }
        return true
    })

    if (filteredreserva.length === 0) {
        return res.status(404).json({ msg: 'Filtro no encontrada.' })
    }

    res.json({
        msg: 'Filtro filtrada con éxito.',
        data: filteredreserva,
    })
}