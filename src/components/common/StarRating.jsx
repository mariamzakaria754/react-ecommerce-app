import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({
  rating = 0,
  reviews = 0,
  size = 15,
  showReviews = true,
  justify = "start",
}) {
  return (
    <div className={`flex items-center gap-2 justify-${justify}`}>
      {/* STARS */}
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= star) {
            return <FaStar key={star} size={size} className="text-[#FFAD33]" />;
          }

          if (rating >= star - 0.5) {
            return (
              <FaStarHalfAlt
                key={star}
                size={size}
                className="text-[#FFAD33]"
              />
            );
          }

          return (
            <FaRegStar key={star} size={size} className="text-[#D1D5DB]" />
          );
        })}
      </div>

      {/* REVIEWS */}
      {showReviews && (
        <span
          className="
            text-sm
            text-gray-500
            font-medium
          "
        >
          ({reviews})
        </span>
      )}
    </div>
  );
}

export default StarRating;
