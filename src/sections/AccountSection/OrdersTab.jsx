// OrdersTab.jsx
import { useLanguage } from "@/context/LanguageContext";

export function OrdersTab() {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{t.orders}</h2>
      <p className="text-gray-500 mt-2">{t.noOrdersYet}</p>
    </div>
  );
}

export default OrdersTab;
