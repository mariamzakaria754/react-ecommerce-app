import { HeroSection } from "@/sections/HeroSection";

import { FlashSalesSection } from "@/sections/FlashSalesSection";

import Container from "@/components/common/Container";
import { CategoriesSection } from "@/sections/CategoriesSection";
import { BestSellingSection } from "@/sections/BestSellingSection";
import { PromoSection } from "@/sections/PromoSection";
import { ExploreSection } from "@/sections/ExploreSection";
import { NewArrivalSection } from "@/sections/NewArrivalSection";
import ServicesSection from "@/sections/ServicesSection/ServicesSection";
import { ScrollTopButton } from "@/components/common";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen flex flex-col w-full  bg-white">
      <Container>
        <HeroSection search={search} setSearch={setSearch} />

        <FlashSalesSection search={search} />
        <CategoriesSection />
        <BestSellingSection search={search} />
        <PromoSection />
        <ExploreSection search={search} />
        <NewArrivalSection />
        <ServicesSection />
        <ScrollTopButton />
      </Container>
    </div>
  );
}
export default HomePage;
