import {Router} from "express";
import {getProfesores,
        getProfesor,
        createProfesor,
        deleteProfesor}
        from "../controllers/profesores.controller.js"

const router = new Router();

router.get("/profesores", getProfesores);
router.get("/profesor/:id", getProfesor);
router.post("/profesor", createProfesor);
router.delete("/profesor/:id", deleteProfesor);

export default router;