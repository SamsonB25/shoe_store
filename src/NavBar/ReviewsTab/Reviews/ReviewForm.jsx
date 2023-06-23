import { useState } from "react";

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
      onReviewSubmit(users_id, review);

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
            <label htmlFor="review">Write A Review</label>
            <br />
            <textarea
              className="p-1"
              rows={5}
              cols={33}
              onChange={reviewHandler}
            ></textarea>
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
