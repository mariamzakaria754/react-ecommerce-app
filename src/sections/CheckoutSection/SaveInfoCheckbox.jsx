import useCheckoutStore from "@/store/useCheckoutStore";
import { useLanguage } from "@/context/LanguageContext";

function SaveInfoCheckbox() {
  const { t } = useLanguage();
  const saveInfo = useCheckoutStore((s) => s.saveInfo);
  const toggleSaveInfo = useCheckoutStore((s) => s.toggleSaveInfo);

  return (
    <label className="flex items-start gap-3 cursor-pointer font-inter">
      <button
        type="button"
        onClick={toggleSaveInfo}
        className={`
          font-poppins
          w-5 h-5 rounded-md border
          flex items-center justify-center
          transition shrink-0 mt-0.5
          ${saveInfo ? "bg-[#DB4444] border-[#DB4444]" : "border-gray-300"}
        `}
      >
        {saveInfo && <span className="text-white text-xs">✓</span>}
      </button>

      <div>
        <p className="text-[14px] sm:text-[15px] font-medium">{t.saveInfo}</p>
        <p className="text-sm text-gray-500 mt-0.5">{t.saveInfoDesc}</p>
      </div>
    </label>
  );
}

export default SaveInfoCheckbox;
