import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import ArrivalGrid from "./ArrivalGrid";
import { useLanguage } from "@/context/LanguageContext";

function NewArrivalSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeader badge={t.featuredBadge} title={t.newArrival} />
        <ArrivalGrid />
      </Container>
    </section>
  );
}

export default NewArrivalSection;
