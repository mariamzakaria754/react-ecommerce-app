import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function ProductGallery({ product }) {
  const fallbackImage = product?.thumbnail || "";

  const images = useMemo(() => {
    if (!product) return [];
    const baseImages = Array.isArray(product.gallery) ? product.gallery : [];
    const extra = product.extraImage ? [product.extraImage] : [];
    return [...new Set([...baseImages, ...extra])];
  }, [product]);

  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    setActiveImage(images[0] || fallbackImage);
  }, [images, fallbackImage]);

  if (!product) return null;

  const displayImages = images.length ? images : [fallbackImage];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6">
      {/* THUMBNAILS */}
      <div
        className="
        flex flex-row lg:flex-col
        gap-2 sm:gap-3 lg:gap-4
        overflow-x-auto lg:overflow-visible
        pb-1 lg:pb-0
      "
      >
        {displayImages.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setActiveImage(image)}
            className={`
              shrink-0
              w-[80px] h-[80px]
              sm:w-[90px] sm:h-[90px]
              lg:w-[110px] lg:h-[110px]
              rounded-xl bg-[#F5F5F5]
              border-2 overflow-hidden
              flex items-center justify-center
              transition-all duration-300
              hover:scale-[1.05]
              ${activeImage === image ? "border-[#DB4444] shadow-md" : "border-transparent"}
            `}
          >
            <img
              src={image}
              alt={`thumbnail-${index}`}
              loading="lazy"
              className="w-[75%] h-[75%] object-contain"
            />
          </button>
        ))}
      </div>

      {/* MAIN IMAGE */}
      <div
        className="
        flex-1
        min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]
        bg-[#F5F5F5] rounded-2xl
        flex items-center justify-center
        p-6 sm:p-8 lg:p-10
        overflow-hidden relative
      "
      >
        <motion.img
          key={activeImage}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          src={activeImage || fallbackImage}
          alt={product?.title || "product image"}
          className="
            w-full max-w-[280px]
            sm:max-w-[360px]
            lg:max-w-[450px]
            object-contain
          "
        />
      </div>
    </div>
  );
}

export default ProductGallery;
