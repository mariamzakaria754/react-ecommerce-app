/* =========================================
   useUserStore.js
========================================= */

import { create } from "zustand";
import { persist } from "zustand/middleware";

/* =========================================
   INITIAL USER
========================================= */

const initialUser = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  avatar: null,
};

/* =========================================
   USER STORE
========================================= */

const useUserStore = create(
  persist(
    (set, get) => ({
      /* =========================================
         ACTIVE TAB
      ========================================= */

      activeTab: "profile",

      setActiveTab: (tab) =>
        set({
          activeTab: tab,
        }),

      /* =========================================
         USER
      ========================================= */

      user: initialUser,

      /* =========================================
         SET USER
      ========================================= */

      setUser: (data) =>
        set({
          user: {
            ...initialUser,
            ...data,
          },

          liveProfile: {
            firstName: data.firstName || "",
            lastName: data.lastName || "",
          },
        }),

      /* =========================================
         LIVE PROFILE
      ========================================= */

      liveProfile: {
        firstName: "",
        lastName: "",
      },

      /* =========================================
         SET LIVE PROFILE
      ========================================= */

      setLiveProfile: (data) =>
        set((state) => ({
          liveProfile: {
            ...state.liveProfile,
            ...data,
          },
        })),

      /* =========================================
         RESET LIVE PROFILE
      ========================================= */

      resetLiveProfile: () => {
        const currentUser = get().user;

        set({
          liveProfile: {
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
          },
        });
      },

      /* =========================================
         UPDATE USER
      ========================================= */

      updateUser: (data) =>
        set((state) => {
          const updatedUser = {
            ...state.user,
            ...data,
          };

          return {
            user: updatedUser,

            liveProfile: {
              firstName: updatedUser.firstName,
              lastName: updatedUser.lastName,
            },
          };
        }),

      /* =========================================
         UPDATE AVATAR
      ========================================= */

      updateAvatar: (avatar) =>
        set((state) => ({
          user: {
            ...state.user,
            avatar,
          },
        })),

      /* =========================================
         WISHLIST
      ========================================= */

      wishlist: [],

      toggleWishlist: (product) =>
        set((state) => {
          const exists = state.wishlist.some((item) => item.id === product.id);

          return {
            wishlist: exists
              ? state.wishlist.filter((item) => item.id !== product.id)
              : [...state.wishlist, product],
          };
        }),

      clearWishlist: () =>
        set({
          wishlist: [],
        }),

      /* =========================================
         ORDERS
      ========================================= */

      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),

      clearOrders: () =>
        set({
          orders: [],
        }),

      /* =========================================
         ADDRESSES
      ========================================= */

      addresses: [],

      addAddress: (address) =>
        set((state) => ({
          addresses: [...state.addresses, address],
        })),

      removeAddress: (id) =>
        set((state) => ({
          addresses: state.addresses.filter((item) => item.id !== id),
        })),

      clearAddresses: () =>
        set({
          addresses: [],
        }),

      /* =========================================
         RESET STORE
      ========================================= */

      resetStore: () =>
        set({
          activeTab: "profile",

          user: initialUser,

          liveProfile: {
            firstName: "",
            lastName: "",
          },

          wishlist: [],

          orders: [],

          addresses: [],
        }),
    }),

    {
      name: "exclusive-user-storage",
    },
  ),
);

export default useUserStore;
