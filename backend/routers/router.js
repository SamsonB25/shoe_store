import { Router } from "express";
import { getAllShoes } from "../controllers/shoeController.js";

const router = Router();

router.get("/", getAllShoes);

export default router;
