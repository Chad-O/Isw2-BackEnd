import {Router} from "express";
import {getHilo,
        getHilos,
        createHilo,
        updateHilo,
        deleteHilo}
        from "../controllers/hilos.controller";

const router = new Router();

router.get("/hilos", getHilos);
router.get("/hilo/:id", getHilo);
router.post("/hilo", createHilo);
router.put("/hilo/:id", updateHilo);
router.delete("/hilo/:id", deleteHilo);

export default router;