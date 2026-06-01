import {
  MobileMenu,
  NavIcons,
  NavLinks,
  SearchBar,
} from "@/components/layout/Navbar";

import { Container } from "@/components/common";
import { useLanguage } from "@/context/LanguageContext";
import { useLocation } from "react-router-dom";

function NavbarMain() {
  const { t } = useLanguage();
  const location = useLocation();

  const authRoutes = ["/login", "/signup"];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/95 backdrop-blur-md
        border-b border-gray-200
        shadow-navbar
      "
    >
      <Container>
        {/* ── MAIN ROW ── */}
        <div className="h-[70px] flex items-center justify-between gap-4 md:gap-28">
          {/* ── LOGO ── */}
          <h1 className="shrink-0 font-inter font-bold text-3xl md:text-4xl whitespace-nowrap">
            {t.logo}
          </h1>

          <div className="hidden md:flex xl:hidden flex-1 justify-center">
            <div className="w-full max-w-[400px]">
              <SearchBar />
            </div>
          </div>

          <div className="hidden xl:flex flex-1 items-center justify-end gap-12">
            <NavLinks />
            <div className="w-full max-w-[420px] 2xl:max-w-[460px] 3xl:max-w-[480px] ml-10 2xl:ml-14">
              <SearchBar />
            </div>
          </div>

          {/* ── RIGHT: Icons + Hamburger ── */}
          <div className="flex items-center gap-3 shrink-0">
            {!isAuthPage && <NavIcons />}
            <div className="xl:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* ── MOBILE SEARCH (< 768) ── */}
        <div className="md:hidden pb-3">
          <SearchBar />
        </div>
      </Container>
    </header>
  );
}

export default NavbarMain;
