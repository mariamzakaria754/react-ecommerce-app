import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function PromoTimer({ endDate }) {
  const [time, setTime] = useState(null);
  const { t } = useLanguage();

  const calculate = () => {
    const diff = new Date(endDate) - new Date();
    if (diff <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  useEffect(() => {
    setTime(calculate());
    const interval = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(interval);
  }, [endDate]);

  if (!time) return null;

  const items = [
    { label: t.promoDays, value: time.days },
    { label: t.promoHours, value: time.hours },
    { label: t.promoMinutes, value: time.minutes },
    { label: t.promoSeconds, value: time.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap justify-center lg:justify-start rtl:lg:justify-end">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            w-14 h-14
            sm:w-16 sm:h-16
            lg:w-[74px] lg:h-[74px]
            rounded-full
            bg-white
            flex flex-col
            items-center justify-center
            shadow-lg
          "
        >
          <h3 className="font-inter font-semibold text-sm sm:text-base lg:text-[20px] leading-none">
            {item.value}
          </h3>
          <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-poppins mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PromoTimer;
