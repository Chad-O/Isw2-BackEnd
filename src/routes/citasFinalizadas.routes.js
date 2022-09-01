import {Router} from "express";
import {getCitasFin,
    getCitaFin,
    createCitasFin,
    updateCitasFin,
    deleteCitasFin } from "../controllers/citasFinalizadas.controlle.js"

const router = Router();

router.get("/citasFin", getCitasFin);
router.get("/citasFin/:id", getCitaFin);
router.post("/citasFin", createCitasFin);
router.put("/citasFin/:id", updateCitasFin);
router.delete("/citasFin/:id", deleteCitasFin);

export default router;