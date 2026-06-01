import Container from "@/components/common/Container";
import { motion } from "framer-motion";

import aboutImage from "@/assets/images/about-story.png";
import { useLanguage } from "@/context/LanguageContext";

function StorySection() {
  const { t, isArabic } = useLanguage();

  // Flip enter direction in RTL
  const textMotion = { x: isArabic ? 60 : -60 };
  const imageMotion = { x: isArabic ? -60 : 60 };

  return (
    <section className="pb-24 lg:pb-32 overflow-hidden">
      <div
        className="
          grid
          lg:grid-cols-[1fr_1fr]
          items-center
          gap-14 lg:gap-20
        "
      >
        {/* TEXT SIDE */}
        <Container>
          <motion.div
            initial={{ opacity: 0, ...textMotion }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-[550px] px-8 py-10 lg:py-0"
          >
            <h1
              className="
                font-inter font-semibold
                text-[38px] md:text-[46px] lg:text-[54px]
                leading-[48px] md:leading-[58px] lg:leading-[64px]
                tracking-[0.06em] text-black
              "
            >
              {t.ourStoryTitle}
            </h1>

            <div
              className="
                mt-8 flex flex-col gap-6
                font-poppins font-medium
                text-[15px] md:text-base
                leading-7 md:leading-8 text-black/90
              "
            >
              <p>{t.ourStoryP1}</p>
              <p>{t.ourStoryP2}</p>
            </div>
          </motion.div>
        </Container>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, ...imageMotion }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            className="
              relative overflow-hidden
              bg-[#FCEAEF]
              lg:rounded-l-[6px]
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            "
          >
            <img
              src={aboutImage}
              alt={t.ourStoryTitle}
              className="
                w-full
                h-[300px] md:h-[420px] lg:h-[520px]
                object-cover object-center
                transition-transform duration-700
                hover:scale-105
              "
            />
          </div>

          {/* DECORATION */}
          <div
            className={`
              hidden lg:block
              absolute -bottom-6
              ${isArabic ? "-right-6" : "-left-6"}
              w-32 h-32 rounded-full
              bg-[#DB4444]/10 blur-3xl
            `}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default StorySection;
