import { ProductCard } from "@/components/common";
import useWishlistStore from "@/store/useWishlistStore";
import { useLanguage } from "@/context/LanguageContext";
import { toast } from "sonner";

function WishlistItemCard({ product }) {
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );
  const { t } = useLanguage();

  return (
    <ProductCard
      mode="wishlist"
      product={product}
      selectedColor={product.selectedColor}
      selectedSize={product.selectedSize}
      onRemove={() => {
        removeFromWishlist(
          product.id,
          product.selectedColor,
          product.selectedSize,
        );
        toast.success(t.removedFromWishlist);
      }}
    />
  );
}

export default WishlistItemCard;
