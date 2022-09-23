import express from "express";
import { 
    getRate, 
    getPriceByHour,
    saveRate,
    updateRate,
    deleteRate
} from "../controllers/PriceRateController.js";

const router = express.Router();

router.get('/pricerate', getRate);
router.get('/pricerate/:id', getPriceByHour);
router.post('/pricerate', saveRate);
router.patch('/pricerate/:id', updateRate);
router.delete('/pricerate/:id', deleteRate);

export default router;