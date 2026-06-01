import { useState } from "react";
import { motion } from "framer-motion";

import { useLocation, useNavigate } from "react-router-dom";

import useCartStore from "@/store/useCartStore";
import useWishlistStore from "@/store/useWishlistStore";
import { useLanguage } from "@/context/LanguageContext";

import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

import AccountDropdown from "@/components/common/AccountDropdown";

/* ── Component ─────────────────────────────────────────────────────────── */

function NavIcons() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isArabic } = useLanguage();

  const cartCount = useCartStore((state) => state.getCartCount());
  const wishlistCount = useWishlistStore((state) => state.wishlist.length);

  const [accountOpen, setAccountOpen] = useState(false);

  const isWishlistActive = location.pathname === "/wishlist";
  const isCartActive = location.pathname === "/cart";
  const isAccountActive = location.pathname === "/account" || accountOpen;

  const badgeSide = isArabic ? "left-0.5 top-0.5" : "right-0.5 top-0.5";

  return (
    <div className="flex items-center gap-1 lg:gap-1.5 relative">
      {/* ── Wishlist ── */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/wishlist")}
        className={`
          relative flex items-center
          w-10 h-10 rounded-full
          transition-colors duration-200
          ${
            isWishlistActive
              ? "text-[#DB4444]"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }
        `}
        aria-label="Wishlist"
      >
        <motion.span
          whileHover={{ scale: 1.12 }}
          animate={
            wishlistCount > 0 && !isWishlistActive
              ? { scale: [1, 1.22, 0.9, 1] }
              : { scale: 1 }
          }
          transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex items-center justify-center"
        >
          <GoHeart className="w-8 h-8 lg:w-9 lg:h-9" />
        </motion.span>

        {wishlistCount > 0 && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 520, damping: 18 }}
            className={`
              absolute ${badgeSide}
              w-[15px] h-[15px]
              flex items-center justify-center
              text-[8px] font-bold text-white
              bg-[#DB4444] rounded-full
              ring-2 ring-white
            `}
          >
            {wishlistCount > 99 ? "99+" : wishlistCount}
          </motion.span>
        )}
      </motion.button>

      {/* ── Cart ── */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/cart")}
        className={`
          relative flex items-center justify-center
          w-10 h-10 rounded-full
          transition-colors duration-200
          ${
            isCartActive
              ? "text-[#DB4444]"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
          }
        `}
        aria-label="Cart"
      >
        <motion.span
          whileHover={{ y: -2 }}
          transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex items-center justify-center"
        >
          <IoCartOutline className="w-8 h-8 lg:w-9 lg:h-9" />
        </motion.span>

        {cartCount > 0 && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 520, damping: 18 }}
            className={`
              absolute ${badgeSide}
              w-[18px] h-[18px]
              flex items-center justify-center
              text-[9px] font-bold text-white
              bg-[#DB4444] rounded-full
              ring-2 ring-white
            `}
          >
            {cartCount > 99 ? "99+" : cartCount}
          </motion.span>
        )}
      </motion.button>

      {/* ── Thin divider ── */}
      <span className="w-px h-5 bg-gray-200 mx-1 flex-shrink-0" />

      {/* ── Account ── */}
      <div className="relative">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setAccountOpen((p) => !p)}
          className={`
            relative flex items-center justify-center
            w-10 h-10 rounded-full
            transition-all duration-200
            ${
              isAccountActive
                ? "bg-[#DB4444] border-[#DB4444] text-white"
                : "border-gray-300 text-gray-500 hover:border-[#DB4444] hover:text-[#DB4444] hover:bg-red-50"
            }
          `}
          aria-label="Account"
          aria-expanded={accountOpen}
        >
          <motion.span
            whileHover={!isAccountActive ? { scale: 1.1 } : {}}
            className="flex items-center justify-center"
          >
            <FiUser className="w-7 h-7 lg:w-8 lg:h-8" />
          </motion.span>
        </motion.button>

        <AccountDropdown open={accountOpen} setOpen={setAccountOpen} />
      </div>
    </div>
  );
}

export default NavIcons;
