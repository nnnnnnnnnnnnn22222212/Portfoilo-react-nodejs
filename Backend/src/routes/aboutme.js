import express from "express";
import { getAll } from "../controllers/aboutme";


const router = express.Router();
router.get("/aboutme", getAll);


export default router;


