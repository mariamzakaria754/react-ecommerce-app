import { useNavigate } from "react-router-dom";

import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

function CartSummary() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const subtotal = useCartStore((state) => state.getSubtotal());
  const discount = useCartStore((state) => state.discount);
  const coupon = useCartStore((state) => state.coupon);
  const discountAmount = useCartStore((state) => state.getDiscountAmount());
  const total = useCartStore((state) => state.getTotal());

  return (
    <div
      className="
        w-full
        border border-black/10
        rounded-2xl
        bg-white
        p-5 sm:p-7 lg:p-8
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        sticky top-24
      "
    >
      {/* HEADER */}
      <div className="pb-6 border-b border-black/10">
        <h2
          className="
            font-poppins
            text-[22px] sm:text-[26px]
            font-semibold tracking-[-0.02em]
            text-black
          "
        >
          {t.cartTotal}
        </h2>

        <p className="mt-2 text-sm leading-6 text-black/50">
          {t.cartTotalDesc}
        </p>
      </div>

      {/* ROWS */}
      <div className="mt-7 space-y-5">
        {/* SUBTOTAL */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-[15px] sm:text-[16px] font-medium text-black/70">
            {t.cartSubtotal}
          </span>
          <span className="text-[15px] sm:text-[16px] font-semibold text-black">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="border-b border-dashed border-black/10" />

        {/* SHIPPING */}
        <div className="flex items-center justify-between gap-4">
          <span className="text-[15px] sm:text-[16px] font-medium text-black/70">
            {t.shipping}
          </span>
          <span className="text-[15px] font-semibold text-green-600">
            {t.freeDelivery}
          </span>
        </div>

        <div className="border-b border-dashed border-black/10" />

        {/* DISCOUNT — shown only when active */}
        {discount > 0 && (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[15px] sm:text-[16px] font-medium text-black/70">
                  {t.discount}
                </span>

                <div className="mt-2 inline-flex items-center rounded-full bg-[#DB4444]/10 px-3 py-1">
                  <span className="text-xs font-medium text-[#DB4444]">
                    {coupon}
                  </span>
                </div>
              </div>

              <span className="text-[15px] sm:text-[16px] font-semibold text-[#DB4444]">
                - ${discountAmount.toFixed(2)}
              </span>
            </div>

            <div className="border-b border-dashed border-black/10" />
          </>
        )}

        {/* TOTAL */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[18px] sm:text-[20px] font-semibold text-black">
              {t.cartTotalLabel}
            </span>
            <p className="mt-1 text-xs sm:text-sm text-black/40">{t.taxNote}</p>
          </div>

          <span
            className="
              text-[24px] sm:text-[28px]
              font-bold tracking-[-0.03em]
              text-black
            "
          >
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* CHECKOUT BUTTON */}
      <button
        onClick={() => navigate("/checkout")}
        className="
          mt-8 w-full
          h-[56px] sm:h-[58px]
          rounded-xl
          bg-[#DB4444] text-white
          text-[15px] sm:text-[16px] font-medium
          hover:bg-[#c73636]
          active:scale-[0.98]
          shadow-lg shadow-[#DB4444]/20
          transition-all duration-300
        "
      >
        {t.proceedToCheckout}
      </button>

      {/* SECURITY NOTE */}
      <div className="mt-4 flex items-center justify-center text-center text-xs sm:text-sm text-black/40">
        {t.secureCheckout}
      </div>
    </div>
  );
}

export default CartSummary;
