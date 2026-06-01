import { ChevronDown, ChevronUp, X } from "lucide-react";
import { motion } from "framer-motion";

import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

function CartItem({ item }) {
  const { t, isArabic } = useLanguage();

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const price = item?.pricing?.current ?? item?.price ?? 0;
  const quantity = item?.quantity ?? 1;
  const total = price * quantity;

  const id = item.id;
  const selectedColor = item.selectedColor || "";
  const selectedSize = item.selectedSize || "";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="
        grid
        lg:grid-cols-[2fr_1fr_1fr_1fr]
        grid-cols-1
        items-center
        gap-6
        px-5 sm:px-8
        py-6
        bg-white
        border-b border-[#F0F0F0]
        hover:bg-[#FAFAFA]
        transition-all duration-300
      "
    >
      {/* ── PRODUCT ── */}
      <div className="flex items-center gap-4">
        <div className="relative">
          {/* REMOVE BUTTON — flips side in RTL */}
          <button
            onClick={() => removeFromCart(id, selectedColor, selectedSize)}
            className={`
              absolute -top-2
              ${isArabic ? "-right-2" : "-left-2"}
              w-5 h-5 rounded-full
              bg-[#DB4444]
              flex items-center justify-center
              text-white shadow-md
              hover:scale-110 transition
            `}
            aria-label={t.removeItem}
          >
            <X size={12} />
          </button>

          {/* IMAGE */}
          <div
            className="
              w-[72px] h-[72px]
              bg-[#F5F5F5]
              rounded-md
              flex items-center justify-center
              p-2
            "
          >
            <img
              src={item.thumbnail || item.image}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* TITLE + SOURCE BADGE */}
        <div className="flex flex-col">
          {item.source && (
            <span
              className={`
                inline-flex items-center w-fit
                px-2.5 py-1 mb-2
                rounded-full text-[11px] font-medium tracking-wide
                ${
                  item.source === "home"
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "bg-[#DB4444]/10 text-[#DB4444] border border-[#DB4444]/10"
                }
              `}
            >
              {item.source === "home" ? t.fromHome : t.fromProductDetails}
            </span>
          )}

          <h3
            className="
              text-[16px] font-medium text-black
              line-clamp-2 leading-6
              hover:text-[#DB4444] transition-colors
            "
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* ── PRICE ── */}
      <div className="flex items-center justify-between lg:block">
        <span className="lg:hidden text-gray-400 text-sm">{t.cartPrice}</span>
        <span className="text-[16px] font-medium">${price.toFixed(0)}</span>
      </div>

      {/* ── QUANTITY ── */}
      <div className="flex items-center justify-between lg:block">
        <span className="lg:hidden text-gray-400 text-sm">
          {t.cartQuantity}
        </span>

        <div
          className="
            flex items-center justify-between
            w-[90px] h-[44px]
            border border-black/30
            rounded-[4px]
            px-3 bg-white
          "
        >
          <span className="text-[15px] font-medium">
            {String(quantity).padStart(2, "0")}
          </span>

          <div className="flex flex-col items-center -space-y-1">
            <button
              onClick={() =>
                updateQuantity(id, quantity + 1, selectedColor, selectedSize)
              }
              className="text-black/70 hover:text-[#DB4444]"
              aria-label={t.increaseQty}
            >
              <ChevronUp size={14} />
            </button>

            <button
              onClick={() =>
                quantity > 1 &&
                updateQuantity(id, quantity - 1, selectedColor, selectedSize)
              }
              className="text-black/70 hover:text-[#DB4444]"
              aria-label={t.decreaseQty}
            >
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ── SUBTOTAL ── */}
      <div className="flex items-center justify-between lg:block">
        <span className="lg:hidden text-gray-400 text-sm">
          {t.cartSubtotal}
        </span>
        <span className="text-[16px] font-semibold">${total.toFixed(0)}</span>
      </div>
    </motion.div>
  );
}

export default CartItem;
