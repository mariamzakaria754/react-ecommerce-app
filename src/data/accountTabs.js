import { FiUser, FiMapPin, FiShoppingBag, FiHeart } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

// Hook — use this in components instead of the raw array
export function useAccountSections() {
  const { t } = useLanguage();

  return [
    {
      title: t.manageAccount,
      items: [
        { id: "profile", label: t.profile, icon: FiUser },
        { id: "addresses", label: t.addressBook, icon: FiMapPin },
      ],
    },
    {
      title: t.orders,
      items: [{ id: "orders", label: t.orders, icon: FiShoppingBag }],
    },
    {
      title: t.wishlist,
      items: [{ id: "wishlist", label: t.wishlistMenu, icon: FiHeart }],
    },
  ];
}
