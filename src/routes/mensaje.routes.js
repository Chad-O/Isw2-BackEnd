import {Router} from "express";
import {getMensajes,
        getMensaje,
        createMensaje,
        updateMensaje,
        deleteMensaje}
        from "../controllers/mensaje.controller.js";

const router = new Router();

router.get("/mensajes", getMensajes);
router.get("mensaje/:id", getMensaje);
router.post("/mensaje", createMensaje);
router.put("/mensaje/:id", updateMensaje);
router.delete("/mensaje/:id" , deleteMensaje);

export default router;