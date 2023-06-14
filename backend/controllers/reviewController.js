import { db } from "../database/database.js";
import { getReviews, postReview } from "./queries.js";

// display all reviews
export const getALLReviews = async (req, res, next) => {
  try {
    const results = await db.query(getReviews);
    if (results.rowCount === 0)
      return res.status(204).json({ message: "No Reviews at this time" });

    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while getting reviews" });
  }
};

// post a review
export const addReview = async (req, res, next) => {
  try {
    const { review, users_id } = req.body;

    if (!review) {
      return res.status(400).json({ message: "Provide a review to submit" });
    }

    const posted_on = new Date().toISOString();
    const results = await db.query(postReview, [review, posted_on, users_id]);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error posting review" });
  }
};
