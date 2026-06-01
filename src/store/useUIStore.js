import { create } from "zustand";

const useUIStore = create((set) => ({
  isCartOpen: false,
  isWishlistOpen: false,
  isMobileMenuOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  toggleWishlist: () =>
    set((state) => ({
      isWishlistOpen: !state.isWishlistOpen,
    })),

  toggleMobileMenu: () =>
    set((state) => ({
      isMobileMenuOpen: !state.isMobileMenuOpen,
    })),

  closeAll: () =>
    set({
      isCartOpen: false,
      isWishlistOpen: false,
      isMobileMenuOpen: false,
    }),
}));

export default useUIStore;
