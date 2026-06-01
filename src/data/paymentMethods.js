import visa from "@/assets/images/visa.png";
import mastercard from "@/assets/images/mastercard.png";
import bkash from "@/assets/images/bkash.png";
import nagad from "@/assets/images/nagad.png";

export const paymentMethods = [
  {
    id: "bank",
    titleKey: "bankTitle",
    descKey: "bankDesc",
    icons: [
      { src: bkash, alt: "Bkash" },
      { src: visa, alt: "Visa" },
      { src: mastercard, alt: "MasterCard" },
      { src: nagad, alt: "Nagad" },
    ],
  },
  {
    id: "cash",
    titleKey: "cashTitle",
    descKey: "cashDesc",
    icons: [],
  },
];
