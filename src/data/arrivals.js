import ps5 from "@/assets/images/ps5.png";
import speakers from "@/assets/images/speakers.png";
import perfume from "@/assets/images/perfume.png";

const arrivals = [
  {
    _id: "arr_01",
    slug: "playstation-5",
    title: "PlayStation 5",
    titleAr: "بلايستيشن 5",
    subtitle: "Next Generation Gaming",
    subtitleAr: "جيل الألعاب القادم",
    description: "Black and White version of the PS5 coming out on sale.",
    descriptionAr: "إصدار أبيض وأسود من PS5 معروض للبيع.",
    image: ps5,
    category: "Gaming",
    badge: "New",
    badgeAr: "جديد",
    cta: {
      text: "Shop Now",
      textAr: "تسوق الآن",
      url: "/products/playstation-5",
    },
    layout: "large",
    featured: true,
  },
  {
    _id: "arr_02",
    slug: "womens-collections",
    title: "Women's Collections",
    titleAr: "مجموعات نسائية",
    subtitle: "Trending Fashion",
    subtitleAr: "أحدث صيحات الموضة",
    description: "Featured woman collections that give you another vibe.",
    descriptionAr: "مجموعات نسائية مميزة تمنحك إحساساً مختلفاً.",
    image: null,
    category: "Fashion",
    badge: "Collection",
    badgeAr: "مجموعة",
    cta: { text: "Shop Now", textAr: "تسوق الآن", url: "/collections/women" },
    layout: "medium",
    featured: true,
  },
  {
    _id: "arr_03",
    slug: "amazon-speakers",
    title: "Speakers",
    titleAr: "سماعات",
    subtitle: "Smart Sound",
    subtitleAr: "صوت ذكي",
    description: "Amazon wireless speakers",
    descriptionAr: "سماعات أمازون اللاسلكية",
    image: speakers,
    category: "Audio",
    badge: "Hot",
    badgeAr: "رائج",
    cta: { text: "Shop Now", textAr: "تسوق الآن", url: "/products/speakers" },
    layout: "small",
    featured: false,
  },
  {
    _id: "arr_04",
    slug: "gucci-perfume",
    title: "Perfume",
    titleAr: "عطر",
    subtitle: "Luxury Fragrance",
    subtitleAr: "عطر فاخر",
    description: "GUCCI INTENSE OUD EDP",
    descriptionAr: "جوتشي إنتنس عود",
    image: perfume,
    category: "Beauty",
    badge: "Premium",
    badgeAr: "مميز",
    cta: { text: "Shop Now", textAr: "تسوق الآن", url: "/products/perfume" },
    layout: "small",
    featured: false,
  },
];

export const getArrivalProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, total: arrivals.length, data: arrivals });
    }, 700);
  });
};

export default arrivals;
