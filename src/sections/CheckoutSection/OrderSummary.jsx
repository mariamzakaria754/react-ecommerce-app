import { motion } from "framer-motion";
import useCartStore from "@/store/useCartStore";
import useCheckoutStore from "@/store/useCheckoutStore";
import { useLanguage } from "@/context/LanguageContext";

function OrderSummary() {
  const { t } = useLanguage();
  const cart = useCartStore((s) => s.cart);
  const discount = useCheckoutStore((s) => s.discount);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.pricing.current * item.quantity,
    0,
  );
  const shipping = subtotal > 500 ? 0 : 20;
  const total = subtotal + shipping - discount;

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  if (!cart.length) {
    return (
      <div className="space-y-5">
        <h3 className="text-xl sm:text-[24px] font-semibold tracking-tight text-black">
          {t.orderSummaryTitle}
        </h3>
        <div className="rounded-3xl border border-dashed border-gray-200 py-10 text-center text-gray-500 text-sm sm:text-base">
          {t.cartEmpty}
        </div>
      </div>
    );
  }

  return (
    <section className="space-y-6 sm:space-y-7">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-[24px] font-semibold tracking-tight text-black pb-5 font-inter">
          {t.orderSummaryTitle}
        </h3>
        <p className="text-sm text-gray-500 font-poppins">
          {t.orderSummaryDesc}
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {cart.map((item) => {
          const itemTotal = item.pricing.current * item.quantity;
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              className="
                flex items-center justify-between gap-4
                rounded-2xl border border-gray-100 bg-[#FAFAFA]
                px-4 py-3 sm:py-4
                transition-all duration-300
              "
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shrink-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-[14px] sm:text-[15px] text-black truncate">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">x{item.quantity}</p>
                </div>
              </div>
              <span className="font-semibold text-[14px] sm:text-[15px] text-black shrink-0">
                {formatPrice(itemTotal)}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="border-t border-gray-200 pt-5 sm:pt-6 space-y-3 sm:space-y-4">
        <SummaryRow label={t.subtotal} value={formatPrice(subtotal)} />
        <SummaryRow
          label={t.shipping}
          value={shipping === 0 ? t.free : formatPrice(shipping)}
        />
        {discount > 0 && (
          <SummaryRow
            label={t.discount}
            value={`- ${formatPrice(discount)}`}
            red
          />
        )}
        <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-base sm:text-[18px] font-semibold text-black">
            {t.total}
          </span>
          <span className="text-xl sm:text-[22px] font-bold text-[#DB4444]">
            {formatPrice(total)}
          </span>
        </div>
      </div>
    </section>
  );
}

function SummaryRow({ label, value, red = false }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[14px] sm:text-[15px] text-gray-600">{label}</span>
      <span
        className={`text-[14px] sm:text-[15px] font-medium ${red ? "text-[#DB4444]" : "text-black"}`}
      >
        {value}
      </span>
    </div>
  );
}

export default OrderSummary;
