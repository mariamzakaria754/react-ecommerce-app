import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function SliderNavigation({ prevClass, nextClass, className = "" }) {
  const { isArabic } = useLanguage();

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <button
        className={`
          ${prevClass}
          w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12
          rounded-full bg-[#F5F5F5]
          flex items-center justify-center
          hover:bg-black hover:text-white
          transition-all duration-300
        `}
      >
        {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
      </button>

      <button
        className={`
          ${nextClass}
          w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12
          rounded-full bg-[#F5F5F5]
          flex items-center justify-center
          hover:bg-black hover:text-white
          transition-all duration-300
        `}
      >
        {isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
      </button>
    </div>
  );
}

export default SliderNavigation;
