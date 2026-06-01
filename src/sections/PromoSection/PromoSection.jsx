import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import PromoContent from "./PromoContent";
import { getPromoData } from "@/data/promo";

function PromoSection() {
  const [promoData, setPromoData] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await getPromoData();
      setPromoData(data);
    };
    load();
  }, []);

  if (!promoData) return null;

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <Container>
        <div
          className="
            relative overflow-hidden
            bg-gradient-to-br from-black to-[#0a0a0a]
            rounded-2xl lg:rounded-3xl
            min-h-[420px] sm:min-h-[500px] lg:min-h-[560px]
            px-6 sm:px-10 lg:px-16
            py-10 sm:py-14 lg:py-20
            flex flex-col lg:flex-row
            items-center justify-between
            gap-10 lg:gap-16
            rtl:lg:flex-row-reverse
          "
        >
          {/* GLOW */}
          <div
            className="
            absolute
            right-[-120px] rtl:right-auto rtl:left-[-120px]
            top-1/2 -translate-y-1/2
            w-[320px] sm:w-[450px] lg:w-[600px]
            h-[320px] sm:h-[450px] lg:h-[600px]
            rounded-full bg-green-500/10 blur-3xl
          "
          />

          {/* CONTENT */}
          <div className="relative z-10 w-full lg:max-w-[500px]">
            <PromoContent data={promoData} />
          </div>

          {/* IMAGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 flex justify-center lg:justify-end rtl:lg:justify-start w-full"
          >
            <img
              src={promoData.image}
              alt={promoData.title}
              className="
                w-[240px] sm:w-[340px] md:w-[420px] lg:w-[580px]
                object-contain
              "
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default PromoSection;
