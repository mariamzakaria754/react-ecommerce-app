import { useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  FiChevronRight,
  FiHeart,
  FiLogOut,
  FiMapPin,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import useAuthStore from "@/store/useAuthStore";
import useUserStore from "@/store/useUserStore";
import { useLanguage } from "@/context/LanguageContext";

function AccountDropdown({ open, setOpen }) {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { t, isArabic } = useLanguage();

  const setActiveTab = useUserStore((s) => s.setActiveTab);
  const resetStore = useUserStore((s) => s.resetStore);
  const logout = useAuthStore((s) => s.logout);
  const user = useAuthStore((s) => s.user);
  const accountStatus = useAuthStore((s) => s.accountStatus);

  const isLoggedIn = !!user;

  const menuItems = [
    { id: "profile", label: t.profile, icon: FiUser },
    { id: "orders", label: t.orders, icon: FiShoppingBag },
    { id: "wishlist", label: t.wishlistMenu, icon: FiHeart },
    { id: "addresses", label: t.addressBook, icon: FiMapPin },
  ];

  const avatarFallback = useMemo(() => {
    return (
      user?.name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"
    );
  }, [user]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className={`
              absolute top-[calc(100%+12px)] z-50
              ${isArabic ? "left-0" : "right-0"}

              w-[320px]
              rounded-3xl
              bg-[#111]/95
              backdrop-blur-2xl
              p-3
              shadow-[0_25px_70px_rgba(0,0,0,.45)]
            `}
          >
            {/* HEADER */}
            <div className="mb-3 rounded-3xl bg-white/5 px-4 py-4 flex items-center gap-3">
              {/* AVATAR */}
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                  className="
        w-11 h-11
        rounded-full
        object-cover
        border border-white/10
      "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="w-11 h-11 rounded-full bg-brand flex items-center justify-center text-white font-semibold">
                  {(user?.name?.[0] || user?.email?.[0] || "U").toUpperCase()}
                </div>
              )}

              {/* USER INFO */}
              <div className="min-w-0">
                <h3 className="text-white font-medium truncate">
                  {user?.email}
                </h3>

                <p className="mt-1 text-gray-400 text-sm">
                  {accountStatus === "completed"
                    ? t.accountCompleted
                    : t.accountActive}
                </p>
              </div>
            </div>

            {/* MENU */}
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setOpen(false);

                      if (!isLoggedIn) {
                        navigate("/login");
                        return;
                      }

                      setActiveTab(item.id);
                      navigate("/account");
                    }}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-white hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5">
                        <Icon size={18} />
                      </div>

                      <span>{item.label}</span>
                    </div>

                    <FiChevronRight className={isArabic ? "rotate-180" : ""} />
                  </button>
                );
              })}
            </div>

            {/* LOGOUT */}
            {isLoggedIn && (
              <>
                <div className="my-3 h-px bg-white/10" />

                <button
                  onClick={() => {
                    logout();
                    resetStore();
                    navigate("/");
                    setOpen(false);
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-2xl"
                >
                  <FiLogOut size={18} />
                  <span>{t.logout}</span>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccountDropdown;
