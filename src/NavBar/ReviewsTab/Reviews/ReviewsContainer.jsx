import { useState, useEffect } from "react";
import Reviews from "./Reviews";
import api from "../../../api/axios.js";

const ReviewsContainer = ({ username }) => {
  const [reviews, setReviews] = useState([]);
  const [submitKey, setSubmitKey] = useState(0);

  useEffect(() => {
    getReviews();
  }, [submitKey]);

  const getReviews = async () => {
    try {
      const response = await api.get("/api/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewSubmit = async (users_id, review) => {
    try {
      const response = await api.post(
        "/api/review",
        { users_id, review },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response?.data);

      // Append the new review to the existing list of reviews
      const newReview = response.data;
      setReviews((prevReviews) => [...prevReviews, newReview]);

      setSubmitKey((prevKey) => prevKey + 1);
      console.log(submitKey);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <Reviews
        reviews={reviews}
        username={username}
        onReviewSubmit={handleReviewSubmit}
      />
    </>
  );
};

export default ReviewsContainer;
