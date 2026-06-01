import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function CheckoutInput({
  label,
  name,
  register,
  error,
  required = false,
  type = "text",
  onChange,
}) {
  const { t, isArabic } = useLanguage();

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-[14px] sm:text-[15px] font-medium text-[#1A1A1A] tracking-wide  font-inter"
      >
        {label}
        {required && <span className="text-[#DB4444] mx-1">*</span>}
      </label>

      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          id={name}
          type={type}
          {...register(name, { onChange })}
          className={`
            w-full h-12 sm:h-14
            px-4 sm:px-5
            font-poppins
            rounded-2xl bg-[#FAFAFA] border
            text-[14px] sm:text-[15px] text-black
            outline-none transition-all duration-300
            placeholder:text-gray-400
            ${isArabic ? "text-right" : "text-left"}
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-200 focus:border-[#DB4444] focus:bg-white"
            }
          `}
          placeholder={`${t.enterField} ${label}`}
        />

        {error && (
          <div
            className={`absolute top-1/2 -translate-y-1/2 text-red-500 text-sm font-semibold ${isArabic ? "left-4" : "right-4"}`}
          >
            !
          </div>
        )}
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 font-medium ps-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
}

export default CheckoutInput;
