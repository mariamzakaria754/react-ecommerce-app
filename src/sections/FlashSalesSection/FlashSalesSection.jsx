import { FlashHeader, FlashSlider } from "@/sections/FlashSalesSection";

import Container from "@/components/common/Container";

function FlashSalesSection() {
  return (
    <section
      className="
        pt-16
        sm:pt-20
        lg:pt-28
        xl:pt-36
        pb-20
        border-b
        border-gray-300
        overflow-hidden
      "
    >
      {/* HEADER */}
      <Container>
        <FlashSlider />
      </Container>
    </section>
  );
}

export default FlashSalesSection;
