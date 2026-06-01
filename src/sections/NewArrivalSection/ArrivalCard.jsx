import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const layoutClasses = {
  large: {
    container: "min-h-[420px] sm:min-h-[520px] lg:min-h-[680px]",
    image:
      "w-[110%] sm:w-[125%] lg:w-[140%] scale-105 sm:scale-110 lg:scale-125 translate-y-6 sm:translate-y-10 lg:translate-y-16",
    textSize: "text-xl sm:text-2xl lg:text-3xl",
  },
  medium: {
    container: "min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]",
    image:
      "w-[105%] sm:w-[115%] lg:w-[125%] scale-105 translate-x-4 sm:translate-x-8 lg:translate-x-10 translate-y-4 sm:translate-y-6 lg:translate-y-8",
    textSize: "text-lg sm:text-xl lg:text-2xl",
  },
  small: {
    container: "min-h-[220px] sm:min-h-[260px] lg:min-h-[313px]",
    image:
      "w-[100%] sm:w-[110%] lg:w-[115%] scale-105 translate-y-2 sm:translate-y-3 lg:translate-y-4",
    textSize: "text-base sm:text-lg lg:text-xl",
  },
};

function ArrivalCard({ item }) {
  const { isArabic } = useLanguage();

  if (!item) return null;

  const layout = layoutClasses[item.layout] || layoutClasses.small;

  const title = isArabic && item.titleAr ? item.titleAr : item.title;
  const subtitle =
    isArabic && item.subtitleAr ? item.subtitleAr : item.subtitle;
  const description =
    isArabic && item.descriptionAr ? item.descriptionAr : item.description;
  const badge = isArabic && item.badgeAr ? item.badgeAr : item.badge;
  const ctaText =
    isArabic && item.cta?.textAr ? item.cta.textAr : item.cta?.text;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className={`
        relative rounded-2xl cursor-pointer group
        bg-black overflow-hidden w-full h-full
        ${layout.container}
      `}
    >
      {/* IMAGE */}
      {item.image && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-visible">
          <img
            src={item.image}
            alt={title}
            className={`
              object-contain
              transition-transform duration-700 ease-out
              group-hover:scale-110 sm:group-hover:scale-125
              drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              ${layout.image}
            `}
          />
        </div>
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />

      {/* BADGE */}
      {badge && (
        <div
          className="
            absolute top-3 sm:top-4 lg:top-5
            left-3 sm:left-4 lg:left-5
            rtl:left-auto rtl:right-3 rtl:sm:right-4 rtl:lg:right-5
            z-30
            px-2 sm:px-3 py-1
            text-[10px] sm:text-xs
            bg-white/10 backdrop-blur-md
            text-white rounded-full
          "
        >
          {badge}
        </div>
      )}

      {/* CONTENT */}
      <div
        className="
          absolute bottom-4 sm:bottom-5 lg:bottom-6
          left-4 sm:left-5 lg:left-6
          rtl:left-auto rtl:right-4 rtl:sm:right-5 rtl:lg:right-6
          z-30
          max-w-[200px] sm:max-w-[240px] lg:max-w-[260px]
          text-start rtl:text-end
        "
      >
        <span className="text-[#DB4444] text-xs sm:text-sm">{subtitle}</span>

        <h3 className={`text-white font-semibold mt-1 ${layout.textSize}`}>
          {title}
        </h3>

        <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2">
          {description}
        </p>

        <button className="mt-2 sm:mt-3 text-white text-xs sm:text-sm underline hover:opacity-80 transition">
          {ctaText}
        </button>
      </div>
    </motion.div>
  );
}

export default ArrivalCard;
