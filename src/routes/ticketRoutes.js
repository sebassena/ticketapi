const { Router } = require("express");
const ticketController = require('../controllers/ticketController')

const router = Router();

//Crear ticket
router.post('/', ticketController.createTicket)
//Obtener todos los tickets
router.get('/', ticketController.getTickets)
//Obtener ticket por ID
router.get('/:ticketId', ticketController.getTicketById)
//Eliminar ticket por ID
router.delete('/:ticketId', ticketController.deleteTicket)
//Actualizar ticket por ID
router.put('/:ticketId', ticketController.updateTicket)

module.exports = router;