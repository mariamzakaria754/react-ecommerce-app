import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";
import SectionHeader from "@/components/common/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

function RelatedProducts({ products = [] }) {
  const { t } = useLanguage();
  const INITIAL_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const visibleProducts = useMemo(
    () => products.slice(0, visibleCount),
    [products, visibleCount],
  );
  const hasMore = visibleCount < products.length;
  const canShowLess = visibleCount > INITIAL_COUNT;

  return (
    <section className="space-y-6">
      <SectionHeader title={t.relatedItems} highlightColor="#DB4444" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProductCard product={product} source="related" />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-4 pt-6">
        {hasMore && (
          <button
            onClick={() => setVisibleCount((p) => p + 4)}
            className="px-5 sm:px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-black hover:text-white transition"
          >
            {t.loadMore}
          </button>
        )}
        {canShowLess && (
          <button
            onClick={() => setVisibleCount(INITIAL_COUNT)}
            className="px-5 sm:px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition"
          >
            {t.showLess}
          </button>
        )}
      </div>
    </section>
  );
}

export default RelatedProducts;
