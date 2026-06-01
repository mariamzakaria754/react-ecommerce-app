import { motion } from "framer-motion";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { PiInstagramLogoLight } from "react-icons/pi";

function TeamCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      {/* IMAGE CARD */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[6px]
          bg-[#F5F5F5]
          h-[430px]

          flex
          items-end
          justify-center

          transition-all
          duration-300

          group-hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
        "
      >
        {/* BACKGROUND GLOW */}
        <div
          className="
            absolute
            bottom-[-70px]
            left-1/2
            -translate-x-1/2

            w-[240px]
            h-[240px]

            rounded-full

            bg-black/10

            blur-3xl
          "
        />

        {/* IMAGE */}
        <img
          src={member.image}
          alt={member.name}
          className="
            relative
            z-10

            h-[400px]



            object-contain

            transition-all
            duration-500

            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="mt-8">
        {/* NAME */}
        <h3
          className="
            font-inter
            font-semibold

            text-[32px]
            leading-[38px]

            tracking-[0.04em]

            text-black
          "
        >
          {member.name}
        </h3>

        {/* ROLE */}
        <p
          className="
            mt-2

            font-poppins
            text-base

            text-black/70
          "
        >
          {member.role}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-4 mt-4">
          {/* TWITTER */}
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noreferrer"
            className="
              w-9
              h-9

              rounded-full

              flex
              items-center
              justify-center

              border
              border-black/10

              text-black

              transition-all
              duration-300

              hover:bg-[#DB4444]
              hover:border-[#DB4444]
              hover:text-white
            "
          >
            <FiTwitter size={18} />
          </a>

          {/* INSTAGRAM */}
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="
              w-9
              h-9

              rounded-full

              flex
              items-center
              justify-center

              border
              border-black/10

              text-black

              transition-all
              duration-300

              hover:bg-[#DB4444]
              hover:border-[#DB4444]
              hover:text-white
            "
          >
            <PiInstagramLogoLight size={18} />
          </a>

          {/* LINKEDIN */}
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              w-9
              h-9

              rounded-full

              flex
              items-center
              justify-center

              border
              border-black/10

              text-black

              transition-all
              duration-300

              hover:bg-[#DB4444]
              hover:border-[#DB4444]
              hover:text-white
            "
          >
            <RiLinkedinLine size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard;
