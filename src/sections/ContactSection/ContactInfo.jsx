import { motion } from "framer-motion";
import { contactInfo } from "../../data/contactData";
import { useLanguage } from "@/context/LanguageContext";

function ContactInfo() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        bg-white
        rounded-[6px]
        shadow-[0_1px_13px_rgba(0,0,0,0.05)]
        p-6 sm:p-8 md:p-10
        h-fit
      "
    >
      {contactInfo.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.id}>
            {/* HEADER */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative flex items-center justify-center shrink-0">
                <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <div className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full bg-[#DB4444] flex items-center justify-center shadow-[0_8px_20px_rgba(219,68,68,0.28)]">
                    <Icon className="text-white w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
                  </div>
                </div>
              </div>

              <h3 className="text-base sm:text-[18px] font-semibold font-poppins text-black">
                {t[item.titleKey]}
              </h3>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 sm:mt-7 text-[13px] sm:text-[14px] leading-7 text-[#6B7280] font-poppins">
              {t[item.descKey]}
            </p>

            {/* DETAILS */}
            <div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4">
              {item.detailKeys.map((key, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#DB4444] shrink-0" />
                  <span className="text-sm sm:text-[15px] text-black font-medium font-poppins">
                    {t[key]}
                  </span>
                </div>
              ))}
            </div>

            {/* DIVIDER */}
            {index !== contactInfo.length - 1 && (
              <div className="my-8 sm:my-10 border-b border-[#E5E7EB]" />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}

export default ContactInfo;
