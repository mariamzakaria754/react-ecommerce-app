import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema } from "@/validation/contactSchema";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function ContactForm() {
  const { t, isArabic } = useLanguage();

  const schema = useMemo(() => createContactSchema(t), [t]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const values = watch();

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((r) => setTimeout(r, 1200));
    toast.success(t.messageSent);
    reset();
  };

  const inputClass = `
    w-full h-[52px] sm:h-[58px]
    rounded-[8px] bg-[#F5F5F5]
    px-5 outline-none
    border border-transparent
    focus:border-[#DB4444] focus:bg-white
    transition-all duration-300
    text-black text-sm sm:text-base
    placeholder:text-gray-400
    placeholder:transition-all placeholder:duration-300
    focus:placeholder:opacity-0
    shadow-sm
  `;

  const textareaClass = `
    w-full h-[200px] sm:h-[230px]
    rounded-[8px] bg-[#F5F5F5]
    p-5 resize-none outline-none
    border border-transparent
    focus:border-[#DB4444] focus:bg-white
    transition-all duration-300
    text-black text-sm sm:text-base
    placeholder:text-gray-400
    placeholder:transition-all placeholder:duration-300
    focus:placeholder:opacity-0
    shadow-sm
  `;

  const isEmpty = (name) => !values?.[name];
  const hasError = (name) => !!errors?.[name];
  const showStar = (name) => isEmpty(name) || hasError(name);

  const starClass = `
    absolute top-1/2 -translate-y-1/2
    text-[#DB4444] text-lg
    ${isArabic ? "left-4" : "right-4"}
  `;

  return (
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="
        relative bg-white
        rounded-[10px]
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        p-6 sm:p-8 md:p-10
        overflow-hidden
        font-inter
      "
    >
      {/* TOP DECORATION */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#DB4444] via-[#ff6b6b] to-[#DB4444]" />

      {/* TITLE */}
      <div className="mb-6 sm:mb-8 ">
        <h2 className="text-2xl sm:text-[28px] font-semibold font-inter text-black mb-7">
          {t.contactFormTitle}
        </h2>
        <p className="mt-2 text-sm sm:text-[15px] text-gray-500 font-poppins">
          {t.contactFormDesc}
        </p>
      </div>

      {/* INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {/* NAME */}
        <div className="flex flex-col gap-2">
          <div className="relative font-poppins">
            <input
              type="text"
              placeholder={t.namePlaceholder}
              {...register("name")}
              className={inputClass}
            />
            {showStar("name") && <span className={starClass}>*</span>}
          </div>
          {hasError("name") && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-[#DB4444] font-medium"
            >
              {errors.name.message}
            </motion.span>
          )}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <div className="relative">
            <input
              type="email"
              placeholder={t.emailPlaceholder2}
              {...register("email")}
              className={inputClass}
            />
            {showStar("email") && <span className={starClass}>*</span>}
          </div>
          {hasError("email") && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-[#DB4444] font-medium"
            >
              {errors.email.message}
            </motion.span>
          )}
        </div>

        {/* PHONE */}
        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1">
          <div className="relative">
            <input
              type="text"
              placeholder={t.phonePlaceholder}
              {...register("phone")}
              className={inputClass}
            />
            {showStar("phone") && <span className={starClass}>*</span>}
          </div>
          {hasError("phone") && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-[#DB4444] font-medium"
            >
              {errors.phone.message}
            </motion.span>
          )}
        </div>
      </div>

      {/* MESSAGE */}
      <div className="mt-5 sm:mt-7 flex flex-col gap-2">
        <div className="relative">
          <textarea
            placeholder={t.messagePlaceholder}
            {...register("message")}
            className={textareaClass}
          />
          {showStar("message") && (
            <span
              className={`absolute top-4 text-[#DB4444] text-lg ${isArabic ? "left-4" : "right-4"}`}
            >
              *
            </span>
          )}
        </div>
        {hasError("message") && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-[#DB4444] font-medium"
          >
            {errors.message.message}
          </motion.span>
        )}
      </div>

      {/* BUTTON */}
      <div
        className={`flex mt-8 sm:mt-10 ${isArabic ? "justify-start" : "justify-end"}`}
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="
            group
            h-[52px] sm:h-[58px]
            px-8 sm:px-10
            rounded-[8px] bg-[#DB4444]
            hover:bg-[#c53b3b]
            disabled:opacity-70 disabled:cursor-not-allowed
            transition-all duration-300
            flex items-center gap-3
            text-white font-medium font-poppins
            text-sm sm:text-base
            shadow-[0_15px_30px_rgba(219,68,68,0.22)]
          "
        >
          <span>{isSubmitting ? t.sending : t.sendMessage}</span>
          <SendHorizonal
            size={18}
            className={`transition-transform duration-300 ${isArabic ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
          />
        </motion.button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
