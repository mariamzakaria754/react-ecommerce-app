import { motion } from "framer-motion";

import { useAccountSections } from "@/data/accountTabs";
import useUserStore from "@/store/useUserStore";

function AccountSidebar() {
  const activeTab = useUserStore((state) => state.activeTab);
  const setActiveTab = useUserStore((state) => state.setActiveTab);
  const accountSections = useAccountSections();

  return (
    <aside className="w-full rounded-3xl border bg-white p-5 shadow-sm">
      {accountSections.map((section) => (
        <div key={section.title} className="mb-6 last:mb-0">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400 font-inter">
            {section.title}
          </h3>

          <div className="space-y-2 font-inter">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    relative flex w-full items-center gap-3
                    rounded-2xl px-4 py-3 text-left
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#DB4444] text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default AccountSidebar;
