import { Router } from "express";
import { 
    getForos, 
    createForo, 
    getForo, 
    updateForo, 
    deleteForo} 
from "../controllers/foro.controller.js";

const router = Router();

router.get("/foro" , getForos);
router.get("/foro/:id" , getForo);
router.post("/foro", createForo);
router.put("/foro/:id", updateForo);
router.delete("/foro/:id", deleteForo);

export default router; 