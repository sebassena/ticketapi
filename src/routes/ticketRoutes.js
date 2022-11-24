const { Router } = require("express");
const ticketController = require('../controllers/ticketController')

const router = Router();

//Crear ticket
router.post('/', ticketController.createTicket)
//Obtener todos los tickets
router.get('/', ticketController.getTickets)
//Eliminar ticket por ID
router.delete('/ticketId', ticketController.deleteTicket)
//Obtener ticket por ID
router.get('/:ticketId', ticketController.getTicketById)
//Actualizar ticket por ID
router.put('/:ticketId')

module.exports = router;