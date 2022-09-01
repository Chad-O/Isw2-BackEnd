import {Router} from "express";
import { getPreguntasPriv,getPreguntasPrivXUsr , createPreguntaPriv, updatePreguntaPriv } from "../controllers/preguntasPriv.controller.js";

const router = Router();

router.get("/preguntaspriv", getPreguntasPriv);
router.get("/preguntaspriv/:id", getPreguntasPrivXUsr);
router.post("/preguntaspriv", createPreguntaPriv);
router.put("/preguntaspriv/:id", updatePreguntaPriv);

export default router;