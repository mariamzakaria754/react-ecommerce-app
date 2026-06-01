import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import { getFlashProducts } from "@/data/products";
import PrimaryButton from "@/components/common/PrimaryButton";
import { ProductCard } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";

function FlashSlider({ searchTerm = "" }) {
  const { t } = useLanguage();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let mounted = true;
    const fetch = async () => {
      try {
        const res = await getFlashProducts();
        if (mounted) setProducts(res?.data || []);
      } catch (e) {
        console.error("Failed To Fetch Products:", e);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetch();
    return () => {
      mounted = false;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products;
    return products.filter(
      (p) =>
        p.title?.toLowerCase().includes(term) ||
        p.shortTitle?.toLowerCase().includes(term) ||
        p.category?.name?.toLowerCase().includes(term) ||
        p.brand?.name?.toLowerCase().includes(term) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(term)),
    );
  }, [products, searchTerm]);

  /* ── LOADING ── */
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[420px] rounded-[10px] bg-[#F5F5F5] animate-pulse"
          />
        ))}
      </div>
    );
  }

  /* ── EMPTY ── */
  if (!filteredProducts.length) {
    return (
      <div className="py-24 text-center">
        <h2 className="font-semibold text-2xl text-black">
          {t.noProductsFound}
        </h2>
        <p className="mt-3 text-black/60">
          {t.noProductsMatch} "{searchTerm}"
        </p>
      </div>
    );
  }

  const breakpoints = {
    320: { slidesPerView: 1.15, spaceBetween: 16 },
    480: { slidesPerView: 1.5, spaceBetween: 16 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2.5, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 24 },
    1280: { slidesPerView: 4, spaceBetween: 28 },
  };

  return (
    <section className="relative">
      <AnimatePresence mode="wait">
        {!showAll ? (
          <motion.div
            key="slider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Swiper
              modules={[Navigation]}
              navigation
              speed={800}
              grabCursor
              className="mt-10 pb-5"
              breakpoints={breakpoints}
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className="pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="hover:-translate-y-1 transition-all duration-300"
                  >
                    <ProductCard product={product} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-10"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="hover:-translate-y-1 transition-all duration-300"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {filteredProducts.length > 4 && (
        <div className="flex justify-center mt-16">
          <PrimaryButton
            onClick={() => setShowAll((p) => !p)}
            size="lg"
            className="min-w-[240px]"
          >
            {showAll ? t.showLess : t.viewAllProducts}
          </PrimaryButton>
        </div>
      )}
    </section>
  );
}

export default FlashSlider;
