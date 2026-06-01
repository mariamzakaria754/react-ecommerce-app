import { motion } from "framer-motion";

function PrimaryButton({
  children,

  onClick,

  type = "button",

  disabled = false,

  loading = false,

  size = "md",

  fullWidth = false,

  variant = "primary",

  className = "",
}) {
  /* =========================================
     SIZES
  ========================================= */

  const sizes = {
    sm: "px-6 py-3 text-sm",

    md: "px-10 py-4 text-base",

    lg: "px-14 py-5 text-lg",
  };

  /* =========================================
     VARIANTS
  ========================================= */

  const variants = {
    primary: `
      bg-[#DB4444]
      hover:bg-red-600
      text-white
    `,

    outline: `
      border border-[#DB4444]
      text-[#DB4444]
      hover:bg-[#DB4444]
      hover:text-white
      bg-transparent
    `,

    dark: `
      bg-black
      text-white
      hover:bg-neutral-800
    `,
  };

  return (
    <motion.button
      whileHover={
        !disabled
          ? {
              scale: 1.03,
            }
          : {}
      }
      whileTap={
        !disabled
          ? {
              scale: 0.97,
            }
          : {}
      }
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-lg

        font-poppins
        font-medium

        transition-all
        duration-300

        shadow-sm
        hover:shadow-md

        disabled:opacity-50
        disabled:cursor-not-allowed

        ${sizes[size]}

        ${variants[variant]}

        ${fullWidth ? "w-full" : ""}

        ${className}
      `}
    >
      {/* LOADING */}
      {loading ? (
        <span
          className="
            w-5 h-5
            border-2
            border-white/40
            border-t-white
            rounded-full
            animate-spin
          "
        />
      ) : (
        children
      )}
    </motion.button>
  );
}

export default PrimaryButton;
