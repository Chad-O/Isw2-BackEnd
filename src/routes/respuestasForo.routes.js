import { Router } from "express";
import { 
    getRespuestasForos,
    createRespuestaForo, 
    getRespuestaForo, 
    } 
from "../controllers/respuestasForo.controller.js";

const router = Router();

router.get("/respuestasForo" , getRespuestasForos);
router.get("/respuestasForo/:id" , getRespuestaForo);
router.post("/respuestasForo", createRespuestaForo);
//router.put("/medicinaFreq/:id", updateMedicinaFreq);
// router.delete("/medicinaFreq/:id", deleteMedicinaFreq)

export default router; 