import SectionHeader from "@/components/common/SectionHeader";
import SliderNavigation from "@/components/common/SliderNavigation";
import { useLanguage } from "@/context/LanguageContext";

function CategoriesHeader() {
  const { t } = useLanguage();

  return (
    <SectionHeader
      badge={t.categoriesBadge}
      title={t.categoriesTitle}
      subtitle={t.categoriesSubtitle}
    >
      <SliderNavigation
        prevClass="categories-prev"
        nextClass="categories-next"
      />
    </SectionHeader>
  );
}

export default CategoriesHeader;
