// WishlistTab.jsx
import { useLanguage } from "@/context/LanguageContext";

function WishlistTab() {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{t.wishlist}</h2>
      <p className="text-gray-500 mt-2">{t.wishlistEmptyDesc}</p>
    </div>
  );
}

export default WishlistTab;
