import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

function CountdownTimer() {
  const { t } = useLanguage();

  // ── useRef عشان الـ targetDate متتحسبش من جديد كل render ──
  const targetDate = useRef(new Date().getTime() + 3 * 24 * 60 * 60 * 1000);

  const calculateTimeLeft = () => {
    const difference = targetDate.current - new Date().getTime();
    if (difference <= 0)
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeData = [
    { label: t.timerDays, value: timeLeft.days },
    { label: t.timerHours, value: timeLeft.hours },
    { label: t.timerMinutes, value: timeLeft.minutes },
    { label: t.timerSeconds, value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-end gap-4 md:gap-5 text-black">
      {timeData.map(({ label, value }, index) => (
        <div key={label} className="flex items-end gap-4 md:gap-5">
          <div>
            <p className="text-xs font-medium mb-2 font-poppins">{label}</p>
            <h3 className="text-3xl md:text-4xl font-bold tracking-wider font-inter">
              {value}
            </h3>
          </div>
          {index !== timeData.length - 1 && (
            <span className="text-[#DB4444] text-2xl mb-2">⠨</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;
