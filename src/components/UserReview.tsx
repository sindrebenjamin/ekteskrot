import { Review } from "../interfaces";
import { returnRating } from "../utils/returnRating";

const UserReview = ({
  review,
  isLast,
}: {
  review: Review;
  isLast: boolean;
}) => {
  const reviewClasses = isLast ? "border-b" : "";

  return (
    <div
      className={`${reviewClasses} p-4 bg-gray-50 border-t flex flex-col gap-2`}
    >
      <div className="flex justify-between items-center">
        <p className="font-bold">{review.username}</p>
        {returnRating(review.rating)}
      </div>
      <p>{review.description}</p>
    </div>
  );
};

export default UserReview;
