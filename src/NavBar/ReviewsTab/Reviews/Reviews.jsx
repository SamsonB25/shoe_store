import Review from "./Review";
import { DateTime } from "luxon";

const Reviews = ({ reviews, username, onReviewSubmit }) => {
  return (
    <>
      {reviews.length === 0 ? (
        <Review username={username} onReviewSubmit={onReviewSubmit} />
      ) : (
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            Customer Reviews
            <Review username={username} onReviewSubmit={onReviewSubmit} />
          </div>

          {reviews.map((review) => (
            <div key={review.id} className="w-1/2 ">
              <div className="bg-slate-500 rounded m-1 p-1">
                {review.review}
                <div>Posted by: {review.users_id}</div>
                <div>
                  Date Posted:
                  {DateTime.fromISO(review.posted_on).toFormat("dd LLL yyyy")}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Reviews;
