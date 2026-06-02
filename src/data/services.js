import deliveryIcon from "@/assets/images/icon-delivery.svg";
import customerServiceIcon from "@/assets/images/service.svg";
import secureIcon from "@/assets/images/icon-secure.svg";

const servicesData = [
  {
    id: 1,
    titleKey: "service1Title",
    descKey: "service1Desc",
    icon: deliveryIcon,
  },
  {
    id: 2,
    titleKey: "service2Title",
    descKey: "service2Desc",
    icon: customerServiceIcon,
  },
  {
    id: 3,
    titleKey: "service3Title",
    descKey: "service3Desc",
    icon: secureIcon,
  },
];

export const getServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, data: servicesData });
    }, 500);
  });
};
