import { Router } from "express";
import {
  getAllShoes,
  getFeaturedShoes,
  removeShoe,
  updateShoe,
} from "../controllers/shoeController.js";
import {
  addUser,
  getAllUser,
  makeUserEmployee,
  unMakeUserEmployee,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getAllShoes);
router.get("/featured", getFeaturedShoes);
router.patch("/:id", updateShoe);
router.delete("/:id", removeShoe);

router.get("/users", getAllUser);
router.post("/", addUser);
router
  .patch("/upgrade/:id", makeUserEmployee)
  .patch("/downgrade/:id", unMakeUserEmployee);

export default router;
