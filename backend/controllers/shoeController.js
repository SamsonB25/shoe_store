import { db } from "../database/database.js";
import { allShoes, deleteShoe, featuredShoes, patchShoe } from "./queries.js";

export const getAllShoes = async (req, res) => {
  try {
    const results = await db.query(allShoes);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
  }
};

export const getFeaturedShoes = async (req, res) => {
  try {
    const results = await db.query(featuredShoes);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json("Something went wrong");
  }
};

export const updateShoe = async (req, res) => {
  try {
    const { type, name, image, price, description } = req.body;
    const id = Number(req.params.id);
    const results = await db.query(patchShoe, [
      type,
      name,
      image,
      price,
      description,
      id,
    ]);
    if (results.rowCount === 0) {
      return res.status(304).json("not real");
    }
    res.status(202).json(results.rows[0]);

    //error handling
  } catch (err) {
    console.error(err);
    res.status(500).json({ Error: "Error updating shoe." });
  }
};

export const removeShoe = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const results = await db.query(deleteShoe, [id]);
    res.status(200).json(results.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ Error: "Error Deleting shoe." });
  }
};
