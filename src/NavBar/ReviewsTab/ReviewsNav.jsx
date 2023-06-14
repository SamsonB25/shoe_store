const ReviewsNav = ({ reviewPage }) => {
  const reviewClickHandler = () => {
    reviewPage();
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
