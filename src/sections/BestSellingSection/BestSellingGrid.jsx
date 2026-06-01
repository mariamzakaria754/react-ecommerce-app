import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/common/ProductCard";
import { getBestSellingProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

function BestSellingGrid({ showAll }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    let mounted = true;
    const fetchProducts = async () => {
      try {
        const response = await getBestSellingProducts();
        if (mounted) setProducts(response.data);
      } catch (error) {
        console.error("Failed To Fetch Best Selling Products:", error);
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
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-7
          mt-14
        "
      >
        {Array.from({ length: 4 }).map((_, index) => (
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

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={showAll ? "all-products" : "limited-products"}
        initial={{ opacity: 0, y: 10 }}
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
        {visibleProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="transition-all duration-300"
          >
            <ProductCard product={product} showDiscount={false} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default BestSellingGrid;
