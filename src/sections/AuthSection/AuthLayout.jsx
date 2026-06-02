import { Outlet, useLocation } from "react-router-dom";
import authImage from "@/assets/images/auth-banner.png";
import { motion, AnimatePresence } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, scale: 1.04 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
  exit: {
    opacity: 0,
    x: -16,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function AuthLayout() {
  const location = useLocation();

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* ── LEFT: IMAGE PANEL ─────────────────────── */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="hidden lg:block relative overflow-hidden bg-gray-950 mt-16"
      >
        <img
          src={authImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-10 left-10">
          <span className="text-white text-2xl font-bold tracking-tight">
            Exclusive
          </span>
        </div>

        <div className="absolute bottom-12 left-10 right-10">
          <p className="text-white/90 text-2xl font-semibold leading-snug max-w-xs">
            Shop smarter. <br />
            <span className="text-[#DB4444]">Live better.</span>
          </p>
          <p className="text-white/50 text-sm mt-3">
            Millions of products. One destination.
          </p>
        </div>

        <div
          className="absolute bottom-0 right-0 w-48 h-48 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
      </motion.div>

      {/* ── RIGHT: FORM PANEL ─────────────────────── */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-16 py-28 bg-white">
        <div className="lg:hidden mb-10 self-start">
          <span className="text-gray-900 text-xl font-bold tracking-tight">
            Exclusive
          </span>
        </div>

        <div className="w-full max-w-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Exclusive. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default AuthLayout;
