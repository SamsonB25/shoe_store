import { Router } from "express";
import {
  getAllShoes,
  getFeaturedShoes,
  removeShoe,
  updateShoe,
} from "../controllers/shoeController.js";

const router = Router();

router.get("/", getAllShoes);
router.get("/featured", getFeaturedShoes);
router.patch("/:id", updateShoe);
router.delete("/:id", removeShoe);

export default router;
