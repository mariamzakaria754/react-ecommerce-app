import { useEffect, useState } from "react";
import { VscArrowUp } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          aria-label="Scroll to top"
          className="
            fixed bottom-5 right-5
            sm:bottom-8 sm:right-8
            z-50
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            bg-gray-900 text-white
            flex items-center justify-center
            shadow-lg shadow-black/20
            transition-colors duration-200
            hover:bg-[#DB4444]
          "
        >
          <VscArrowUp className="text-lg sm:text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollTopButton;
