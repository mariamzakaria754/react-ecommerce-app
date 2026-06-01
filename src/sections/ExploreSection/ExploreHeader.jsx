import { SectionHeader, SliderNavigation } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";

function ExploreHeader({ showAll }) {
  const { t } = useLanguage();

  return (
    <SectionHeader badge={t.ourProducts} title={t.exploreProducts}>
      {!showAll && (
        <SliderNavigation
          prevClass="explore-prev"
          nextClass="explore-next"
          className="ml-auto rtl:ml-0 rtl:mr-auto mt-4 sm:mt-0"
        />
      )}
    </SectionHeader>
  );
}

export default ExploreHeader;
