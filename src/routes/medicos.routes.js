import {Router} from "express";

import { getMedicos,getMedico,createMedico, updateMedico, deleteMedico } from "../controllers/medicos.controller.js";

const router = Router();

router.get("/medicos", getMedicos);
router.get("/medicos/:id", getMedico);
router.post("/medicos", createMedico);
router.delete("/medicos/:id", deleteMedico);
router.put("/medicos/:id", updateMedico);

export default router;