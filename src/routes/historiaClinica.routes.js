import { Router } from "express";
import{
    getHistoriasClinicas,
    getHistoriaClinica,
    createHistoriaClinica,
    updateHistoriaClinica,
    deleteHistoriaClinica
} from "../controllers/historiaClinica.controller.js"

const router = Router();

router.get("/historiaClinica" , getHistoriasClinicas);
router.post("/historiaClinica", createHistoriaClinica);
router.get("/historiaClinica/:id" , getHistoriaClinica);
router.put("/historiaClinica/:id", updateHistoriaClinica);
router.delete("/historiaClinica/:id", deleteHistoriaClinica);

export default router; 