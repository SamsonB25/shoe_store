import ReviewForm from "./ReviewForm";
import { useContext, useState } from "react";
import AuthContext from "../../../Authentication/AuthProvider";

const Review = ({ onReviewSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { auth } = useContext(AuthContext);
  let username;
  auth.username ? (username = auth.username) : username;
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
