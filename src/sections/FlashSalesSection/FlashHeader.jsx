import { CountdownTimer } from "@/sections/FlashSalesSection";
import SectionHeader from "@/components/common/SectionHeader";
import SliderNavigation from "@/components/common/SliderNavigation";
import { useLanguage } from "@/context/LanguageContext";

function FlashHeader() {
  const { t } = useLanguage();

  return (
    <SectionHeader
      badge={t.todayBadge}
      title={
        <div className="flex flex-wrap items-end gap-8 md:gap-16">
          <h2
            className="
              font-inter font-bold
              text-[26px] sm:text-[30px] lg:text-[34px]
              tracking-wide text-black
              whitespace-nowrap
            "
          >
            {t.flashSales}
          </h2>
          <CountdownTimer />
        </div>
      }
    >
      <SliderNavigation prevClass="flash-prev" nextClass="flash-next" />
    </SectionHeader>
  );
}

export default FlashHeader;
