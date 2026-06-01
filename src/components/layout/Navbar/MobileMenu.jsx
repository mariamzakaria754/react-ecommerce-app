import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Phone,
  Info,
  UserPlus,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { t, isArabic } = useLanguage();

  const links = [
    { label: t.home, path: "/", icon: Home },
    { label: t.contact, path: "/contact", icon: Phone },
    { label: t.about, path: "/about", icon: Info },
    { label: t.signUp, path: "/signup", icon: UserPlus },
  ];

  const userLinks = [
    { label: t.wishlist, path: "/wishlist", icon: Heart },
    { label: t.cart, path: "/cart", icon: ShoppingCart },
    { label: t.account, path: "/account", icon: User },
  ];

  const menuLinkStyle = ({ isActive }) => `
    flex items-center gap-3
    h-[52px] px-4 rounded-xl
    font-poppins font-medium text-base
    transition-all duration-200
    ${
      isActive
        ? "bg-[#DB4444] text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-50"
    }
  `;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* ── TRIGGER ── */}
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="
            xl:hidden
            w-10 h-10 rounded-full
            flex items-center justify-center
            hover:bg-gray-100 transition-colors duration-200
          "
        >
          <Menu size={24} />
        </button>
      </SheetTrigger>

      {/* ── DRAWER ── */}
      <SheetContent
        side={isArabic ? "right" : "left"}
        className="
          flex flex-col p-0 bg-white
          w-[85vw] sm:w-[340px] md:w-[380px]
        "
      >
        {/* HEADER */}
        <div className="h-[70px] flex items-center px-6 border-b shrink-0">
          <h2 className="text-2xl font-bold font-inter">{t.logo}</h2>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-5">
          {/* Main Links */}
          <nav className="space-y-1">
            {links.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={menuLinkStyle}
              >
                <Icon size={20} className="shrink-0" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="my-5 border-t border-gray-100" />

          {/* User Links */}
          <nav className="space-y-1">
            {userLinks.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={menuLinkStyle}
              >
                <Icon size={20} className="shrink-0" />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* FOOTER */}
        <div className="border-t px-6 py-4 shrink-0">
          <p className="text-xs text-gray-400 font-poppins">{t.copyright}</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
