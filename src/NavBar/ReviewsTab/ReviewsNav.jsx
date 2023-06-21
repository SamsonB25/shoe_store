import { Link } from "react-router-dom";

const ReviewsNav = () => {
  return (
    <>
      <div className="Reviews cursor-pointer hover:underline">
        <Link to={"/reviews"}>Reviews</Link>
      </div>
    </>
  );
};

export default ReviewsNav;
