import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import AboutPage from "@/pages/AboutPage";
import AccountPage from "@/pages/AccountPage";
import { SignupPage, LoginPage } from "@/pages/Auth";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import SearchPage from "@/pages/SearchPage";
import WishlistPage from "@/pages/WishlistPage";
import ProtectedRoute from "@/routes/ProtectedRoute";
import AuthLayout from "@/sections/AuthSection/AuthLayout";
import NotFoundPage from "@/pages/NotFoundPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* STATIC */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/product/:slug" element={<ProductDetailsPage />} />
        {/* <Route path="/category/:name" element={<CategoryPage />} /> */}
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
  );
}
export default AppRoutes;
