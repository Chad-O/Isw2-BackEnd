import { Router } from "express";
import { 
    getCertificados, 
    createCertificado, 
    getCertificado, 
    updateCertificado, 
    deleteCertificado} 
from "../controllers/certificados.controller.js";

const router = Router();

router.get("/certificados" , getCertificados);
router.get("/certificados/:id" , getCertificado);
router.post("/certificados", createCertificado);
router.put("/certificados/:id", updateCertificado);
router.delete("/certificados/:id", deleteCertificado)

export default router; 