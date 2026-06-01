/* SectionHeader.jsx */

import { motion } from "framer-motion";

function SectionHeader({ badge, title, subtitle, children, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: true,
      }}
      className={`

        flex
        flex-col
        lg:flex-row
        lg:items-end
        lg:justify-between
        gap-8
        mb-14
        ${className}
      `}
    >
      {/* LEFT */}
      <div className="flex flex-col gap-6">
        {/* BADGE */}
        <div className="flex items-center gap-4">
          {/* RED BAR */}
          <motion.span
            initial={{
              height: 0,
            }}
            whileInView={{
              height: 40,
            }}
            transition={{
              duration: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="
              w-[6px]
              h-10
              rounded-full
              bg-[#DB4444]
              shadow-[0_0_15px_rgba(219,68,68,0.5)]
            "
          />

          {/* BADGE TEXT */}
          <span
            className="
              text-[#DB4444]
              font-poppins
              font-semibold
              text-sm
              sm:text-base
              tracking-wide
              uppercase
            "
          >
            {badge}
          </span>
        </div>

        {/* TITLE + SUBTITLE */}
        <div>
          <h2
            className="
              font-inter
              font-bold
             text-[28px]
              sm:text-[34px]
              lg:text-[35px]

              tracking-wide
              text-black
            "
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="
                mt-3
                text-gray-500
                text-sm
                sm:text-base
                max-w-[600px]
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      {children && (
        <div
          className="
            flex
            items-center
            gap-3
            flex-wrap
          "
        >
          {children}
        </div>
      )}
    </motion.div>
  );
}

export default SectionHeader;
