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

  addedAt: product.addedAt || Date.now(),
});

/* =========================================
   PRODUCT MATCHER
========================================= */

const isSameProduct = (a, b) => {
  return (
    String(a.id) === String(b.id) &&
    (a.selectedColor || "") === (b.selectedColor || "") &&
    (a.selectedSize || "") === (b.selectedSize || "")
  );
};

/* =========================================
   STORE
========================================= */

const useWishlistStore = create(
  persist(
    (set, get) => ({
      /* =========================
         STATE
      ========================= */

      wishlist: [],

      /* =========================
         HELPERS
      ========================= */

      isInWishlist: (productId, selectedColor = "", selectedSize = "") => {
        return get().wishlist.some(
          (item) =>
            String(item.id) === String(productId) &&
            (item.selectedColor || "") === selectedColor &&
            (item.selectedSize || "") === selectedSize,
        );
      },

      wishlistCount: () => {
        return get().wishlist.length;
      },

      /* =========================
         ADD
      ========================= */

      addToWishlist: (product) => {
        if (!product?.id) return;

        const normalized = normalizeProduct(product);

        set((state) => {
          const exists = state.wishlist.some((item) =>
            isSameProduct(item, normalized),
          );

          if (exists) return state;

          return {
            wishlist: [...state.wishlist, normalized],
          };
        });
      },

      /* =========================
         REMOVE
      ========================= */

      removeFromWishlist: (
        productId,
        selectedColor = "",
        selectedSize = "",
      ) => {
        set((state) => ({
          wishlist: state.wishlist.filter(
            (item) =>
              !(
                String(item.id) === String(productId) &&
                (item.selectedColor || "") === selectedColor &&
                (item.selectedSize || "") === selectedSize
              ),
          ),
        }));
      },

      /* =========================
         TOGGLE
      ========================= */

      toggleWishlist: (product) => {
        if (!product?.id) return;

        const exists = get().isInWishlist(
          product.id,
          product.selectedColor,
          product.selectedSize,
        );

        if (exists) {
          get().removeFromWishlist(
            product.id,
            product.selectedColor,
            product.selectedSize,
          );
        } else {
          get().addToWishlist(product);
        }
      },

      /* =========================
         CLEAR
      ========================= */

      clearWishlist: () => {
        set({
          wishlist: [],
        });
      },
    }),

    {
      name: "wishlist-storage",

      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useWishlistStore;
