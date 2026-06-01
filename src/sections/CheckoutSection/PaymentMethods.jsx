import { motion } from "framer-motion";
import { paymentMethods } from "@/data/paymentMethods";
import useCheckoutStore from "@/store/useCheckoutStore";
import { useLanguage } from "@/context/LanguageContext";

function PaymentMethods() {
  const { t } = useLanguage();
  const paymentMethod = useCheckoutStore((s) => s.paymentMethod);
  const setPaymentMethod = useCheckoutStore((s) => s.setPaymentMethod);

  return (
    <section className="space-y-5 sm:space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-[22px] font-semibold tracking-tight text-black  pb-3 font-inter">
          {t.paymentMethod}
        </h3>
        <p className="text-sm text-gray-500 font-poppins">
          {t.paymentMethodDesc}
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {paymentMethods.map((method) => {
          const active = paymentMethod === method.id;
          return (
            <motion.label
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              key={method.id}
              className={`
                relative flex items-center justify-between gap-4 sm:gap-5
                p-4 sm:p-5 rounded-2xl border cursor-pointer
                transition-all duration-300
                font-inter
                ${
                  active
                    ? "border-[#DB4444] bg-[#FFF6F6] shadow-[0_10px_25px_rgba(219,68,68,0.08)]"
                    : "border-gray-200 hover:border-[#DB4444] hover:bg-white"
                }
              `}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${active ? "border-[#DB4444]" : "border-gray-300"}`}
                >
                  {active && (
                    <div className="w-2.5 h-2.5 rounded-full bg-[#DB4444]" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-[14px] sm:text-[15px] text-black font-inter">
                    {t[method.titleKey]}
                  </h4>
                  <p className="text-sm text-gray-500 font-poppins">
                    {t[method.descKey]}
                  </p>
                </div>
              </div>

              {method.icons.length > 0 && (
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-end">
                  {method.icons.map((icon, index) => (
                    <div
                      key={index}
                      className="w-10 sm:w-11 h-8 sm:h-9 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm"
                    >
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        className="h-3.5 sm:h-4 object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}

              <input
                type="radio"
                checked={active}
                onChange={() => setPaymentMethod(method.id)}
                className="hidden"
              />
            </motion.label>
          );
        })}
      </div>
    </section>
  );
}

export default PaymentMethods;
