import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import TeamCard from "./TeamCard";
import { teamMembers } from "../../data/aboutData";
import { useLanguage } from "@/context/LanguageContext";

function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-28">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <span className="text-[#DB4444] font-poppins font-semibold text-sm">
          {t.ourTeamBadge}
        </span>

        <h2
          className="
            mt-3
            font-inter font-semibold
            text-[40px] leading-[48px]
            tracking-[0.04em] text-black
          "
        >
          {t.ourTeamTitle}
        </h2>
      </motion.div>

      {/* SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={900}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="team-swiper"
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <TeamCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TeamSection;
