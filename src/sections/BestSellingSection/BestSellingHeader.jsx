import SectionHeader from "@/components/common/SectionHeader";
import PrimaryButton from "@/components/common/PrimaryButton";
import { useLanguage } from "@/context/LanguageContext";

function BestSellingHeader({ showAll, setShowAll }) {
  const { t } = useLanguage();

  return (
    <SectionHeader badge={t.thisMonth} title={t.bestSelling}>
      <PrimaryButton
        onClick={() => setShowAll(!showAll)}
        className="px-8 shadow-md hover:scale-105 transition-all duration-300"
      >
        {showAll ? t.showLess : t.viewAllProducts}
      </PrimaryButton>
    </SectionHeader>
  );
}

export default BestSellingHeader;
