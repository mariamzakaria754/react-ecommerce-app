import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import WishlistHeader from "@/sections/WishlistSection/WishlistHeader";
import WishlistGrid from "@/sections/WishlistSection/WishlistGrid";
import WishlistRecommendations from "@/sections/WishlistSection/WishlistRecommendations";
import EmptyState from "@/components/common/EmptyState";
import useWishlistStore from "@/store/useWishlistStore";
import { useLanguage } from "@/context/LanguageContext";

function WishlistPage() {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const { t } = useLanguage();

  return (
    <main className="min-h-screen py-16 lg:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-20"
        >
          {wishlist.length ? (
            <>
              <WishlistHeader />
              <WishlistGrid />
              <WishlistRecommendations />
            </>
          ) : (
            <EmptyState
              title={t.wishlistEmpty}
              description={t.wishlistEmptyDesc}
            />
          )}
        </motion.div>
      </Container>
    </main>
  );
}

export default WishlistPage;
