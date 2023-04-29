import express from "express";
import { getAll } from "../controllers/skill";


const router = express.Router();
router.get("/skills", getAll);


export default router;


