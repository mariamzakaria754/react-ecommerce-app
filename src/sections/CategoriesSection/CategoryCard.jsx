import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function CategoryCard({ category, onClick, isActive = false }) {
  const { isArabic } = useLanguage();

  const title =
    isArabic && category.titleAr ? category.titleAr : category.title;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick?.(category)}
      className={`
        group
        relative
        w-full
        h-[160px]
        sm:h-[175px]
        lg:h-[190px]
        rounded-2xl
        lg:rounded-3xl
        flex
        flex-col
        items-center
        justify-center
        gap-4
        lg:gap-5
        overflow-hidden
        cursor-pointer
        transition-all
        duration-500
        border
        hover:border-[#DB4444]
        hover:shadow-[0_20px_45px_rgba(219,68,68,0.12)]
        ${
          isActive
            ? "border-[#DB4444] shadow-[0_20px_45px_rgba(219,68,68,0.18)]"
            : "border-gray-200"
        }
      `}
    >
      {/* BG HOVER */}
      <div
        className="
        absolute inset-0
        bg-gradient-to-br from-[#DB4444] to-[#ff6b6b]
        opacity-0
        transition-all duration-500
        group-hover:opacity-100
      "
      />

      {/* ICON */}
      <div
        className="
        relative z-10
        w-16 h-16
        sm:w-18 sm:h-18
        lg:w-20 lg:h-20
        rounded-xl
        lg:rounded-2xl
        bg-[#F5F5F5]
        flex items-center justify-center
        transition-all duration-500
        group-hover:bg-white/20
        group-hover:scale-110
      "
      >
        <img
          src={category.image}
          alt={title}
          className="
            w-10 h-10
            sm:w-11 sm:h-11
            lg:w-12 lg:h-12
            object-contain
            transition-all duration-500
            group-hover:brightness-0
            group-hover:invert
          "
        />
      </div>

      {/* TITLE */}
      <h3
        className="
        relative z-10
        font-poppins
        text-xs
        sm:text-sm
        lg:text-base
        font-semibold
        text-black
        group-hover:text-white
        transition-colors duration-500
        text-center
        px-2
      "
      >
        {title}
      </h3>
    </motion.div>
  );
}

export default CategoryCard;
