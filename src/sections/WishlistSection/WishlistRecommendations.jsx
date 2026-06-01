import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { products } from "@/data/products";
import { ProductCard, SectionHeader } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";

function WishlistRecommendations() {
  const { t, isArabic } = useLanguage();
  const recommended = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="
        mt-28 rounded-[34px]
        bg-gradient-to-b from-white to-[#fafafa]
        border border-gray-100
        px-5 sm:px-8 lg:px-10 py-10
        shadow-[0_10px_40px_rgba(0,0,0,0.03)]
      "
    >
      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <SectionHeader badge={t.justForYou} title={t.recommendedProducts} />
          <p className="mt-3 text-sm text-gray-500 max-w-[480px]">
            {t.recommendedDesc}
          </p>
        </div>

        <Link
          to="/"
          className="
            group h-14 px-10 rounded-md
            border border-gray-400 bg-white
            font-semibold text-gray-900 font-poppins
            flex items-center gap-2
            hover:bg-black hover:text-white hover:border-black
            hover:shadow-[0_10px_24px_rgba(0,0,0,0.12)]
            transition-all duration-300 w-fit
          "
        >
          {t.seeAll}
          <ArrowRight
            size={18}
            className={`transition-transform duration-300 ${
              isArabic
                ? "group-hover:-translate-x-1 rotate-180"
                : "group-hover:translate-x-1"
            }`}
          />
        </Link>
      </div>

      {/* ── PRODUCTS ── */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {recommended.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

export default WishlistRecommendations;
