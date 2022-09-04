import {Router} from "express";
import{getUsuarios,
        getUsuario,
        createUsuario,
        updateUsuario,
        deleteUsuario}
        from "../controllers/usuarios.controller.js";

const router = new Router();

router.get("/usuarios", getUsuarios);
router.get("/usaurio/:id", getUsuario);
router.post("/usaurio", createUsuario);
router.put("/usuario/:id", updateUsuario);
router.delete("/usaurio/:id",deleteUsuario);

export default router;