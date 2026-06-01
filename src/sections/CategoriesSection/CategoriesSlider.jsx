import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import CategoryCard from "./CategoryCard";
import { getCategories } from "@/services/categoriesApi";

function CategoriesSlider({ onSelectCategory, selectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      const res = await getCategories();
      if (mounted) setCategories(res?.data ?? []);
    };
    fetchCategories();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".categories-next",
        prevEl: ".categories-prev",
      }}
      observer
      observeParents
      speed={900}
      grabCursor
      className="mt-12"
      breakpoints={{
        320: { slidesPerView: 1.4, spaceBetween: 16 },
        480: { slidesPerView: 2, spaceBetween: 18 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 22 },
        1280: { slidesPerView: 5.5, spaceBetween: 24 },
      }}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={category.id} className="px-1 py-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <CategoryCard
              category={category}
              onClick={onSelectCategory}
              isActive={selectedCategory?.id === category.id}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoriesSlider;
