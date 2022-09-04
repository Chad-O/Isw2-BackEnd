import {Router} from "express";
import {getModulo,
        getModulos,
        createModulo,
        updateModulo,
        deleteModulo}
        from "../controllers/modulos.controller.js";

const router = new Router();

router.get("/modulos", getModulos);
router.get("/modulo/:id", getModulo);
router.put("/modulo/:id", updateModulo);
router.post("/modulo", createModulo);
router.delete("/modulo/:id", deleteModulo);

export default router;