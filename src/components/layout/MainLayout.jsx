import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Outlet, useLocation } from "react-router-dom";

function MainLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>

      <Navbar />

      <main key={pathname} className="animate-fade-in">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
