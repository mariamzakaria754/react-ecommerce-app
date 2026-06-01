// الداتا بقت مجرد keys — الترجمة في LanguageContext
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

export const contactInfo = [
  {
    id: 1,
    icon: BsTelephone,
    titleKey: "callTitle",
    descKey: "callDesc",
    detailKeys: ["callDetail"],
  },
  {
    id: 2,
    icon: FiMail,
    titleKey: "mailTitle",
    descKey: "mailDesc",
    detailKeys: ["mailDetail1", "mailDetail2"],
  },
];
