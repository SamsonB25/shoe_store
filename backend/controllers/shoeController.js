import { db } from "../database/database.js";
import { allShoes } from "./queries.js";

export const getAllShoes = async (req, res) => {
  try {
    const results = await db.query(allShoes);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
  }
};
