// AddressesTab.jsx
import { useLanguage } from "@/context/LanguageContext";

function AddressesTab() {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{t.addressBook}</h2>
      <p className="text-gray-500 mt-2">{t.manageAddresses}</p>
    </div>
  );
}

export default AddressesTab;
