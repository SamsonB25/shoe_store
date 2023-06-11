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
  logUserIn,
  makeUserEmployee,
  unMakeUserEmployee,
} from "../controllers/userController.js";

const router = Router();
/*
          -- ALL ROUTES FOR SHOES --
*/
router.get("/", getAllShoes);
router.get("/featured", getFeaturedShoes);
router.patch("/:id", updateShoe);
router.delete("/:id", removeShoe);
/*
          -- ALL ROUTES FOR USERS --
*/
router.get("/users", getAllUser);
router.post("/users", addUser);
router.post("/login", logUserIn);
router
  .patch("/upgrade/:id", makeUserEmployee)
  .patch("/downgrade/:id", unMakeUserEmployee);

export default router;
