import express from "express";
import router from "./routers/router.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/shoes", router);

app.use((req, res, next) => {
  next();
});

export default app;
