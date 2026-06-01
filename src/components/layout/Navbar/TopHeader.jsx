import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Container } from "@/components/common";

function TopHeader() {
  const { lang, setLang, t, isArabic } = useLanguage();

  return (
    <div className="bg-black text-white" dir={isArabic ? "rtl" : "ltr"}>
      <Container>
        <div
          className="
            min-h-[44px]
            flex items-center
            gap-3
          "
        >
          {/* ── PROMO MESSAGE ── */}
          {/*
            Mobile  : نص مختصر في المنتصف
            Tablet+ : نص كامل + Shop Now يسار (أو يمين في RTL)
          */}
          <div className="flex-1 flex items-center justify-center gap-2 min-w-0">
            {/* Mobile: نص مختصر */}
            <p className="md:hidden text-[11px] font-medium font-poppins text-center">
              {isArabic ? "خصم الصيف 50٪!" : "Summer Sale 50% OFF!"}
            </p>

            {/* Tablet+: نص كامل */}
            <div className="hidden md:flex items-center gap-2 min-w-0">
              <p className="text-xs lg:text-sm font-poppins truncate min-w-0">
                {t.sale}
              </p>
              <a
                href="#"
                className="
                  shrink-0
                  text-yellow-400 font-semibold text-xs lg:text-sm
                  underline underline-offset-2
                  hover:text-yellow-300 transition-colors
                  whitespace-nowrap
                "
              >
                {t.shopNow} →
              </a>
            </div>
          </div>

          {/* ── LANGUAGE DROPDOWN ── */}
          <Menu as="div" className="relative shrink-0">
            <MenuButton
              className="
                flex items-center gap-1.5
                px-2 py-1 rounded-lg
                text-xs sm:text-sm font-poppins
                hover:bg-white/10 transition-colors
                whitespace-nowrap
              "
            >
              {lang === "ar" ? "العربية" : "English"}
              <ChevronDown size={14} />
            </MenuButton>

            <MenuItems
              anchor={isArabic ? "bottom start" : "bottom end"}
              className="
                z-[999] mt-2
                min-w-[140px]
                rounded-xl bg-white text-black
                shadow-xl border border-gray-100
                p-1 font-poppins
              "
            >
              {[
                { value: "en", label: "English", align: "text-left" },
                { value: "ar", label: "العربية", align: "text-right" },
              ].map(({ value, label, align }) => (
                <MenuItem key={value}>
                  {({ focus }) => (
                    <button
                      onClick={() => setLang(value)}
                      className={`
                        w-full px-4 py-2 rounded-lg text-sm
                        transition-colors ${align}
                        ${focus ? "bg-gray-100" : ""}
                        ${lang === value ? "font-semibold text-[#DB4444]" : ""}
                      `}
                    >
                      {label}
                    </button>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </Container>
    </div>
  );
}

export default TopHeader;
