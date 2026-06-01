import useWishlistStore from "@/store/useWishlistStore";
import WishlistItemCard from "./WishlistItemCard";
import EmptyState from "@/components/common/EmptyState";

function WishlistGrid() {
  const wishlist = useWishlistStore((s) => s.wishlist);

  if (!wishlist.length) {
    return <EmptyState type="wishlist" />;
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
      "
    >
      {wishlist.map((product) => (
        <WishlistItemCard
          key={`${product.id}-${product.selectedColor}-${product.selectedSize}`}
          product={product}
        />
      ))}
    </div>
  );
}

export default WishlistGrid;
