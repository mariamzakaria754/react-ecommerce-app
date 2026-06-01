import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

function NavLinks() {
  const { t } = useLanguage();
  const location = useLocation();

  const links = [
    { label: t.home, path: "/" },
    { label: t.contact, path: "/contact" },
    { label: t.about, path: "/about" },
    { label: t.signUp, path: "/signup" },
  ];

  return (
    <nav className="flex items-center gap-6 xl:gap-12">
      {links.map(({ label, path }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            key={path}
            to={path}
            className={`
              relative
              text-[15px] 2xl:text-[16px]
              font-normal
              transition-colors duration-200
font-poppins
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-black
              after:transition-all after:duration-200
              hover:after:w-full

              ${isActive ? "after:w-full text-black" : "text-black"}
            `}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavLinks;
