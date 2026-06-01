import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/* =========================================
   HELPERS
========================================= */

const normalizeProduct = (product) => ({
  ...product,
  id: String(product.id),
  selectedColor: product.selectedColor || "",
  selectedSize: product.selectedSize || "",
  quantity: product.quantity || 1,
  addedAt: product.addedAt || Date.now(),
});

/* =========================================
   PRODUCT MATCHER (SINGLE SOURCE OF TRUTH)
========================================= */

const isSameProduct = (a, b) =>
  String(a.id) === String(b.id) &&
  (a.selectedColor || "") === (b.selectedColor || "") &&
  (a.selectedSize || "") === (b.selectedSize || "");

/* =========================================
   STORE
========================================= */

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      coupon: null,
      discount: 0,

      /* =========================
         ADD TO CART
      ========================= */

      addToCart: (product, quantity = 1, source = "default") => {
        if (!product?.id) return;

        const normalized = normalizeProduct(product);

        set((state) => {
          const exists = state.cart.find((item) =>
            isSameProduct(item, normalized),
          );

          let updatedCart;

          if (exists) {
            updatedCart = state.cart.map((item) =>
              isSameProduct(item, normalized)
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            );
          } else {
            updatedCart = [...state.cart, { ...normalized, quantity, source }];
          }

          return { cart: updatedCart };
        });
      },

      /* =========================
         REMOVE FROM CART (FIXED)
      ========================= */

      removeFromCart: (id, selectedColor = "", selectedSize = "") => {
        set((state) => ({
          cart: state.cart.filter(
            (item) =>
              !isSameProduct(item, {
                id,
                selectedColor,
                selectedSize,
              }),
          ),
        }));
      },

      /* =========================
         UPDATE QUANTITY (FIXED)
      ========================= */

      updateQuantity: (id, quantity, selectedColor = "", selectedSize = "") => {
        if (quantity < 1) return;

        set((state) => ({
          cart: state.cart.map((item) =>
            isSameProduct(item, {
              id,
              selectedColor,
              selectedSize,
            })
              ? { ...item, quantity }
              : item,
          ),
        }));
      },

      /* =========================
         CLEAR CART
      ========================= */

      clearCart: () =>
        set({
          cart: [],
          coupon: null,
          discount: 0,
        }),

      /* =========================
         COUPONS
      ========================= */

      applyCoupon: (code) => {
        const coupons = {
          SAVE10: 10,
          SALE20: 20,
          OFF30: 30,
        };

        const discount = coupons[code?.trim().toUpperCase()];

        if (!discount) return false;

        set({
          coupon: code.toUpperCase(),
          discount,
        });

        return true;
      },

      removeCoupon: () =>
        set({
          coupon: null,
          discount: 0,
        }),

      /* =========================
         TOTALS
      ========================= */

      getSubtotal: () =>
        get().cart.reduce((total, item) => {
          const price = item?.pricing?.current ?? item?.price ?? 0;
          return total + Number(price) * item.quantity;
        }, 0),

      getDiscountAmount: () => {
        const subtotal = get().getSubtotal();
        return (subtotal * get().discount) / 100;
      },

      getTotal: () => get().getSubtotal() - get().getDiscountAmount(),

      getCartCount: () => get().cart.reduce((t, i) => t + i.quantity, 0),

      /* =========================
         FIXED isInCart (SAME SYSTEM)
      ========================= */

      isInCart: (id, selectedColor = "", selectedSize = "") =>
        get().cart.some((item) =>
          isSameProduct(item, {
            id,
            selectedColor,
            selectedSize,
          }),
        ),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
