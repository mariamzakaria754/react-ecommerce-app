import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isAuthLoading = useAuthStore((state) => state.isAuthLoading); // 👈 مهم جدًا

  const location = useLocation();

  /* =========================================
     LOADING STATE (مهم لتجنب flicker)
  ========================================= */

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 border-4 border-gray-300 border-t-[#DB4444] rounded-full animate-spin" />
      </div>
    );
  }

  /* =========================================
     NOT LOGGED IN
  ========================================= */

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  /* =========================================
     ALLOW ACCESS
  ========================================= */

  return children;
}

export default ProtectedRoute;
