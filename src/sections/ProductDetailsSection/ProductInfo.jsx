import { useState, useEffect } from "react";
import ProductRating from "./ProductRating";
import ProductActions from "./ProductActions";
import DeliveryInfo from "./DeliveryInfo";
import ProductOptions from "./ProductOptions";
import { useLanguage } from "@/context/LanguageContext";

function ProductInfo({ product }) {
  const { t, isArabic } = useLanguage();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setSelectedColor(product?.colors?.[0]?.value || "");
    setSelectedSize(product?.sizes?.[0] || "");
  }, [product]);

  if (!product) return null;

  // ── الحقول المترجمة ──────────────────────────────────────────
  const title = isArabic ? product.title_ar : product.title;
  const shortTitle = isArabic ? product.shortTitle_ar : product.shortTitle;
  const description = isArabic ? product.description_ar : product.description;

  const { pricing, ratings, stock, brand, sku, tags } = product;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ── HEADER ── */}
      <div className="space-y-2 sm:space-y-3">
        {brand?.name && (
          <span className="text-xs sm:text-sm font-medium text-[#DB4444] uppercase tracking-wider">
            {brand.name}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
          {title}
        </h1>
        {shortTitle && <p className="text-gray-500 text-sm">{shortTitle}</p>}
      </div>

      {/* ── RATING ── */}
      <ProductRating
        rating={ratings?.average || 0}
        reviews={ratings?.totalReviews || 0}
        stock={stock?.inStock ?? Boolean(stock)}
      />

      {/* ── PRICE ── */}
      <div className="flex items-center flex-wrap gap-3 sm:gap-4">
        <span className="text-3xl sm:text-4xl font-bold text-[#DB4444]">
          ${pricing?.current || 0}
        </span>
        {pricing?.old > 0 && (
          <span className="text-lg sm:text-xl text-gray-400 line-through">
            ${pricing.old}
          </span>
        )}
        {pricing?.discountPercentage > 0 && (
          <span className="bg-red-100 text-[#DB4444] px-3 py-1 rounded-full text-sm font-semibold">
            -{pricing.discountPercentage}%
          </span>
        )}
      </div>

      {/* ── DESCRIPTION ── */}
      {description && (
        <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-[15px] border-b pb-6 sm:pb-8">
          {description}
        </p>
      )}

      {/* ── OPTIONS ── */}
      <ProductOptions
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />

      {/* ── ACTIONS ── */}
      <ProductActions
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

      {/* ── EXTRA INFO ── */}
      <div className="space-y-2 sm:space-y-3 text-sm text-gray-500 border-t pt-5 sm:pt-6">
        {sku && (
          <div className="flex gap-2">
            <span className="font-medium text-black">SKU:</span>
            <span>{sku}</span>
          </div>
        )}
        {brand?.name && (
          <div className="flex gap-2">
            <span className="font-medium text-black">{t.brand}:</span>
            <span>{brand.name}</span>
          </div>
        )}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── DELIVERY ── */}
      <DeliveryInfo product={product} />
    </div>
  );
}

export default ProductInfo;
