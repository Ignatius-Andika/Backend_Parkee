import express from "express";
import { 
    getTicket, 
    getTicketById,
    saveTicket,
    updateTicket,
    deleteTicket
} from "../controllers/ParkingTicketController";

const router = express.Router();

router.get('/ticket', getTicket);
router.get('/ticket/:id', getTicketById);
router.post('/ticket', saveTicket);
router.patch('/ticket/:id', updateTicket);
router.delete('/ticket/:id', deleteTicket);

export default router;