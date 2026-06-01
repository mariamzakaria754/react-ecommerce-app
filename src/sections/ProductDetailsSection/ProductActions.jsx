import { useState, useEffect, useMemo } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { toast } from "sonner";
import useCartStore from "@/store/useCartStore";
import useWishlistStore from "@/store/useWishlistStore";
import { useLanguage } from "@/context/LanguageContext";

function ProductActions({ product, selectedColor, selectedSize }) {
  const [quantity, setQuantity] = useState(1);
  const { t, isArabic } = useLanguage();

  useEffect(() => {
    setQuantity(1);
  }, [product?.id, selectedColor, selectedSize]);

  const addToCart = useCartStore((s) => s.addToCart);
  const isInCartStore = useCartStore((s) => s.isInCart);
  const addToWishlist = useWishlistStore((s) => s.addToWishlist);
  const isInWishlistStore = useWishlistStore((s) => s.isInWishlist);

  const inStock =
    product?.stock?.inStock ?? (product?.stock?.quantity ?? 0) > 0;
  const stockQuantity = product?.stock?.quantity ?? 10;
  const productPrice = product?.pricing?.current ?? 0;
  const productId = String(product?.id);

  const isInWishlist = isInWishlistStore(
    productId,
    selectedColor,
    selectedSize,
  );
  const isInCart = isInCartStore(productId, selectedColor, selectedSize);

  const preparedProduct = useMemo(
    () => ({ ...product, selectedColor, selectedSize }),
    [product, selectedColor, selectedSize],
  );

  const decreaseQuantity = () => setQuantity((p) => Math.max(1, p - 1));
  const increaseQuantity = () =>
    setQuantity((p) => Math.min(p + 1, stockQuantity));

  const handleAddToCart = () => {
    if (!product || !inStock) return;
    if (product?.colors?.length && !selectedColor) {
      toast.error(t.pleaseSelectColor);
      return;
    }
    if (product?.sizes?.length && !selectedSize) {
      toast.error(t.pleaseSelectSize);
      return;
    }
    addToCart(preparedProduct, quantity);

    // عنوان المنتج في الـ toast بالعربي لو اللغة عربي
    const productTitle = isArabic
      ? product.title_ar || product.title
      : product.title;
    toast.success(t.addedToCart, {
      description: `${quantity} × ${productTitle}`,
    });
  };

  const handleWishlist = () => {
    if (!product) return;
    if (isInWishlist) {
      toast.info(t.alreadyInWishlist);
      return;
    }
    addToWishlist(preparedProduct);
    toast.success(t.addedToWishlist);
  };

  const totalPrice = useMemo(
    () => (Number(productPrice) * quantity).toFixed(2),
    [productPrice, quantity],
  );

  // اسم اللون المختار بالعربي
  const selectedColorName = useMemo(() => {
    if (!selectedColor || !product?.colors) return selectedColor;
    const colorObj = product.colors.find((c) => c.value === selectedColor);
    return isArabic
      ? colorObj?.name_ar || colorObj?.name || selectedColor
      : colorObj?.name || selectedColor;
  }, [selectedColor, product?.colors, isArabic]);

  return (
    <div className="space-y-5 sm:space-y-6">
      {/* ── STOCK ── */}
      <div>
        {inStock ? (
          <span className="font-medium text-green-600 text-sm sm:text-base">
            {t.inStock} ({stockQuantity})
          </span>
        ) : (
          <span className="font-medium text-red-500 text-sm sm:text-base">
            {t.outOfStock}
          </span>
        )}
      </div>

      {/* ── ACTIONS ── */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* QUANTITY */}
        <div className="flex items-center overflow-hidden rounded-xl border border-gray-200 bg-white">
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={!inStock}
            className="h-[46px] sm:h-[50px] w-[46px] sm:w-[50px] text-xl transition hover:bg-[#DB4444] hover:text-white disabled:opacity-40"
          >
            −
          </button>
          <div className="flex h-[46px] sm:h-[50px] w-[60px] sm:w-[70px] items-center justify-center border-x font-semibold text-sm sm:text-base">
            {quantity}
          </div>
          <button
            type="button"
            onClick={increaseQuantity}
            disabled={!inStock}
            className="h-[46px] sm:h-[50px] w-[46px] sm:w-[50px] bg-[#DB4444] text-xl text-white transition hover:opacity-90 disabled:opacity-40"
          >
            +
          </button>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          disabled={!inStock}
          onClick={handleAddToCart}
          className="
            flex h-[46px] sm:h-[50px] items-center gap-2
            rounded-xl bg-[#DB4444]
            px-6 sm:px-8
            text-sm sm:text-base font-medium text-white
            transition-all duration-300
            hover:scale-[1.02] active:scale-[0.98]
            disabled:cursor-not-allowed disabled:opacity-50
          "
        >
          <FiShoppingCart size={18} />
          {isInCart ? t.addMore : t.addToCart}
        </button>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={handleWishlist}
          className={`
            flex h-[46px] sm:h-[50px] w-[46px] sm:w-[50px]
            items-center justify-center rounded-xl border
            transition-all duration-300
            ${
              isInWishlist
                ? "border-[#DB4444] bg-[#DB4444] text-white"
                : "hover:border-[#DB4444] hover:text-[#DB4444]"
            }
          `}
        >
          <FiHeart size={20} />
        </button>
      </div>

      {/* ── SELECTED OPTIONS ── */}
      {(selectedColor || selectedSize) && (
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          {selectedColor && (
            <span>
              {t.color}:{" "}
              <strong className="ml-1 text-black">{selectedColorName}</strong>
            </span>
          )}
          {selectedSize && (
            <span>
              {t.size}:{" "}
              <strong className="ml-1 text-black">{selectedSize}</strong>
            </span>
          )}
        </div>
      )}

      {/* ── TOTAL ── */}
      <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 sm:p-4">
        <span className="text-gray-500 text-sm sm:text-base">
          {t.totalPrice}
        </span>
        <span className="text-lg sm:text-xl font-bold text-black">
          ${totalPrice}
        </span>
      </div>
    </div>
  );
}

export default ProductActions;
