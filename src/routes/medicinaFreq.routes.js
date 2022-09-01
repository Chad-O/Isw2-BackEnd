import { Router } from "express";
import { 
    getMedicinaFreqs, 
    createMedicinaFreq, 
    getMedicinaFreq, 
    deleteMedicinaFreq} 
from "../controllers/medicinaFreq.controller.js";

const router = Router();

router.get("/medicinaFreq" , getMedicinaFreqs);
router.get("/medicinaFreq/:id" , getMedicinaFreq);
router.post("/medicinaFreq", createMedicinaFreq);
//router.put("/medicinaFreq/:id", updateMedicinaFreq);
router.delete("/medicinaFreq/:id", deleteMedicinaFreq)

export default router; 