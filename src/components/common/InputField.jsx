import { forwardRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const InputField = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      error,
      icon: Icon,
      autoComplete,
      className = "",
      ...props
    },
    ref,
  ) => {
    const { isArabic } = useLanguage();

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-700 font-inter">
            {label}
          </label>
        )}

        <div className="relative">
          {Icon && (
            <div
              className={`
                absolute top-1/2 -translate-y-1/2
                text-gray-400 pointer-events-none
                ${isArabic ? "right-4" : "left-4"}
              `}
            >
              <Icon size={18} />
            </div>
          )}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={`
              h-14 w-full
              rounded-2xl border bg-white
              px-4
              font-poppins
              text-[15px] font-medium text-gray-800
              outline-none transition-all duration-300

              ${Icon ? (isArabic ? "pr-12 pl-4" : "pl-12 pr-4") : "px-4"}

              ${
                error
                  ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                  : "border-gray-200 focus:border-[#DB4444] focus:ring-4 focus:ring-[#DB4444]/10"
              }

              placeholder:text-gray-400
              placeholder:font-normal
              placeholder:text-[14px]

              shadow-sm hover:border-gray-300

              ${className}
            `}
            {...props}
          />
        </div>

        {error && <p className="text-sm font-medium text-red-500">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = "InputField";

export default InputField;
