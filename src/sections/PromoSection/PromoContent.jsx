import PromoTimer from "./PromoTimer";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useLanguage } from "@/context/LanguageContext";

function PromoContent({ data }) {
  const { isArabic } = useLanguage();

  const category =
    isArabic && data.categoryAr ? data.categoryAr : data.category;
  const title = isArabic && data.titleAr ? data.titleAr : data.title;
  const buttonText =
    isArabic && data.buttonTextAr ? data.buttonTextAr : data.buttonText;

  return (
    <div className="relative z-10 w-full lg:max-w-[450px] text-center lg:text-start rtl:lg:text-end">
      {/* CATEGORY */}
      <p className="text-[#00FF66] font-poppins font-semibold text-sm sm:text-base mb-4 sm:mb-6 lg:mb-8">
        {category}
      </p>

      {/* TITLE */}
      <h2
        className="
        text-white font-inter font-semibold
        text-3xl sm:text-4xl lg:text-[48px]
        leading-tight lg:leading-[60px]
        tracking-[0.02em] lg:tracking-[0.04em]
        mb-6 sm:mb-8 lg:mb-10
      "
      >
        {title}
      </h2>

      {/* TIMER */}
      <PromoTimer endDate={data.endDate} />

      {/* BUTTON */}
      <div className="mt-10 sm:mt-12 lg:mt-14 flex justify-center lg:justify-start rtl:lg:justify-end">
        <PrimaryButton
          className="
            !bg-[#00FF66]
            hover:!bg-[#00e65c]
            !text-white
            !font-semibold
            w-full sm:w-auto
            min-w-[160px]
            text-base sm:text-lg
            py-4 sm:py-5
            shadow-[0_10px_30px_rgba(0,255,102,0.25)]
          "
        >
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default PromoContent;
