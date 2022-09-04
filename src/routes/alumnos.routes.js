import {Router} from "express";
import {getAlumno,
        getAlumnos,
        createAlumno,
        deleteAlumno}
        from "../controllers/alumnos.controller.js";

const router = new Router();

router.get("/alumnos", getAlumnos);
router.get("/alumno/:id", getAlumno);
router.post("/alumno", createAlumno);
router.delete("/alumno/:id", deleteAlumno);

export default router;