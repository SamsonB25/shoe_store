import axios from "axios";
import { useState, useEffect } from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const ReviewsContainer = ({ username }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    try {
      const response = await axios.get("/api/shoes/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReviewSubmit = async (review) => {
    try {
      const response = await axios.post("/api/shoes/review", review, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      // Append the new review to the existing list of reviews
      const newReview = response.data;
      setReviews((prevReviews) => [...prevReviews, newReview]);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <>
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      <Reviews reviews={reviews} username={username} />
    </>
  );
};

const Reviews = ({ reviews, username }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <Review username={username} />
      ) : (
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            Customer Reviews
            <Review username={username} />
          </div>

          {reviews.map((review) => (
            <div key={review.id} className="w-1/2 ">
              <div className="bg-slate-500 rounded m-1 p-1">
                {review.review}
                <div>Posted by: {review.users_id}</div>
                <div>Date Posted: {review.posted_on}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ReviewsContainer;
