import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/sections/ProductDetailsSection/ProductGallery";
import ProductInfo from "@/sections/ProductDetailsSection/ProductInfo";
import RelatedProducts from "@/sections/ProductDetailsSection/RelatedProducts";
import {
  getProductBySlug,
  getRelatedProducts,
} from "@/services/productService";
import { useLanguage } from "@/context/LanguageContext";

function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 sm:gap-12 lg:gap-16 animate-pulse">
      <div className="space-y-4">
        <div className="h-[300px] sm:h-[380px] lg:h-[420px] bg-gray-200 rounded-lg" />
        <div className="flex gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded"
            />
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-10 bg-gray-200 rounded w-1/2 mt-6" />
      </div>
    </div>
  );
}

function ProductDetailsPage() {
  const { slug } = useParams();
  const { t, isArabic } = useLanguage();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const transition = { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getProductBySlug(slug);
        const productData = response?.data;

        if (!productData || !isMounted) {
          setProduct(null);
          setRelatedProducts([]);
          return;
        }

        setProduct(productData);

        let relatedData = [];
        if (productData?.relatedProducts?.length) {
          const relatedRes = await getRelatedProducts(
            productData.relatedProducts,
          );
          relatedData = relatedRes?.data || [];
        }

        if (isMounted) setRelatedProducts(relatedData);
      } catch {
        if (isMounted) {
          setError(t.somethingWentWrong);
          setProduct(null);
          setRelatedProducts([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  // ── الحقول المترجمة للـ Breadcrumb ──────────────────────────
  const productTitle = isArabic
    ? product?.title_ar || product?.title
    : product?.title;
  const categoryName = isArabic
    ? product?.category?.name_ar || product?.category?.name
    : product?.category?.name;

  return (
    <main className="overflow-hidden">
      {/* ── BREADCRUMB ── */}
      <section>
        <Container>
          <Breadcrumb
            links={[
              { label: t.home, href: "/" },
              { label: categoryName || t.category, href: "/" },
              { label: productTitle || t.product },
            ]}
          />
        </Container>
      </section>

      {/* ── DETAILS ── */}
      <section className="pt-5">
        <Container>
          {loading && <ProductSkeleton />}

          {error && (
            <div className="py-32 sm:py-40 text-center text-red-500 font-medium text-sm sm:text-base">
              {error}
            </div>
          )}

          {!loading && product && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 sm:gap-12 lg:gap-16 min-h-[500px]">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition}
              >
                <ProductGallery product={product} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition}
                className="sticky top-24"
              >
                <ProductInfo product={product} />
              </motion.div>
            </div>
          )}
        </Container>
      </section>

      {/* ── RELATED ── */}
      {!loading && relatedProducts.length > 0 && (
        <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24">
          <Container>
            <RelatedProducts products={relatedProducts} />
          </Container>
        </section>
      )}
    </main>
  );
}

export default ProductDetailsPage;
