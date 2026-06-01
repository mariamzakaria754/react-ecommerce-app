import { useMemo, useState } from "react";
import {
  CategoriesHeader,
  CategoriesSlider,
} from "@/sections/CategoriesSection";
import Container from "@/components/common/Container";
import { products } from "@/data/products";

function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((p) => p.categoryId === selectedCategory.id);
  }, [selectedCategory]);

  return (
    <section
      className="
        relative
        py-16
        sm:py-20
        lg:py-28
        border-b
        border-gray-200
        overflow-hidden
        bg-white
      "
    >
      {/* BG GLOW */}
      <div
        className="
        absolute top-0
        left-1/2 -translate-x-1/2
        w-[400px] h-[400px]
        sm:w-[550px] sm:h-[550px]
        lg:w-[700px] lg:h-[700px]
        bg-[#DB4444]/[0.03]
        blur-3xl
        rounded-full
        pointer-events-none
      "
      />

      {/* HEADER */}
      <Container>
        <CategoriesHeader />
      </Container>

      {/* SLIDER */}
      <div className="relative z-10 w-full overflow-hidden mt-2">
        <CategoriesSlider
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 && (
        <Container>
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              gap-4
              mt-10
            "
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="
                  border
                  border-gray-100
                  p-3
                  rounded-xl
                  text-sm
                  font-medium
                  text-gray-700
                  hover:border-[#DB4444]
                  hover:text-[#DB4444]
                  transition-all
                  duration-300
                "
              >
                {p.title}
              </div>
            ))}
          </div>
        </Container>
      )}
    </section>
  );
}

export default CategoriesSection;
