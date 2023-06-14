import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ isOpen, onClose, username, onReviewSubmit }) => {
  const [review, setReview] = useState("");
  const users_id = username;
  // username input value
  const reviewHandler = (event) => {
    setReview(event.target.value);
  };

  // form data from user
  const ReviewFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/shoes/review",
        {
          review,
          users_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      //re render reviews
      onReviewSubmit();

      // Clear the review and password fields
      setReview("");

      // close LoginForm
      onClose();
    } catch (error) {
      console.error(error.response);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className=" text-black fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className=" relative bg-white p-6 rounded shadow-md z-50">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 font-bold"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-bold mb-2">Review Form</h2>
        <div className="flex">
          <form className="flex-col" onSubmit={ReviewFormHandler}>
            <label htmlFor="review">Review</label>
            <br />
            <input
              type="text"
              name="review"
              id="review"
              value={review}
              placeholder="review"
              onChange={reviewHandler}
              className="bg-gray-400 rounded p-1 w-60 h-40"
            />
            <br />
            <button
              className="rounded bg-blue-700 text-white p-1 mt-1"
              onClick={ReviewFormHandler}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
