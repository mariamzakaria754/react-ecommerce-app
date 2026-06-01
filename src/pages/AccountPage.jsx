import { useMemo } from "react";

import {
  FiShoppingBag,
  FiHeart,
  FiMapPin,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import AccountLayout from "@/sections/AccountSection/AccountLayout";

import useUserStore from "@/store/useUserStore";
import useAuthStore from "@/store/useAuthStore";
import { useLanguage } from "@/context/LanguageContext";

/* ─── animation variant ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

function AccountPage() {
  const { t } = useLanguage();

  const {
    user,
    liveProfile,
    orders = [],
    wishlist = [],
    addresses = [],
  } = useUserStore();

  const accountStatus = useAuthStore((s) => s.accountStatus);

  const fullName = useMemo(() => {
    const first =
      liveProfile?.firstName?.trim() || user?.firstName?.trim() || "";
    const last = liveProfile?.lastName?.trim() || user?.lastName?.trim() || "";
    return `${first} ${last}`.trim() || t.myAccount;
  }, [liveProfile, user, t]);

  const initials = useMemo(() => {
    const first =
      liveProfile?.firstName?.[0]?.toUpperCase() ||
      user?.firstName?.[0]?.toUpperCase() ||
      "";
    const last =
      liveProfile?.lastName?.[0]?.toUpperCase() ||
      user?.lastName?.[0]?.toUpperCase() ||
      "";
    return `${first}${last}` || "U";
  }, [liveProfile, user]);

  const isCompleted = accountStatus === "completed";

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Container>
        {/* BREADCRUMB */}
        <Breadcrumb
          links={[{ label: t.home, href: "/" }, { label: t.myAccount }]}
        />

        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm "
        >
          <div className="relative px-6 py-8 lg:px-10 lg:py-10">
            <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-full bg-[#DB4444]/5 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between font-inter">
              {/* USER INFO */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.08}
                className="flex items-center gap-5"
              >
                <div className="relative shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DB4444] text-2xl font-semibold text-white shadow-md ">
                    {initials}
                  </div>
                  <div
                    className={`absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white ${isCompleted ? "bg-emerald-500" : "bg-yellow-400"}`}
                  >
                    {isCompleted ? (
                      <FiCheckCircle size={13} className="text-white" />
                    ) : (
                      <FiClock size={13} className="text-white" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#DB4444] ">
                      {t.welcomeBack}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${isCompleted ? "bg-emerald-100 text-emerald-700" : "bg-yellow-100 text-yellow-700"}`}
                    >
                      {isCompleted ? t.accountCompleted : t.accountActive}
                    </span>
                  </div>
                  <h1 className="mt-2 text-[28px] sm:text-[32px] font-semibold tracking-[-0.03em] text-gray-900">
                    {fullName}
                  </h1>
                  <p className="mt-3 max-w-[540px] text-[15px] leading-7 text-gray-500 font-poppins">
                    {t.accountDashboardDesc}
                  </p>
                </div>
              </motion.div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                <StatCard
                  icon={<FiShoppingBag size={18} />}
                  label={t.orders}
                  value={orders.length}
                  delay={0.18}
                />
                <StatCard
                  icon={<FiHeart size={18} />}
                  label={t.wishlist}
                  value={wishlist.length}
                  delay={0.24}
                />
                <StatCard
                  icon={<FiMapPin size={18} />}
                  label={t.addresses}
                  value={addresses.length}
                  delay={0.3}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ACCOUNT LAYOUT */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.32}
          className="mt-8"
        >
          <AccountLayout />
        </motion.section>
      </Container>
    </main>
  );
}

function StatCard({ icon, label, value, delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      whileHover={{ y: -4 }}
      className="
        group rounded-3xl border border-gray-100
        bg-white/70 p-5 backdrop-blur-sm
        transition-all duration-300
        hover:border-[#DB4444]/20
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DB4444]/10 text-[#DB4444] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#DB4444] group-hover:text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-[28px] sm:text-[30px] font-semibold tracking-[-0.03em] text-gray-900">
        {value}
      </h3>
      <p className="mt-1 text-sm font-medium text-gray-500">{label}</p>
    </motion.div>
  );
}

export default AccountPage;
