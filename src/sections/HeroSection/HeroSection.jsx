import { motion } from "framer-motion";
import CategoriesSidebar from "./CategoriesSidebar";
import HeroSlider from "./HeroSlider";
import { Container } from "@/components/common";

function HeroSection() {
  return (
    <section
      className="
        w-full
        pt-4 sm:pt-6 md:pt-2
        xl:pt-0
      "
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8 2xl:gap-12 items-start"
        >
          <CategoriesSidebar />

          <div className="flex-1 min-w-0 pt-6 xl:pt-10">
            <HeroSlider />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default HeroSection;
