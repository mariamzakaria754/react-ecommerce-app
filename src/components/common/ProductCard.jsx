import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, ShoppingCart, Heart, Share2, Check, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import StarRating from "@/components/common/StarRating";
import useCartStore from "@/store/useCartStore";
import useWishlistStore from "@/store/useWishlistStore";
import { useLanguage } from "@/context/LanguageContext";

function ProductCard({
  product,
  mode = "default",
  onRemove,
  selectedSize = null,
  selectedColor: wishlistColor = null,
}) {
  const [added, setAdded] = useState(false);
  const { t } = useLanguage();

  const addToCart = useCartStore((s) => s.addToCart);
  const toggleWishlist = useWishlistStore((s) => s.toggleWishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);

  const isInWishlist = useMemo(() => {
    return wishlist.some((item) => String(item.id) === String(product.id));
  }, [wishlist, product.id]);

  const [selectedColor, setSelectedColor] = useState(
    wishlistColor || product.colors?.[0]?.value || null,
  );

  const image =
    product.thumbnail || product.images?.[0] || "/images/placeholder.png";

  const currentPrice = product.pricing?.current ?? product.price ?? 0;
  const oldPrice = product.pricing?.old ?? null;
  const discount = product.pricing?.discountPercentage ?? 0;
  const rating = product.ratings?.average ?? 0;
  const reviews = product.ratings?.totalReviews ?? 0;
  const category = product.category?.name ?? "";
  const colors = product.colors || [];
  const inStock = product.stock?.inStock ?? true;

  const effectiveColor = useMemo(
    () => wishlistColor || selectedColor || product.colors?.[0]?.value || "",
    [wishlistColor, selectedColor, product.colors],
  );

  function handleWishlist(e) {
    e.preventDefault();
    e.stopPropagation();
    const wasInWishlist = isInWishlist;
    toggleWishlist({
      ...product,
      selectedColor: effectiveColor || "",
      selectedSize: selectedSize || "",
    });
    toast.success(wasInWishlist ? t.removedFromWishlist : t.addedToWishlist);
  }

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!inStock) {
      toast.error(t.outOfStock);
      return;
    }
    addToCart(
      {
        ...product,
        selectedColor: effectiveColor || "",
        selectedSize: selectedSize || "",
      },
      1,
    );
    setAdded(true);
    toast.success(t.addedToCart);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <Link to={`/product/${product.slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.25 }}
        className="
          group
          h-full
          overflow-hidden
          rounded-2xl
          xl:rounded-[28px]
          border
          border-gray-100
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:shadow-[0_24px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            overflow-hidden
            h-[220px]
            sm:h-[250px]
            md:h-[280px]
            lg:h-[300px]
            xl:h-[320px]
            bg-gradient-to-b
            from-white
            via-[#fafafa]
            to-[#f3f3f3]
          "
        >
          {/* BADGE */}
          {(discount > 0 || product.isNew) && (
            <span
              className="
                absolute
                top-4
                left-4
                rtl:left-auto
                rtl:right-4
                rounded-full
                px-3
                py-1.5
                text-[11px]
                font-semibold
                text-white
                bg-[#DB4444]
              "
            >
              {product.isNew ? "NEW" : `-${discount}%`}
            </span>
          )}

          {/* ACTIONS */}
          <div
            className="
              absolute
              top-4
              right-4
              rtl:right-auto
              rtl:left-4
              flex
              flex-col
              gap-2
              opacity-100
              lg:opacity-0
              lg:group-hover:opacity-100
              transition
            "
          >
            {mode === "wishlist" ? (
              <ActionButton
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onRemove?.();
                }}
              >
                <Trash2 size={16} />
              </ActionButton>
            ) : (
              <>
                <ActionButton active={isInWishlist} onClick={handleWishlist}>
                  <Heart
                    size={16}
                    fill={isInWishlist ? "currentColor" : "none"}
                  />
                </ActionButton>
                <ActionButton>
                  <Eye size={16} />
                </ActionButton>
                <ActionButton>
                  <Share2 size={16} />
                </ActionButton>
              </>
            )}
          </div>

          {/* IMAGE */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.25 }}
            src={image}
            alt={product.title}
            className="
              object-contain
              w-[130px] h-[130px]
              sm:w-[150px] sm:h-[150px]
              md:w-[170px] md:h-[170px]
              xl:w-[190px] xl:h-[190px]
            "
          />

          {/* CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className="
              absolute
              bottom-0
              left-0
              rtl:left-auto
              rtl:right-0
              w-full
              py-3
              lg:py-4
              bg-black
              text-sm
              font-medium
              text-white
              transition-all
              translate-y-0
              lg:translate-y-full
              lg:group-hover:translate-y-0
            "
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.div className="flex items-center justify-center gap-2">
                  <Check size={18} />
                  {t.added}
                </motion.div>
              ) : (
                <motion.div className="flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  {t.addToCart}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* CONTENT */}
        <div className="space-y-3 p-4 lg:p-5">
          <p className="text-[11px] uppercase text-gray-400 text-start">
            {category}
          </p>

          <h3
            className="
              line-clamp-2
              min-h-[48px]
              text-sm
              sm:text-base
              lg:text-[17px]
              font-semibold
              group-hover:text-[#DB4444]
              text-start
            "
          >
            {product.title}
          </h3>

          <div className="flex items-center gap-3 rtl:flex-row-reverse rtl:justify-end">
            <span className="font-bold text-[#DB4444]">${currentPrice}</span>
            {oldPrice && oldPrice > 0 && (
              <span className="text-sm text-gray-400 line-through">
                ${oldPrice}
              </span>
            )}
          </div>

          <StarRating rating={rating} reviews={reviews} size={14} />

          {colors.length > 0 && (
            <div className="flex flex-wrap gap-2 rtl:flex-row-reverse">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(color.value);
                  }}
                  className={`
                    h-7 w-7
                    rounded-full
                    border-2
                    transition
                    ${selectedColor === color.value ? "border-black scale-110" : "border-white"}
                  `}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>
          )}

          <p
            className={`text-sm font-medium ${inStock ? "text-emerald-500" : "text-red-500"}`}
          >
            {inStock ? t.inStock : t.outOfStock}
          </p>
        </div>
      </motion.article>
    </Link>
  );
}

function ActionButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex
        h-9 w-9
        lg:h-10 lg:w-10
        items-center
        justify-center
        rounded-full
        bg-white/95
        transition
        ${active ? "text-[#DB4444]" : "text-gray-700"}
      `}
    >
      {children}
    </button>
  );
}

export default ProductCard;
