import {Router} from "express";
import {getPacientes,getPaciente, createPaciente, deletePaciente } from "../controllers/pacientes.controller.js";

const router = Router();

router.get("/pacientes",getPacientes);
router.get("/pacientes/:id", getPaciente);
router.post("/pacientes", createPaciente);
router.delete("/pacientes/:id", deletePaciente);

export default router;
