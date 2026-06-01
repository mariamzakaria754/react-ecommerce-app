import PaymentMethods from "./PaymentMethods";
import CouponForm from "./CouponForm";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";

function PaymentSection() {
  return (
    <div
      className="
        bg-white
        rounded-2xl lg:rounded-3xl
        p-6 sm:p-8
        border border-gray-100
        shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        space-y-6 sm:space-y-8
        lg:sticky lg:top-8
        font-inter
      "
    >
      <OrderSummary />
      <PaymentMethods />
      <CouponForm />
      <PlaceOrderButton />
    </div>
  );
}

export default PaymentSection;
