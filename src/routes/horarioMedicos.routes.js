import {Router} from "express";
import { getHorarioMedicos,getHorarioMedico,getHorarioMedicoXMedico , createHorarioMedico, updateHorarioMedico, deleteHorarioMedico } from "../controllers/horarioMedicos.controller.js";

const router = Router();

router.get("/horarioMedicos", getHorarioMedicos);
router.get("/horarioMedicos/:id",getHorarioMedico);
router.get("/horarioMedicosXMedico/:id", getHorarioMedicoXMedico);
router.post("/horarioMedicos", createHorarioMedico);
router.put("/horarioMedicos/:id", updateHorarioMedico);
router.delete("/horarioMedicos/:id", deleteHorarioMedico);

export default router;