import app from "./backend/middleware.js"; // check middleware for "app" configs
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
