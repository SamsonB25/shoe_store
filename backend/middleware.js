import express from "express";
import router from "./routers/router.js";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/shoes", router);

// export const generateAccessToken = async (user) => {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
// };

export default app;
