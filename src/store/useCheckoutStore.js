/* =========================================
   useCheckoutStore.js
========================================= */

import { create } from "zustand";

const initialBillingDetails = {
  firstName: "",
  companyName: "",
  streetAddress: "",
  apartment: "",
  city: "",
  phone: "",
  email: "",
};

const useCheckoutStore = create((set) => ({
  /* =========================
     BILLING DETAILS
  ========================= */
  billingDetails: initialBillingDetails,

  /* =========================
     PAYMENT
  ========================= */
  paymentMethod: "cash",

  /* =========================
     COUPON
  ========================= */
  couponCode: "",
  discount: 0,

  /* =========================
     SAVE INFO
  ========================= */
  saveInfo: true,

  /* =========================
     LOADING
  ========================= */
  placingOrder: false,

  /* =========================
     ACTIONS
  ========================= */

  /* UPDATE SINGLE FIELD */
  setBillingField: (field, value) =>
    set((state) => ({
      billingDetails: {
        ...state.billingDetails,
        [field]: value,
      },
    })),

  /* PAYMENT */
  setPaymentMethod: (method) =>
    set({
      paymentMethod: method,
    }),

  /* COUPON */
  setCouponCode: (code) =>
    set({
      couponCode: code,
    }),

  setDiscount: (value) =>
    set({
      discount: value,
    }),

  /* SAVE INFO */
  toggleSaveInfo: () =>
    set((state) => ({
      saveInfo: !state.saveInfo,
    })),

  /* LOADING */
  setPlacingOrder: (value) =>
    set({
      placingOrder: value,
    }),

  /* RESET */
  resetCheckout: () =>
    set({
      billingDetails: initialBillingDetails,

      paymentMethod: "cash",

      couponCode: "",

      discount: 0,

      saveInfo: true,

      placingOrder: false,
    }),
}));

export default useCheckoutStore;
