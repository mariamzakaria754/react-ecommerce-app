import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function NotFoundPage() {
  const { t, isArabic } = useLanguage();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="
        min-h-screen flex items-center justify-center
        bg-gradient-to-b from-white via-gray-50 to-white
        px-4 sm:px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center max-w-2xl mx-auto w-full"
      >
        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="
            text-[100px] sm:text-[140px] md:text-[180px]
            font-bold text-[#DB4444] leading-none
            drop-shadow-[0_10px_20px_rgba(219,68,68,0.15)]
          "
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900"
        >
          {t.notFoundTitle ?? "Page Not Found"}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-10 text-base sm:text-lg text-gray-500 max-w-lg mx-auto"
        >
          {t.notFoundDesc ??
            "The page you are looking for may have been removed, renamed, or is temporarily unavailable."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-6 sm:px-7 py-3 sm:py-3.5
              rounded-xl bg-[#DB4444] text-white font-semibold
              shadow-lg shadow-red-200
              hover:scale-105 hover:shadow-xl
              transition-all duration-300
            "
          >
            <Home size={18} />
            {t.backHome ?? "Back Home"}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-6 sm:px-7 py-3 sm:py-3.5
              rounded-xl border border-gray-300 bg-white
              font-semibold text-gray-700
              hover:bg-gray-50 hover:scale-105
              transition-all duration-300
            "
          >
            {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            {t.goBack ?? "Go Back"}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default NotFoundPage;
