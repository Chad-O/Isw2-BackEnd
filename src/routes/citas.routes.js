import {Router} from "express";
import { getCitas,getCita, getCitaXMed, getCitaxPac, createCita, deleteCita,updateCita } from "../controllers/citas.controller.js";

const router = Router();

router.get("/citas", getCitas);
router.get("/citas/:id", getCita);
router.get("/citasxMed/:id", getCitaXMed);
router.get("/citasxPac/:id", getCitaxPac);
router.post("/citas", createCita);
router.delete("/citas/:id",deleteCita);
router.put("/citas/:id", updateCita);

export default router;