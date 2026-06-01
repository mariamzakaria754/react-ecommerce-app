import { toast } from "sonner";
import PrimaryButton from "@/components/common/PrimaryButton";
import useCheckoutStore from "@/store/useCheckoutStore";
import { useLanguage } from "@/context/LanguageContext";

function PlaceOrderButton() {
  const { t } = useLanguage();
  const placingOrder = useCheckoutStore((s) => s.placingOrder);
  const setPlacingOrder = useCheckoutStore((s) => s.setPlacingOrder);

  async function handlePlaceOrder() {
    try {
      setPlacingOrder(true);
      await new Promise((r) => setTimeout(r, 2000));
      toast.success(t.orderPlaced);
    } catch {
      toast.error(t.somethingWentWrong);
    } finally {
      setPlacingOrder(false);
    }
  }

  return (
    <PrimaryButton
      onClick={handlePlaceOrder}
      className="!h-12 sm:!h-14 !rounded-2xl !px-8 sm:!px-12 w-full sm:w-auto font-poppins"
    >
      {placingOrder ? t.processing : t.placeOrder}
    </PrimaryButton>
  );
}

export default PlaceOrderButton;
