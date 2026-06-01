import { create } from "zustand";

const useCouponStore = create((set, get) => ({
  coupon: null,

  applyCoupon: (code) => {
    const coupons = {
      SAVE10: 10,
      SAVE20: 20,
      BLACKFRIDAY: 30,
    };

    const discount = coupons[code];

    if (!discount) {
      set({ coupon: null });
      return false;
    }

    set({
      coupon: { code, discount },
    });

    return true;
  },

  clearCoupon: () => set({ coupon: null }),

  getDiscount: () => {
    const coupon = get().coupon;
    const subtotal = get().getSubtotal?.() || 0;

    if (!coupon) return 0;

    return subtotal * (coupon.discount / 100);
  },
}));

export default useCouponStore;
