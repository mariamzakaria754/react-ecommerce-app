import phones from "@/assets/images/phone.svg";
import computers from "@/assets/images/Computer.svg";
import smartwatch from "@/assets/images/smartWatch.svg";
import camera from "@/assets/images/camera.svg";
import headphones from "@/assets/images/headphone.svg";
import gaming from "@/assets/images/gamepad.svg";

/* DATABASE */

export const categories = [
  {
    id: "cat_phones",
    title: "Phones",
    titleAr: "الهواتف",
    slug: "phones",
    image: phones,
  },
  {
    id: "cat_computers",
    title: "Computers",
    titleAr: "الكمبيوتر",
    slug: "computers",
    image: computers,
  },
  {
    id: "cat_smartwatch",
    title: "Smart Watch",
    titleAr: "الساعة الذكية",
    slug: "smartwatch",
    image: smartwatch,
  },
  {
    id: "cat_camera",
    title: "Camera",
    titleAr: "الكاميرا",
    slug: "camera",
    image: camera,
  },
  {
    id: "cat_headphones",
    title: "Headphones",
    titleAr: "سماعات الرأس",
    slug: "headphones",
    image: headphones,
  },
  {
    id: "cat_gaming",
    title: "Gaming",
    titleAr: "الألعاب",
    slug: "gaming",
    image: gaming,
  },
];

/* FAKE API */
export const getCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: categories,
      });
    }, 500);
  });
};
