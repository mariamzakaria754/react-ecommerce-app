import { Outlet, useLocation } from "react-router-dom";
import authImage from "@/assets/images/auth-banner.png";
import { motion, AnimatePresence } from "framer-motion";

function AuthLayout() {
  const location = useLocation();

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block mt-16"
      >
        <img
          src={authImage}
          alt="Auth"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <div className="flex items-center justify-center mt-24 lg:mt-0 px-6 sm:px-10">
        <div className="w-full max-w-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AuthLayout;
