import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";

import CartTable from "@/sections/CartSection/CartTable";
import CartSummary from "@/sections/CartSection/CartSummary";
import CouponForm from "@/sections/CartSection/CouponForm";
import EmptyState from "@/components/common/EmptyState";

import useCartStore from "@/store/useCartStore";
import { useLanguage } from "@/context/LanguageContext";

/* ─── variant هادي ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

function CartPage() {
  const { t } = useLanguage();

  const cart = useCartStore((s) => s.cart);
  const cartCount = useCartStore((s) => s.getCartCount());
  const isEmpty = cart.length === 0;

  return (
    <motion.main
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0}
      className="pb-24"
    >
      <Container>
        <Breadcrumb
          links={[
            { label: t.home, href: "/" },
            { label: `${t.cart} (${cartCount})` },
          ]}
        />

        {isEmpty ? (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <EmptyState type="cart" />
          </motion.div>
        ) : (
          <div className="space-y-12">
            {/* TABLE */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.12}
            >
              <CartTable />
            </motion.div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-[1fr_420px]">
              {/* COUPON */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.22}
              >
                <CouponForm />
              </motion.div>

              {/* SUMMARY */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.32}
              >
                <CartSummary />
              </motion.div>
            </div>
          </div>
        )}
      </Container>
    </motion.main>
  );
}

export default CartPage;
