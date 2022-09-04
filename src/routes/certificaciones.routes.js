import {Router} from "express";
import {getCertificaciones,
        getCertificacion,
        createCertificacion,
        updateCertificacion,
        deleteCertificacion}
        from "../controllers/certificaciones.controller.js";

const router = new Router();

router.get("/certificaciones", getCertificaciones);
router.get("/certificacion/:id", getCertificacion);
router.post("/certifaicion", createCertificacion);
router.put("/certificacion/:id", updateCertificacion);
router.delete("/certificado/:id", deleteCertificacion);

export default router;