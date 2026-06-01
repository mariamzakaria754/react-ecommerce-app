import { Link } from "react-router-dom";
import { toast } from "sonner";

import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

import CartItem from "./CartItem";

function CartTable() {
  const { t, isArabic } = useLanguage();

  const cart = useCartStore((state) => state.cart);

  const handleUpdateCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(t.cartUpdated);
  };

  return (
    <section className="space-y-10">
      {/* TABLE */}
      <div
        className="
          bg-white
          rounded-[4px]
          overflow-hidden
          border border-[#F0F0F0]
          shadow-[0_1px_13px_rgba(0,0,0,0.05)]
        "
      >
        {/* HEADER — desktop only */}
        <div
          className="
            hidden
            lg:grid lg:grid-cols-[2fr_1fr_1fr_1fr]
            px-10 py-6
            text-[16px] font-medium
            border-b border-[#F0F0F0]
          "
        >
          <span>{t.product}</span>
          <span>{t.cartPrice}</span>
          <span>{t.cartQuantity}</span>
          <span>{t.cartSubtotal}</span>
        </div>

        {/* ITEMS */}
        <div>
          {cart.map((item) => (
            <CartItem
              key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
              item={item}
            />
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div
        className="
          flex flex-col sm:flex-row
          items-center justify-between
          gap-5
        "
      >
        {/* RETURN TO SHOP */}
        <Link
          to="/"
          className="
            w-full sm:w-auto
            h-[56px] px-12
            border border-black/40
            rounded-[4px]
            flex items-center justify-center
            text-[16px] font-medium
            hover:bg-black hover:text-white
            transition-all duration-300
          "
        >
          {t.returnToShop}
        </Link>

        {/* UPDATE CART */}
        <button
          onClick={handleUpdateCart}
          className="
            w-full sm:w-auto
            h-[56px] px-12
            border border-black/40
            rounded-[4px]
            text-[16px] font-medium
            hover:bg-black hover:text-white
            transition-all duration-300
          "
        >
          {t.updateCart}
        </button>
      </div>
    </section>
  );
}

export default CartTable;
