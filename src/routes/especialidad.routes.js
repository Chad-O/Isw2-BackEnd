import {Router} from "express";

import { getEspecialidades, getEspecialidad,createEspecialidad, deleteEspecialidad, updateEspecialidad } from "../controllers/especialidad.controller.js";

const router = Router();

router.get("/especialidad", getEspecialidades);
router.get("/especialidad/:id", getEspecialidad);
router.post("/especialidad", createEspecialidad);
router.delete("/especialidad/:id", deleteEspecialidad);
router.put("/especialidad/:id", updateEspecialidad);

export default router;