import ReviewForm from "./ReviewForm";
import { useState } from "react";

const Review = ({ username, onReviewSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {username ? (
        <>
          <div
            className=" text-white font-bold hover:underline cursor-pointer"
            onClick={openModal}
          >
            Write A Review
          </div>
          <ReviewForm
            isOpen={modalOpen}
            onClose={closeModal}
            username={username}
            onReviewSubmit={onReviewSubmit}
          />
        </>
      ) : null}
    </>
  );
};

export default Review;
