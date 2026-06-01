/* =========================================
useAuthStore.js
========================================= */

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      /* STATE */

      user: null,

      isAuthenticated: false,

      isAuthLoading: true,

      /*
      guest
      active
      completed
      */

      accountStatus: "guest",

      /* =========================
         SET USER (firebase listener)
      ========================= */

      setUser: (user) =>
        set({
          user,

          isAuthenticated: !!user,

          isAuthLoading: false,

          accountStatus: user ? "active" : "guest",
        }),

      /* =========================
         LOGIN
      ========================= */

      login: (user) =>
        set({
          user,

          isAuthenticated: true,

          isAuthLoading: false,

          accountStatus: "active",
        }),

      /* =========================
         LOGOUT
      ========================= */

      logout: () =>
        set({
          user: null,

          isAuthenticated: false,

          isAuthLoading: false,

          accountStatus: "guest",
        }),

      /* =========================
         COMPLETE ACCOUNT
      ========================= */

      completeAccount: () =>
        set({
          accountStatus: "completed",
        }),
    }),

    {
      name: "exclusive-auth-storage",
    },
  ),
);

export default useAuthStore;
