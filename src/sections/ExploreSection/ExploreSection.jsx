import { useState } from "react";
import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import ExploreSlider from "./ExploreSlider";
import ExploreHeader from "./ExploreHeader";
import { useLanguage } from "@/context/LanguageContext";

function ExploreSection() {
  const [showAll, setShowAll] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-28 border-b border-gray-200">
      <Container>
        <ExploreHeader showAll={showAll} />
      </Container>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <Container>
          <ExploreSlider showAll={showAll} />
        </Container>
      </div>

      <div className="flex justify-center mt-10 sm:mt-12 lg:mt-16">
        <PrimaryButton
          size="lg"
          onClick={() => setShowAll(!showAll)}
          className="w-full sm:w-auto min-w-[200px] sm:min-w-[240px]"
        >
          {showAll ? t.showLess : t.viewAllProducts}
        </PrimaryButton>
      </div>
    </section>
  );
}

export default ExploreSection;
