import { useState } from "react";
import Container from "@/components/common/Container";
import BestSellingGrid from "./BestSellingGrid";
import BestSellingHeader from "./BestSellingHeader";

function BestSellingSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      className="
        py-16
        sm:py-20
        lg:py-28
        overflow-hidden
      "
    >
      <Container>
        <BestSellingHeader showAll={showAll} setShowAll={setShowAll} />
        <BestSellingGrid showAll={showAll} />
      </Container>
    </section>
  );
}

export default BestSellingSection;
