import { useLanguage } from "@/context/LanguageContext";

function ProductOptions({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
}) {
  const { t, isArabic } = useLanguage();

  if (!product) return null;

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* ── COLORS ── */}
      {product?.colors?.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">{t.colours}</h3>
          <div className="flex items-center gap-3 flex-wrap">
            {product.colors.map((color, index) => {
              // اسم اللون بالعربي لو موجود
              const colorLabel = isArabic
                ? color.name_ar || color.name
                : color.name;

              return (
                <button
                  key={color?.value || index}
                  type="button"
                  onClick={() => setSelectedColor(color.value)}
                  aria-label={colorLabel}
                  title={colorLabel}
                  className={`
                    relative w-8 h-8 sm:w-9 sm:h-9
                    rounded-full border-2
                    transition-all duration-300
                    ${
                      selectedColor === color.value
                        ? "border-black scale-110"
                        : "border-gray-200 hover:scale-105"
                    }
                  `}
                  style={{ backgroundColor: color.value }}
                >
                  {selectedColor === color.value && (
                    <span className="absolute inset-0 rounded-full border-2 border-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── SIZES ── */}
      {product?.sizes?.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-base sm:text-lg">{t.size}</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`
                  min-w-[44px] sm:min-w-[48px]
                  h-[44px] sm:h-[48px]
                  px-3 sm:px-4
                  rounded-xl border font-medium
                  transition-all duration-300
                  text-sm sm:text-base
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:border-black"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOptions;
