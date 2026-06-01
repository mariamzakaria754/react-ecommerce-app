import storyImage from "@/assets/images/about-story.png";
import founderImage from "@/assets/images/founder.png";
import managerImage from "@/assets/images/manager.png";
import designerImage from "@/assets/images/designer.png";

/* STATISTICS ICONS */
import servicesIcon from "@/assets/images/Store.svg";
import saleIcon from "@/assets/images/DollarSign.svg";
import customersIcon from "@/assets/images/ShoppingBag.svg";
import revenueIcon from "@/assets/images/BadgeDollarSign.svg";

import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────
   ABOUT STORY  (image only — text comes from t keys)
───────────────────────────────────────── */
export const aboutStory = {
  image: storyImage,
};

/* ─────────────────────────────────────────
   STATISTICS  (translated hook)
   Usage:  const statistics = useStatistics();
───────────────────────────────────────── */
export function useStatistics() {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      icon: servicesIcon,
      title: t.statSellers,
      subtitle: t.statSellersDesc,
    },
    {
      id: 2,
      icon: saleIcon,
      title: t.statSales,
      subtitle: t.statSalesDesc,
      active: true,
    },
    {
      id: 3,
      icon: customersIcon,
      title: t.statProducts,
      subtitle: t.statProductsDesc,
    },
    {
      id: 4,
      icon: revenueIcon,
      title: t.statCustomers,
      subtitle: t.statCustomersDesc,
    },
  ];
}

/* ─────────────────────────────────────────
   TEAM MEMBERS  (proper nouns — not translated)
───────────────────────────────────────── */
export const teamMembers = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: founderImage,
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: managerImage,
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: designerImage,
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: founderImage,
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Marketing Manager",
    image: managerImage,
    social: { twitter: "#", instagram: "#", linkedin: "#" },
  },
];
