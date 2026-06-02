import { AiFillApple } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const imagePop = {
  hidden: { opacity: 0, scale: 0.88, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

function HeroSlide({ slide }) {
  const { t } = useLanguage();

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0e]">
      {/* ── BACKGROUND ── */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 rounded-full"
        style={{
          width: "clamp(160px,28vw,340px)",
          height: "clamp(160px,28vw,340px)",
          background:
            "radial-gradient(circle, rgba(219,68,68,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 rounded-full"
        style={{
          width: "clamp(120px,20vw,240px)",
          height: "clamp(120px,20vw,240px)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── INNER WRAPPER ── */}
      <div
        className="
        relative z-10 h-full w-full
        flex flex-col lg:flex-row items-center justify-between
        px-5 py-6
        sm:px-8 sm:py-8
        md:px-12 md:py-10
        xl:px-20 xl:py-16
        gap-4 sm:gap-6 md:gap-8 lg:gap-12
      "
      >
        {/* ── IMAGE SIDE ── */}
        <motion.div
          variants={imagePop}
          initial="hidden"
          animate="show"
          className="relative flex items-center justify-center flex-shrink-0 w-full lg:w-[44%] lg:order-last"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Glow behind image */}
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
          />

          {/* Ring 1 — كبير */}
          <div
            className="absolute rounded-full"
            style={{
              width: "90%",
              height: "90%",
              border: "1px solid rgba(255,255,255,0.07)",
              animation: "heroSpin 22s linear infinite",
            }}
          >
            <div
              className="absolute left-1/2 top-[4%] -translate-x-1/2 rounded-full"
              style={{
                width: 7,
                height: 7,
                background: "#DB4444",
                boxShadow: "0 0 10px rgba(219,68,68,0.9)",
              }}
            />
          </div>

          {/* Ring 2 — معاكس */}
          <div
            className="absolute rounded-full"
            style={{
              width: "67%",
              height: "67%",
              border: "1px solid rgba(255,255,255,0.05)",
              animation: "heroSpin 14s linear infinite reverse",
            }}
          />

          {/* Ring 3 — أحمر */}
          <div
            className="absolute rounded-full"
            style={{
              width: "46%",
              height: "46%",
              border: "1px solid rgba(219,68,68,0.18)",
              animation: "heroSpin 9s linear infinite",
            }}
          />

          {/* ── Product image — float animation ── */}
          <motion.img
            src={slide.image}
            alt={slide.title}
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, -1, 0],
              filter: [
                "drop-shadow(0 20px 56px rgba(0,0,0,0.5))",
                "drop-shadow(0 28px 64px rgba(0,0,0,0.6)) drop-shadow(0 0 30px rgba(219,68,68,0.12))",
                "drop-shadow(0 20px 56px rgba(0,0,0,0.5))",
              ],
            }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}
            whileHover={{
              scale: 1.06,
              rotate: -2,
              transition: { duration: 0.35 },
            }}
            className="
              relative z-10 w-auto object-contain mx-auto
              h-[150px]
              sm:h-[190px]
              md:h-[220px]
              lg:h-[260px]
              xl:h-[340px]
              2xl:h-[400px]
              py-2 px-3
              sm:py-3 sm:px-4
              xl:py-5 xl:px-6
            "
          />

          {/* ── Floating badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.5 }}
            className="absolute bottom-3 right-1 z-20 hidden sm:flex items-center gap-2.5 rounded-xl px-3 py-2 border border-white/10 bg-white/5"
            style={{ backdropFilter: "blur(12px)" }}
          >
            <div
              className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg"
              style={{ background: "rgba(219,68,68,0.15)" }}
            >
              <span className="text-[#DB4444] text-xs">✦</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-white/80 leading-none mb-1">
                {t.availableNow ?? "Available Now"}
              </span>
              <span className="text-[10px] text-white/35 leading-none">
                {t.freeDelivery}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── CONTENT SIDE ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-white w-full max-w-[500px] text-center lg:text-start"
          style={{ willChange: "transform, opacity" }}
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="mb-3 md:mb-4 xl:mb-5 flex items-center justify-center lg:justify-start gap-2.5"
          >
            <span className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 sm:px-3.5 sm:py-1.5">
              <span className="relative flex h-[6px] w-[6px] flex-shrink-0">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ background: "#DB4444" }}
                />
                <span
                  className="relative inline-flex h-[6px] w-[6px] rounded-full"
                  style={{ background: "#DB4444" }}
                />
              </span>
              {slide.isApple && (
                <AiFillApple className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white/60" />
              )}
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.14em] text-white/50 uppercase">
                {slide.subtitle}
              </span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeLeft}
            className="font-bold leading-[1.06] tracking-[-0.04em] text-white"
            style={{
              fontSize: "clamp(1.3rem,3.5vw,3.1rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
            }}
          >
            {slide.title}
          </motion.h2>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="my-3 md:my-4 xl:my-5 mx-auto lg:mx-0"
            style={{
              width: 40,
              height: 2,
              background: "linear-gradient(90deg, #DB4444, transparent)",
              borderRadius: 2,
            }}
          />

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <button
              className="
                group inline-flex items-center gap-2
                rounded-full bg-white font-semibold text-[#0c0c0e]
                text-[12px] sm:text-[13px]
                px-4 py-2 sm:px-5 sm:py-2.5 xl:px-6 xl:py-3
                transition-all duration-300
                hover:bg-[#DB4444] hover:text-white hover:gap-3
              "
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(219,68,68,0.38)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {t.shopNow}
              <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="text-[11px] sm:text-[13px] text-white/35 underline underline-offset-4 decoration-white/15 transition-colors hover:text-white/65 bg-transparent border-0 cursor-pointer">
              {t.learnMore ?? "Learn more"}
            </button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default HeroSlide;
