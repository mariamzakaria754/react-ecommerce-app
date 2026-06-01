import { motion } from "framer-motion";
import { toast } from "sonner";
import useWishlistStore from "@/store/useWishlistStore";
import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

function WishlistHeader() {
  const wishlist = useWishlistStore((s) => s.wishlist);
  // const clearWishlist = useWishlistStore((s) => s.clearWishlist);
  const addToCart = useCartStore((s) => s.addToCart);
  const isInCart = useCartStore((s) => s.isInCart);
  const { t, isArabic } = useLanguage();

  const totalItems = wishlist.length;

  function handleMoveAllToCart() {
    let added = 0;
    wishlist.forEach((product) => {
      if (!isInCart(product.id, product.selectedColor, product.selectedSize)) {
        addToCart(product, 1, "wishlist");
        added++;
      }
    });
    toast.success(
      added ? `${added} ${t.productsAddedToCart}` : t.allProductsInCart,
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between py-4 mb-12"
    >
      <h2 className="text-3xl font-medium">
        {t.wishlist} ({totalItems})
      </h2>

      <button
        onClick={handleMoveAllToCart}
        className="
          h-14 px-10
          border border-gray-400
          bg-white rounded-md
          font-semibold text-gray-900 font-poppins
          hover:bg-black hover:text-white hover:border-black
          hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]
          transition-all duration-300
        "
      >
        {t.moveAllToBag}
      </button>
    </motion.section>
  );
}

export default WishlistHeader;
