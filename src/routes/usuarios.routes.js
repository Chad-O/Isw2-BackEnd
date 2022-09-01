import {Router} from "express";
import {getUsuarios,
        getUsuario,
        logInAuthentication, 
        createUsuario, 
        deleteUsuario, 
        updateUsuario} 
from "../controllers/usuarios.controller.js"


const router = Router();

router.get("/usuarios" , getUsuarios);
router.get("/usuarios/:id" , getUsuario);
router.get("/usuarios/:nom_usr/:contra", logInAuthentication)
router.post("/usuarios", createUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.put("/usuarios/:id", updateUsuario);

export default router;