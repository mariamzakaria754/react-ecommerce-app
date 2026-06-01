import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useLanguage } from "@/context/LanguageContext";

import HeroSlide from "./HeroSlide";
import iphoneImage from "@/assets/images/iphone.png";
import gamingImage from "@/assets/images/gaming.jpg";
import fashionImage from "@/assets/images/fashion.jpg";
import speakerImage from "@/assets/images/speaker.jpg";
import perfumeImage from "@/assets/images/perfume.jpg";

/*
  ─── FIX 1: بدلنا blur من الـ transition عشان يبطل التقطيع ───────
  blur على GPU بيسبب repaint ثقيل — بدلناه بـ opacity + x بس
  ─────────────────────────────────────────────────────────────────
*/
const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "4%" : "-4%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      opacity: { duration: 0.4, ease: "easeOut" },
    },
  },
  exit: (dir) => ({
    x: dir > 0 ? "-4%" : "4%",
    opacity: 0,
    transition: {
      x: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
      opacity: { duration: 0.3, ease: "easeIn" },
    },
  }),
};

const ArrowButton = ({ onClick, label, children }) => (
  <motion.button
    onClick={onClick}
    aria-label={label}
    whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,1)" }}
    whileTap={{ scale: 0.93 }}
    className="
      hidden md:flex
      h-11 w-11 items-center justify-center
      rounded-full
      bg-white/12 text-white
      backdrop-blur-md
      border border-white/15
      shadow-[0_4px_20px_rgba(0,0,0,0.2)]
      transition-colors duration-200
      hover:text-black z-30
    "
  >
    {children}
  </motion.button>
);

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const { t } = useLanguage();

  const [navbarHeight, setNavbarHeight] = useState(106);

  useEffect(() => {
    const navbar = document.querySelector("header");
    const topbar = document.querySelector("header")?.previousElementSibling;

    const measure = () => {
      const h1 = navbar?.offsetHeight || 70;
      const h2 = topbar?.offsetHeight || 36;
      setNavbarHeight(h1 + h2);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (navbar) ro.observe(navbar);
    if (topbar) ro.observe(topbar);
    return () => ro.disconnect();
  }, []);

  const slides = useMemo(
    () => [
      {
        id: 1,
        subtitle: t.slideIphoneSubtitle,
        title: t.slideIphoneTitle,
        image: iphoneImage,
        isApple: true,
      },
      {
        id: 2,
        subtitle: t.slideGamingSubtitle,
        title: t.slideGamingTitle,
        image: gamingImage,
      },
      {
        id: 3,
        subtitle: t.slideFashionSubtitle,
        title: t.slideFashionTitle,
        image: fashionImage,
      },
      {
        id: 4,
        subtitle: t.slideSpeakerSubtitle,
        title: t.slideSpeakerTitle,
        image: speakerImage,
      },
      {
        id: 5,
        subtitle: t.slidePerfumeSubtitle,
        title: t.slidePerfumeTitle,
        image: perfumeImage,
      },
    ],
    [t],
  );

  const goTo = (index) => {
    setDirection(index > activeSlide ? 1 : -1);
    setActiveSlide(index);
  };

  const next = () => {
    setDirection(1);
    setActiveSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
  };

  const prev = () => {
    setDirection(-1);
    setActiveSlide((p) => (p === 0 ? slides.length - 1 : p - 1));
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [slides.length, paused, activeSlide]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="
          relative w-full rounded-2xl overflow-hidden
          bg-black
          border border-white/8
          shadow-[0_24px_80px_rgba(0,0,0,0.25)]
        "
        style={{
          minHeight: `calc(100svh - ${navbarHeight}px)`,
        }}
      >
        {/* ── SLIDES ── */}
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={slides[activeSlide].id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            /*
              will-change: transform  ← بيخبر المتصفح يحجز GPU layer
              بيمنع الـ repaint وبيخلي الأنيميشن أسلس
            */
            style={{ willChange: "transform, opacity" }}
            className="absolute inset-0"
          >
            <HeroSlide slide={slides[activeSlide]} />
          </motion.div>
        </AnimatePresence>

        {/* ── PROGRESS BAR ── */}
        {!paused && (
          <motion.div
            key={`progress-${activeSlide}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: "linear" }}
            style={{ transformOrigin: "left", willChange: "transform" }}
            className="absolute bottom-0 left-0 h-[2px] w-full bg-white/30 z-30"
          />
        )}

        {/* ── ARROWS ── */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
          <ArrowButton onClick={prev} label="Previous slide">
            <HiOutlineChevronLeft size={18} />
          </ArrowButton>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <ArrowButton onClick={next} label="Next slide">
            <HiOutlineChevronRight size={18} />
          </ArrowButton>
        </div>

        {/* ── DOTS ── */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Slide ${index + 1}`}
              className={`
                rounded-full transition-all duration-500 cursor-pointer
                ${
                  activeSlide === index
                    ? "w-8 h-2.5 bg-white shadow-[0_0_20px_rgba(255,255,255,0.35)]"
                    : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
