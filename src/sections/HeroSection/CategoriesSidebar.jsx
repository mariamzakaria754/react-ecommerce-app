import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useLanguage } from "@/context/LanguageContext";

function CategoriesSidebar() {
  const { t, isArabic } = useLanguage();

  const categories = [
    { label: t.catWomenFashion, hasArrow: true },
    { label: t.catMenFashion, hasArrow: true },
    { label: t.catElectronics, hasArrow: false },
    { label: t.catHome, hasArrow: false },
    { label: t.catMedicine, hasArrow: false },
    { label: t.catSports, hasArrow: false },
    { label: t.catBaby, hasArrow: false },
    { label: t.catGroceries, hasArrow: false },
    { label: t.catHealth, hasArrow: false },
  ];

  const ArrowIcon = isArabic ? MdKeyboardArrowLeft : MdKeyboardArrowRight;

  return (
    <aside className="hidden xl:flex shrink-0">
      <ul
        className={`
          flex flex-col gap-5 pt-10
          w-[220px] 2xl:w-[250px]
          ${
            isArabic
              ? "border-l border-gray-200 pl-6" // RTL: البوردر على اليسار
              : "border-r border-gray-200 pr-6" // LTR: البوردر على اليمين
          }
        `}
      >
        {categories.map(({ label, hasArrow }) => (
          <li
            key={label}
            className="
              group flex items-center justify-between
              font-poppins text-[15px] font-normal text-black
              cursor-pointer transition-colors duration-200
              hover:text-[#DB4444]
            "
          >
            <span>{label}</span>
            {hasArrow && (
              <ArrowIcon
                size={22}
                className={`
                  shrink-0 transition-transform duration-200
                  ${
                    isArabic
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }
                `}
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoriesSidebar;
