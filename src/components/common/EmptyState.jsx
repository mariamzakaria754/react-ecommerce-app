import { motion } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  ShoppingCart,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

/* ── CONFIG ─────────────────────────────────────────────────────────── */
const config = {
  wishlist: {
    icon: Heart,
    gradient: "from-[#DB4444] to-red-500",
    glow: "bg-pink-200/40",
  },
  cart: {
    icon: ShoppingCart,
    gradient: "from-black to-gray-800",
    glow: "bg-gray-300/40",
  },
};

/* ── COMPONENT ───────────────────────────────────────────────────────── */
function EmptyState({ type = "wishlist", title, description }) {
  const { t, isArabic } = useLanguage();
  const state = config[type] || config.wishlist;
  const Icon = state.icon;

  /* نصوص من ملف الترجمة — مع fallback للإنجليزي */
  const defaultTitle =
    type === "wishlist"
      ? (t.emptyWishlistTitle ?? "Your wishlist is empty")
      : (t.emptyCartTitle ?? "Your cart is empty");

  const defaultDesc =
    type === "wishlist"
      ? (t.emptyWishlistDesc ??
        "Start exploring products and save your favorite items for later.")
      : (t.emptyCartDesc ??
        "Looks like you haven't added anything yet. Start shopping now.");

  const displayTitle = title || defaultTitle;
  const displayDesc = description || defaultDesc;

  const stats = [
    { number: "10K+", label: t.statProducts ?? "Premium Products" },
    { number: "24/7", label: t.statSupport ?? "Customer Support" },
    { number: "99%", label: t.statCustomers ?? "Happy Customers" },
  ];

  return (
    <motion.section
      dir={isArabic ? "rtl" : "ltr"}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative overflow-hidden
        rounded-2xl sm:rounded-[32px] lg:rounded-[40px]
        border border-white/30
        bg-white/70 backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.08)]
        px-4 py-12
        sm:px-8 sm:py-16
        lg:px-20 lg:py-20
      "
    >
      {/* GLOW */}
      <div
        className={`absolute -top-24 -start-24 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full ${state.glow} blur-3xl pointer-events-none`}
      />
      <div className="absolute -bottom-28 -end-28 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full bg-red-200/30 blur-3xl pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center text-center">
        {/* ICON */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className={`
            relative
            w-24 h-24 sm:w-32 sm:h-32 lg:w-[140px] lg:h-[140px]
            rounded-full bg-gradient-to-br ${state.gradient}
            flex items-center justify-center
            shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            mb-7 sm:mb-9 lg:mb-10
          `}
        >
          <Icon size={40} className="text-white sm:hidden" />
          <Icon size={52} className="text-white hidden sm:block lg:hidden" />
          <Icon size={60} className="text-white hidden lg:block" />

          <div className="absolute -top-2.5 -end-2.5 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
            <Sparkles size={18} className="text-[#DB4444] sm:hidden" />
            <Sparkles size={24} className="text-[#DB4444] hidden sm:block" />
          </div>
        </motion.div>

        {/* TITLE */}
        <h1
          className="
          font-bold tracking-tight text-gray-900
          text-2xl sm:text-4xl lg:text-6xl
        "
        >
          {displayTitle}
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
          mt-4 sm:mt-6 leading-relaxed text-gray-500 max-w-[620px]
          text-sm sm:text-lg lg:text-xl
        "
        >
          {displayDesc}
        </p>

        {/* ACTIONS */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          <Link to="/" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`
                w-full sm:w-auto
                h-12 sm:h-[62px]
                px-6 sm:px-10
                rounded-xl sm:rounded-2xl
                bg-gradient-to-r ${state.gradient}
                text-white font-semibold
                text-sm sm:text-lg
                flex items-center justify-center gap-2 sm:gap-3
                shadow-lg transition-all
              `}
            >
              <ShoppingBag size={18} className="sm:hidden" />
              <ShoppingBag size={22} className="hidden sm:block" />
              {t.startShopping ?? "Start Shopping"}
              {isArabic ? (
                <ArrowLeft size={16} className="sm:hidden" />
              ) : (
                <ArrowRight size={16} className="sm:hidden" />
              )}
              {isArabic ? (
                <ArrowLeft size={20} className="hidden sm:block" />
              ) : (
                <ArrowRight size={20} className="hidden sm:block" />
              )}
            </motion.button>
          </Link>

          <Link to="/products" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="
                w-full sm:w-auto
                h-12 sm:h-[62px]
                px-6 sm:px-10
                rounded-xl sm:rounded-2xl
                border border-gray-200 bg-white text-gray-900
                font-semibold text-sm sm:text-lg
                hover:bg-gray-100 transition-all
              "
            >
              {t.exploreProducts ?? "Explore Products"}
            </motion.button>
          </Link>
        </div>

        {/* STATS */}
        <div className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-5 w-full">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-white/40 py-4 sm:py-7 shadow-md"
            >
              <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
                {item.number}
              </h3>
              <p className="mt-1 sm:mt-2 text-gray-500 text-xs sm:text-base px-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default EmptyState;
