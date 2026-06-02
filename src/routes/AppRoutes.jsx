import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AuthLayout from "@/sections/AuthSection/AuthLayout";
import PageLoader from "@/pages/PageLoader";

// ── Lazy imports ──────────────────────────────────────
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const CartPage = lazy(() => import("@/pages/CartPage"));
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const WishlistPage = lazy(() => import("@/pages/WishlistPage"));
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const ProductDetailsPage = lazy(() => import("@/pages/ProductDetailsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const SignupPage = lazy(() =>
  import("@/pages/Auth").then((m) => ({ default: m.SignupPage })),
);
const LoginPage = lazy(() =>
  import("@/pages/Auth").then((m) => ({ default: m.LoginPage })),
);

// ── Routes ────────────────────────────────────────────
function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />

          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
