import { Router } from "express";
import {
  getAllShoes,
  getFancyShoes,
  getFeaturedShoes,
  getSportShoes,
  getCasualShoes,
  removeShoe,
  updateShoe,
  getShoe,
} from "../controllers/shoeController.js";
import {
  addToCart,
  addUser,
  getAllUser,
  logUserIn,
  makeUserEmployee,
  removeFromCart,
  unMakeUserEmployee,
} from "../controllers/userController.js";
import { addReview, getALLReviews } from "../controllers/reviewController.js";
import { protectRoutes } from "../Authentication/auth.js";

const router = Router();
/*
          -- ALL ROUTES FOR SHOES --
*/
router.get("/shoes", getAllShoes);
router.get("/shoe/:id", getShoe);
router.get("/fancy", getFancyShoes);
router.get("/sport", getSportShoes);
router.get("/casual", getCasualShoes);
router.get("/featured", getFeaturedShoes);
router.patch("/:id", updateShoe);
router.delete("/:id", removeShoe);
/*
          -- ALL ROUTES FOR USERS --
*/
router.get("/users", getAllUser);
router.post("/users", addUser);
router.post("/login", logUserIn);
router.post("/addtocart", protectRoutes, addToCart);
router
  .patch("/upgrade/:id", makeUserEmployee)
  .patch("/downgrade/:id", unMakeUserEmployee);
router.delete("/removefromcart", protectRoutes, removeFromCart);
/*
          -- ALL ROUTES FOR REVIEWS --
*/
router.get("/reviews", getALLReviews);
router.post("/review", addReview);

export default router;
