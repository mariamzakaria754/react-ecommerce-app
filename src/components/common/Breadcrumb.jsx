import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function Breadcrumb({ links = [] }) {
  const { isArabic } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="

        flex
        items-center
        flex-wrap
        gap-2
        pt-20
        pb-14
        font-poppins
        text-[14px]
      "
    >
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {/* LINK */}
            {link.href ? (
              <Link
                to={link.href}
                className="text-black/50 hover:text-[#DB4444] transition-all duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <span className="text-black font-medium">{link.label}</span>
            )}

            {/* ARROW */}
            {!isLast &&
              (isArabic ? (
                <ChevronLeft size={15} className="text-black/30" />
              ) : (
                <ChevronRight size={15} className="text-black/30" />
              ))}
          </div>
        );
      })}
    </motion.div>
  );
}

export default Breadcrumb;
