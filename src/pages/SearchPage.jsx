import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/common";
import Container from "@/components/common/Container";
import { useLanguage } from "@/context/LanguageContext";

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
      <div className="h-[220px] bg-gray-100" />
      <div className="p-4">
        <div className="h-4 bg-gray-100 rounded mb-3" />
        <div className="h-4 w-2/3 bg-gray-100 rounded mb-4" />
        <div className="h-6 w-20 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const suggestions = ["Laptop", "iPhone", "Gaming", "Camera", "Fashion"];
const suggestionsAr = ["لابتوب", "آيفون", "جيمنج", "كاميرا", "موضة"];

function SearchPage() {
  const { t, isArabic } = useLanguage();
  const [searchParams] = useSearchParams();

  const cleanQuery = searchParams.get("q")?.trim() || "";
  const query = cleanQuery.toLowerCase();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredProducts = useMemo(() => {
    if (!query) return [];
    return products.filter((product) => {
      const title = product.title?.toLowerCase() || "";
      const category = product.category?.name?.toLowerCase() || "";
      const brand = product.brand?.name?.toLowerCase() || "";
      const tags = product.tags || [];
      return (
        title.includes(query) ||
        category.includes(query) ||
        brand.includes(query) ||
        tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [query]);

  const isIdle = !query;
  const isResults = filteredProducts.length > 0;
  const isEmpty = query && filteredProducts.length === 0;

  const suggestionList = isArabic ? suggestionsAr : suggestions;

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#FAFAFA] py-14 lg:py-20"
    >
      <Container>
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            relative overflow-hidden
            rounded-[28px]
            bg-gradient-to-r from-black via-[#111] to-black
            text-white
            p-6 sm:p-8 md:p-12
            mb-10 sm:mb-14
          "
        >
          <div className="relative z-10 font-inter">
            <span className="text-[#DB4444] text-xs sm:text-sm uppercase tracking-[3px] font-medium">
              {t.searchPageLabel}
            </span>

            <h1 className="mt-4 text-2xl sm:text-4xl md:text-6xl font-bold leading-tight">
              {query ? `${t.resultsFor} "${cleanQuery}"` : t.discoverProducts}
            </h1>

            <p className="mt-5 text-white/70 max-w-2xl text-sm sm:text-base font-poppins">
              {t.searchPageDesc}
            </p>

            {isResults && (
              <div className="mt-6 inline-flex items-center gap-3 bg-white/10 px-4 sm:px-5 py-2 sm:py-3 rounded-xl text-sm sm:text-base">
                <Sparkles size={18} />
                <span>
                  {filteredProducts.length} {t.productsFound}
                </span>
              </div>
            )}
          </div>

          <div className="absolute right-[-120px] top-[-120px] w-[350px] h-[350px] rounded-full bg-[#DB4444]/20 blur-3xl" />
        </motion.div>

        {/* IDLE */}
        {isIdle && (
          <div className="py-16 sm:py-24 text-center">
            <Sparkles size={50} className="mx-auto mb-6 text-[#DB4444]" />
            <h2 className="text-2xl sm:text-4xl font-bold text-black">
              {t.searchIdle}
            </h2>
            <p className="mt-4 text-gray-500 text-sm sm:text-base font-poppins">
              {t.searchIdleDesc}
            </p>
          </div>
        )}

        {/* EMPTY */}
        {isEmpty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 sm:py-24 text-center"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#DB4444]/10 flex items-center justify-center">
              <Search size={42} className="text-[#DB4444]" />
            </div>

            <h2 className="mt-8 text-2xl sm:text-4xl font-bold text-black font-inter">
              {t.noProductsFound}
            </h2>

            <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm sm:text-base font-poppins">
              {t.noProductsMatchQuery}
              <span className="font-semibold text-black"> "{cleanQuery}"</span>
            </p>

            <div className="mt-8 sm:mt-10 flex justify-center flex-wrap gap-3 font-inter">
              {suggestionList.map((s) => (
                <button
                  key={s}
                  className="
                    px-4 sm:px-5 py-2
                    rounded-full bg-white border text-sm
                    hover:border-[#DB4444] hover:text-[#DB4444]
                    transition
                  "
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* RESULTS */}
        {isResults && (
          <>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-black font-inter ">
                {t.productsLabel}
              </h2>
              <p className="text-gray-500 mt-1 text-sm sm:text-base font-poppins">
                {t.browseMatchingDesc}
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8"
            >
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <SkeletonCard key={i} />
                  ))
                : filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      transition={{ duration: 0.35 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
            </motion.div>
          </>
        )}
      </Container>
    </motion.section>
  );
}

export default SearchPage;
