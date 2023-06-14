import axios from "axios";
import { useEffect, useState } from "react";

const ReviewsNav = ({ reviewPage }) => {
  const reviewClickHandler = () => {
    reviewPage();
    console.log("it worked");
  };

  return (
    <>
      <div
        className="Reviews cursor-pointer hover:underline"
        onClick={reviewClickHandler}
      >
        Reviews
      </div>
    </>
  );
};

export default ReviewsNav;
