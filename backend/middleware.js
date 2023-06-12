import express from "express";
import router from "./routers/router.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/shoes", router);

app.use((req, res, next) => {
  console.log("hello");
  next();
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.status(
    err.status.json({
      status: err.status,
      message: err.message,
    })
  );
});

export default app;
