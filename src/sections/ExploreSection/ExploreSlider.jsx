import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "@/components/common/ProductCard";
import { getExploreProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

function ExploreSlider({ showAll }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const response = await getExploreProducts();
        if (mounted) setProducts(response.data);
      } catch (error) {
        console.error("Failed To Fetch Explore Products:", error);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, []);

  /* LOADING */
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-14">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-[420px] rounded-[10px] bg-[#F5F5F5] animate-pulse"
          />
        ))}
      </div>
    );
  }

  /* EMPTY */
  if (!products.length) {
    return (
      <div className="py-24 text-center">
        <h2 className="font-inter font-semibold text-2xl text-black">
          {t.noProductsFound}
        </h2>
        <p className="mt-3 font-poppins text-black/60">{t.checkLater}</p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {showAll ? (
        /* GRID MODE */
        <motion.div
          key="grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-x-7
            gap-y-14
            mt-14
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* SLIDER MODE */
        <motion.div
          key="slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Swiper
            dir="ltr"
            modules={[Navigation]}
            navigation={{
              nextEl: ".explore-next",
              prevEl: ".explore-prev",
            }}
            speed={850}
            grabCursor
            observer
            observeParents
            className="mt-14 pb-5"
            breakpoints={{
              320: { slidesPerView: 1.15, spaceBetween: 16 },
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2.5, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id} className="pt-2 !overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="transition-all duration-300 hover:-translate-y-1"
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ExploreSlider;
