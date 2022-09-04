import {Router} from "express";
import { getListaMod,
        getLista_Mod,
        createLista_Mod,
        updateLista_Mod,
        deleteLista_Mod}
         from "../controllers/lista_modulos.controller.js";

const router = new Router();

router.get("/listas", getListaMod);
router.get("/lista/:id", getLista_Mod);
router.post("/lista", createLista_Mod);
router.put("/lista/:id", updateLista_Mod);
router.delete("/lista/:id", deleteLista_Mod);

export default router;