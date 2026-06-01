import { motion, AnimatePresence } from "framer-motion";

import useUserStore from "@/store/useUserStore";
import { useLanguage } from "@/context/LanguageContext";

import AccountSidebar from "./AccountSidebar";
import ProfileTab from "./ProfileTab";
import OrdersTab from "./OrdersTab";
import WishlistTab from "./WishlistTab";
import AddressesTab from "./AddressesTab";

const TAB_COMPONENTS = {
  profile: <ProfileTab />,
  orders: <OrdersTab />,
  wishlist: <WishlistTab />,
  addresses: <AddressesTab />,
};

function AccountLayout() {
  const { isArabic } = useLanguage();
  const activeTab = useUserStore((state) => state.activeTab);

  // Sidebar slides in from the correct side
  const sidebarX = isArabic ? 25 : -25;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative bg-white
        rounded-[14px]
        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
        overflow-hidden
      "
    >
      {/* TOP ACCENT */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#DB4444] via-[#ff6b6b] to-[#DB4444]" />

      <div className="grid gap-8 lg:grid-cols-[280px_1fr] p-6 md:p-10">
        {/* SIDEBAR */}
        <motion.div
          initial={{ opacity: 0, x: sidebarX }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          <AccountSidebar />
        </motion.div>

        {/* CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {TAB_COMPONENTS[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default AccountLayout;
