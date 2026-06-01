import deliveryIcon from "@/assets/images/icon-delivery.svg";
import returnIcon from "@/assets/images/return.svg";
import { useLanguage } from "@/context/LanguageContext";

function DeliveryInfo() {
  const { t } = useLanguage();

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="flex items-start gap-4 p-4 sm:p-5 border-b">
        <img
          src={deliveryIcon}
          alt="delivery"
          className="w-7 h-7 sm:w-8 sm:h-8 mt-0.5 shrink-0"
        />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">
            {t.freeDelivery}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{t.deliveryDesc}</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-4 sm:p-5">
        <img
          src={returnIcon}
          alt="return"
          className="w-7 h-7 sm:w-8 sm:h-8 mt-0.5 shrink-0"
        />
        <div>
          <h4 className="font-semibold text-sm sm:text-base">
            {t.returnPolicy}
          </h4>
          <p className="text-xs text-gray-500 mt-1">{t.returnDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfo;
