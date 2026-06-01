import Container from "@/components/common/Container";

import StorySection from "@/sections/AboutSection/StorySection";
import StatsSection from "@/sections/AboutSection/StatsSection";
import TeamSection from "@/sections/AboutSection/TeamSection";

import { Breadcrumb } from "@/components/common";
import ServicesSection from "@/sections/ServicesSection/ServicesSection";
import { useLanguage } from "@/context/LanguageContext";

function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      <Container>
        <Breadcrumb
          links={[{ label: t.home, href: "/" }, { label: t.about }]}
        />
      </Container>

      <StorySection />

      <Container>
        <StatsSection />
        <TeamSection />
        <ServicesSection />
      </Container>
    </main>
  );
}

export default AboutPage;
