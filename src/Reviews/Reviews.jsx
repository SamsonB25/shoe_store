import axios from "axios";
import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  //get reviews from database
  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await axios.get("/api/shoes/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getReviews();
  }, []);
  console.log(reviews);

  if (reviews.length === 0) return <div>No Reviews</div>;

  return (
    <div className="flex flex-col justify-center">
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
  );
};

export default Reviews;
