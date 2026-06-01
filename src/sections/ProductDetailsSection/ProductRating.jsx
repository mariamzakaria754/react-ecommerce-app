import { useLanguage } from "@/context/LanguageContext";

function ProductRating({ rating = 0, reviews = 0, stock }) {
  const { t } = useLanguage();
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  return (
    <div className="flex items-center justify-between flex-wrap gap-3">
      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">
              {i < fullStars ? "★" : "☆"}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>

      <span className="text-sm text-gray-500 underline cursor-pointer">
        {reviews} {t.reviews}
      </span>

      <span
        className={`text-sm font-medium ${stock ? "text-green-600" : "text-red-500"}`}
      >
        {stock ? t.inStock : t.outOfStock}
      </span>
    </div>
  );
}

export default ProductRating;
