import { AiFillApple } from "react-icons/ai";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/* ─── Animation variants ─────────────────────────────────────────────── */
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

/* ─── Component ──────────────────────────────────────────────────────── */
function HeroSlide({ slide }) {
  const { t } = useLanguage();

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0c0c0e]">
      {/* ── BACKGROUND ── */}

      {/* Red glow — top-right */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 rounded-full"
        style={{
          width: "clamp(180px, 30vw, 340px)",
          height: "clamp(180px, 30vw, 340px)",
          background:
            "radial-gradient(circle, rgba(219,68,68,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Soft glow — bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 rounded-full"
        style={{
          width: "clamp(140px, 22vw, 240px)",
          height: "clamp(140px, 22vw, 240px)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Grid overlay */}
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
          flex flex-col lg:flex-row
          items-center justify-between
          px-5 py-7
          sm:px-10 sm:py-10
          md:px-14 md:py-12
          xl:px-20 xl:py-16
          gap-6 lg:gap-12
        "
      >
        {/* ── IMAGE SIDE ── */}
        <motion.div
          variants={imagePop}
          initial="hidden"
          animate="show"
          className="
            relative flex items-center justify-center flex-shrink-0
            w-full lg:w-[44%] lg:order-last
          "
          style={{ willChange: "transform, opacity" }}
        >
          {/* Radial glow behind product */}
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
            }}
          />

          {/* ── Orbital rings ── */}
          {/* Ring 1 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "90%",
              height: "90%",
              border: "1px solid rgba(255,255,255,0.07)",
              animation: "heroSpin 22s linear infinite",
            }}
          >
            {/* Dot on ring */}
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

          {/* Ring 2 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "67%",
              height: "67%",
              border: "1px solid rgba(255,255,255,0.05)",
              animation: "heroSpin 14s linear infinite reverse",
            }}
          />

          {/* Ring 3 */}
          <div
            className="absolute rounded-full"
            style={{
              width: "46%",
              height: "46%",
              border: "1px solid rgba(219,68,68,0.18)",
              animation: "heroSpin 9s linear infinite",
            }}
          />

          {/* Product image — continuous float + gentle sway */}
          <motion.img
            src={slide.image}
            alt={slide.title}
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.2, -1.2, 0],
              filter: [
                "drop-shadow(0 24px 64px rgba(0,0,0,0.55)) drop-shadow(0 0 0px rgba(219,68,68,0))",
                "drop-shadow(0 32px 72px rgba(0,0,0,0.65)) drop-shadow(0 0 40px rgba(219,68,68,0.15))",
                "drop-shadow(0 24px 64px rgba(0,0,0,0.55)) drop-shadow(0 0 0px rgba(219,68,68,0))",
              ],
            }}
            transition={{
              duration: 4.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{
              scale: 1.06,
              rotate: -2,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            className="
              relative z-10 w-auto object-contain mx-auto
              h-[170px] sm:h-[210px] md:h-[240px] lg:h-[270px] xl:h-[360px] 2xl:h-[420px]
              py-2 px-3 xl:py-5 xl:px-6
            "
          />

          {/* Floating info badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.72,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute bottom-4 right-2 z-20
              flex items-center gap-3
              rounded-xl px-3 py-2.5
              border border-white/10
              bg-white/5
            "
            style={{ backdropFilter: "blur(12px)" }}
          >
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
              style={{ background: "rgba(219,68,68,0.15)" }}
            >
              <span className="text-[#DB4444] text-sm">✦</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium text-white/80 leading-none mb-1">
                Available Now
              </span>
              <span className="text-[11px] text-white/35 leading-none">
                Free 2-day delivery
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
            className="mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2.5"
          >
            <span
              className="
                flex items-center gap-2
                rounded-full border border-white/12 bg-white/5
                px-3.5 py-1.5
              "
            >
              {/* Pulse dot */}
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
                <AiFillApple className="h-3.5 w-3.5 text-white/60" />
              )}

              <span className="text-[10px] font-medium tracking-[0.14em] text-white/50 uppercase">
                {slide.subtitle}
              </span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeLeft}
            className="font-bold leading-[1.06] tracking-[-0.04em] text-white"
            style={{
              fontSize: "clamp(1.5rem, 3.8vw, 3.1rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            {slide.title}
          </motion.h2>

          {/* Accent divider */}
          <motion.div
            variants={fadeUp}
            className="my-4 xl:my-5 mx-auto lg:mx-0"
            style={{
              width: 44,
              height: 2,
              background: "linear-gradient(90deg, #DB4444, transparent)",
              borderRadius: 2,
            }}
          />

          {/* Description — optional, falls back gracefully if slide.description is undefined */}
          {slide.description && (
            <motion.p
              variants={fadeUp}
              className="
                mb-6 max-w-[340px] mx-auto lg:mx-0
                text-[13px] leading-relaxed text-white/40
              "
            >
              {slide.description}
            </motion.p>
          )}

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <button
              className="
                group inline-flex items-center gap-2.5
                rounded-full bg-white font-semibold text-[#0c0c0e]
                text-[13px] px-5 py-2.5
                transition-all duration-300
                hover:bg-[#DB4444] hover:text-white
                hover:gap-4
              "
              style={{ boxShadow: "0 0 0 0 rgba(219,68,68,0)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 28px rgba(219,68,68,0.38)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(219,68,68,0)")
              }
            >
              {t.shopNow}
              <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              className="
                text-[13px] text-white/35 underline underline-offset-4
                decoration-white/15 transition-colors duration-200
                hover:text-white/65 hover:decoration-white/35
                bg-transparent border-0 cursor-pointer
              "
            >
              {t.learnMore ?? "Learn more"}
            </button>
          </motion.div>

          {/* Stat pills — optional */}
          {slide.stats && (
            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-center gap-5 justify-center lg:justify-start"
            >
              {slide.stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-[3px]">
                  <span
                    className="font-bold leading-none text-white"
                    style={{
                      fontSize: "clamp(1rem, 2vw, 1.35rem)",
                      fontFamily: "'Syne', sans-serif",
                    }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.1em] text-white/30">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* ── Spin keyframe injection ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default HeroSlide;
