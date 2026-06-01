import { useState } from "react";
import { toast } from "sonner";
import useCheckoutStore from "@/store/useCheckoutStore";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useLanguage } from "@/context/LanguageContext";

function CouponForm() {
  const { t } = useLanguage();
  const [coupon, setCoupon] = useState("");
  const setDiscount = useCheckoutStore((s) => s.setDiscount);

  function applyCoupon() {
    if (coupon.trim().toLowerCase() === "exclusive") {
      setDiscount(20);
      toast.success(t.couponApplied);
    } else {
      setDiscount(0);
      toast.error(t.invalidCoupon);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        applyCoupon();
      }}
      className="space-y-4"
    >
      <h3 className="text-lg sm:text-xl font-semibold">{t.couponCode}</h3>

      <div className="flex gap-3 sm:gap-4">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder={t.enterCoupon}
          className="
            flex-1 h-12 sm:h-14
            px-4 sm:px-5
            rounded-2xl border border-gray-200
            outline-none text-sm sm:text-base
            focus:border-[#DB4444]
            transition-all duration-300
          "
        />
        <PrimaryButton
          type="submit"
          className="!h-12 sm:!h-14 !px-6 sm:!px-10 whitespace-nowrap text-sm sm:text-base"
        >
          {t.applyCoupon}
        </PrimaryButton>
      </div>
    </form>
  );
}

export default CouponForm;
