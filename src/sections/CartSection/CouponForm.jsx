import { useState } from "react";
import { toast } from "sonner";

import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

function CouponForm() {
  const { t } = useLanguage();
  const [coupon, setCoupon] = useState("");

  const applyCoupon = useCartStore((state) => state.applyCoupon);

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      toast.error(t.enterCoupon);
      return;
    }

    const success = applyCoupon(code);

    if (success) {
      toast.success(t.couponApplied);
      setCoupon("");
    } else {
      toast.error(t.invalidCoupon);
    }
  };

  return (
    <div
      className="
        flex flex-col sm:flex-row
        items-stretch sm:items-center
        gap-3 w-full
      "
    >
      {/* INPUT */}
      <input
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
        placeholder={t.couponPlaceholder}
        className="
          flex-1
          h-[48px] sm:h-[50px]
          min-w-0 px-4
          border border-black/20
          rounded-xl bg-white
          outline-none
          text-[14px] sm:text-[15px] font-medium
          placeholder:text-black/35
          focus:border-[#DB4444] focus:ring-4 focus:ring-[#DB4444]/10
          transition-all duration-300
        "
      />

      {/* BUTTON */}
      <button
        onClick={handleApplyCoupon}
        className="
          h-[48px] sm:h-[50px]
          px-6 sm:px-7
          rounded-xl
          bg-[#DB4444] text-white
          text-[14px] sm:text-[15px] font-medium
          whitespace-nowrap shadow-sm
          hover:bg-[#c73636] hover:shadow-md
          active:scale-[0.98]
          transition-all duration-300
        "
      >
        {t.applyCoupon}
      </button>
    </div>
  );
}

export default CouponForm;
