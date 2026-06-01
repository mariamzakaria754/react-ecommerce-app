import { motion } from "framer-motion";
import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { useStatistics } from "../../data/aboutData"; // hook that returns translated stats

function StatsSection() {
  const { t } = useLanguage();
  const statistics = useStatistics(); // translated data
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
        {statistics.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                relative border rounded-md min-h-[230px]
                px-8 py-10
                flex flex-col items-center justify-center text-center
                cursor-pointer overflow-hidden transition-all duration-300
                ${
                  isActive
                    ? "bg-[#DB4444] border-[#DB4444] shadow-[0_20px_45px_rgba(219,68,68,0.25)]"
                    : "bg-white border-[#E5E5E5] hover:border-[#DB4444] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
                }
              `}
            >
              {isActive && (
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
              )}

              {/* ICON */}
              <div className="relative flex items-center justify-center">
                <div
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300
                    ${isActive ? "bg-white/30" : "bg-gray-300"}
                  `}
                >
                  <div
                    className={`
                      w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                      ${isActive ? "bg-white" : "bg-black"}
                    `}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`
                        w-7 h-7 object-contain transition-all duration-300
                        ${isActive ? "brightness-0" : "brightness-0 invert"}
                      `}
                    />
                  </div>
                </div>
              </div>

              {/* TITLE */}
              <h2
                className={`
                  mt-8 text-[32px] font-bold leading-none transition-all duration-300
                  ${isActive ? "text-white" : "text-black"}
                `}
              >
                {item.title}
              </h2>

              {/* SUBTITLE */}
              <p
                className={`
                  mt-3 text-base leading-6 transition-all duration-300
                  ${isActive ? "text-white" : "text-black"}
                `}
              >
                {item.subtitle}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;
