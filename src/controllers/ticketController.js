const { Ticket } = require('../models')

const createTicket = async (req, res) => {
    try {
        const { title, content, author, replies, status, category } = req.body;
        const newTicket = new Ticket({ title, content, author, replies, status, category });
        const ticketSaved = await newTicket.save();
        res.status(201).json(ticketSaved)
    } catch (e) {
        res.status(400).json({ message: `Error creando el ticket. ${e}` })
    }

}

const getTickets = async (req, res) => {
    try {
        const allTickets = await Ticket.find().populate({
            path: 'author',
            select: 'name roles',
            populate: {
                path: 'roles',
                select: 'roleName'
            }
        });
        if (!allTickets) return res.status(400).json({ message: "No se han podido obtener los tickes" })
        res.status(201).json(allTickets)
    } catch (e) {
        res.status(400).json({message: e})
    }
}

const deleteTicket = async (req, res) => {
    try{
        const deletedTicket = await Ticket.findByIdAndDelete(req.params.ticketId)
        if(deletedTicket === null) return res.status(400).json({message: "El ticket no se encuentra"})
        res.status(201).json({message: "Ticket eliminado", deletedTicket})
    } catch (e) { 
        res.status(400).json({message: e})
    }
}

const getTicketById = async (req, res) => {
    try {
        const getTicket = await Ticket.findById(req.params.ticketId);
        if (!getTicket) return res.status(400).json({ message: "Error al obtener el ticket" });
        res.status(201).json(getTicket)
    } catch (e) {
        res.status(400).json({message: e})
    }
}

const updateTicket = async (req, res) => {
    try{
        const updatedTicket = await Ticket.findByIdAndUpdate(req.params.ticketId, req.body,{
            new: true
        })
        if(updatedTicket === null) return res.status(400).json({message: "El ticket no se encuentra."})
        res.status(201).json(updatedTicket)
    } catch {
        res.status(400).json({message: e})
    }
}

module.exports = {
    createTicket,
    updateTicket,
    deleteTicket,
    getTicketById,
    getTickets
}