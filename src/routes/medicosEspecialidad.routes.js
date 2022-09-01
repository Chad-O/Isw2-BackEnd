import {Router}from "express";
import { getMedEsps, getMedEspXMed, createMedEsp, deleteMedEsp } from "../controllers/medicosEspecialidad.controller.js";

const router = Router();

router.get("/medEsp",getMedEsps);
router.get("/medEspXMed/:id", getMedEspXMed);
router.post("/medEsp",createMedEsp);
router.delete("/medEsp/:id",deleteMedEsp);

export default router;
