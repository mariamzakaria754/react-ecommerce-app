/* =========================================
   PRODUCTS DATABASE
========================================= */

/* GAMING */
import gamepadImage from "@/assets/images/gamepad.png";
import controllerImage from "@/assets/images/main-controller.png";
import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import keyboardImage from "@/assets/images/keyboard.png";
import monitorImage from "@/assets/images/monitor.png";
import coolerImage from "@/assets/images/cooler.png";
import perfumeImage from "@/assets/images/perfume.png";
/* FASHION */
import coatImage from "@/assets/images/coat.png";
import bagImage from "@/assets/images/bag.png";
import jacketImage from "@/assets/images/jacket.png";
/* ELECTRONICS */
import laptopImage from "@/assets/images/laptop.png";
import cameraImage from "@/assets/images/cameraa.png";
/* HOME */
import chairImage from "@/assets/images/chair.png";
import shelfImage from "@/assets/images/bookshelf.png";
/* SPORTS */
import shoesImage from "@/assets/images/shoes.png";
/* PET */
import dogFoodImage from "@/assets/images/dogfood.png";
/* KIDS */
import carImage from "@/assets/images/car.png";

/*
  ─── HOW TO USE TRANSLATIONS ────────────────────────────────────
  كل product عنده:
    title    / title_ar
    shortTitle / shortTitle_ar
    description / description_ar
    category.name / category.name_ar

  في الـ components استخدمي:
    const { isArabic } = useLanguage();
    const name = isArabic ? product.title_ar : product.title;
  ─────────────────────────────────────────────────────────────────
*/

export const products = [
  {
    id: "prod_001",
    slug: "havit-hv-g92-gamepad",

    title: "HAVIT HV-G92 Gamepad",
    title_ar: "جيم باد هافيت HV-G92",

    shortTitle: "Wireless Gaming Controller",
    shortTitle_ar: "يد تحكم لاسلكية للألعاب",

    description:
      "Experience responsive controls and ergonomic comfort with the HAVIT HV-G92 gaming controller.",
    description_ar:
      "استمتع بتحكم سريع الاستجابة وراحة مريحة مع يد التحكم هافيت HV-G92.",

    longDescription:
      "HAVIT HV-G92 delivers smooth gameplay, ergonomic handling, ultra responsive triggers, and wireless compatibility for all modern gaming platforms.",
    longDescription_ar:
      "توفر هافيت HV-G92 تجربة لعب سلسة، مع مقبض مريح وزناد سريع الاستجابة، وتوافق لاسلكي مع جميع منصات الألعاب الحديثة.",

    category: { id: "cat_gaming", name: "Gaming", name_ar: "ألعاب" },
    brand: { id: "brand_havit", name: "HAVIT" },

    pricing: {
      current: 120,
      old: 160,
      currency: "USD",
      discountPercentage: 40,
    },
    ratings: { average: 4.8, totalReviews: 88 },
    stock: { inStock: true, quantity: 120 },
    sections: ["flash-sales", "best-selling", "explore", "related-products"],

    thumbnail: gamepadImage,
    gallery: [gamepadImage, controllerImage, gallery1, gallery2, gallery3],

    colors: [
      { id: "blue", name: "Blue", name_ar: "أزرق", value: "#A0BCE0" },
      { id: "red", name: "Red", name_ar: "أحمر", value: "#E07575" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["gaming", "controller", "wireless"],
    relatedProducts: ["prod_002", "prod_003", "prod_004"],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [
      {
        id: 1,
        user: "Ahmed",
        rating: 5,
        comment: "Amazing controller and very responsive.",
        date: "2026-05-01",
      },
      {
        id: 2,
        user: "Sara",
        rating: 4,
        comment: "Battery life is very good.",
        date: "2026-05-05",
      },
    ],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_002",
    slug: "ak-900-wired-keyboard",

    title: "AK-900 Wired Keyboard",
    title_ar: "كيبورد AK-900 سلكي",

    shortTitle: "Mechanical RGB Keyboard",
    shortTitle_ar: "كيبورد ميكانيكي RGB",

    description:
      "Mechanical gaming keyboard with RGB lighting and smooth tactile switches.",
    description_ar: "كيبورد ميكانيكي للألعاب مع إضاءة RGB ومفاتيح لمسية سلسة.",

    longDescription:
      "AK-900 mechanical keyboard provides fast response keys, premium tactile feedback, and customizable RGB lighting for professional gaming setups.",
    longDescription_ar:
      "يوفر كيبورد AK-900 الميكانيكي مفاتيح سريعة الاستجابة، وإضاءة RGB قابلة للتخصيص لإعدادات الألعاب الاحترافية.",

    category: { id: "cat_keyboard", name: "Keyboard", name_ar: "كيبورد" },
    brand: { id: "brand_ak900", name: "AK900" },

    pricing: {
      current: 960,
      old: 1160,
      currency: "USD",
      discountPercentage: 35,
    },
    ratings: { average: 4.5, totalReviews: 75 },
    stock: { inStock: true, quantity: 80 },
    sections: ["flash-sales", "best-selling", "related-products"],

    thumbnail: keyboardImage,
    gallery: [keyboardImage, coolerImage],

    colors: [
      { id: "black", name: "Black", name_ar: "أسود", value: "#000000" },
      { id: "white", name: "White", name_ar: "أبيض", value: "#FFFFFF" },
    ],
    sizes: ["M", "L"],
    tags: ["keyboard", "gaming", "rgb"],
    relatedProducts: ["prod_001"],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [
      {
        id: 1,
        user: "Mohamed",
        rating: 5,
        comment: "RGB effects are stunning.",
        date: "2026-05-02",
      },
    ],
    isNew: true,
    isFeatured: true,
  },

  {
    id: "prod_003",
    slug: "ips-lcd-gaming-monitor",

    title: "IPS LCD Gaming Monitor",
    title_ar: "شاشة ألعاب IPS LCD",

    shortTitle: "24 Inch Gaming Monitor",
    shortTitle_ar: "شاشة ألعاب 24 بوصة",

    description: "24-inch IPS gaming monitor with ultra smooth visuals.",
    description_ar: "شاشة ألعاب IPS مقاس 24 بوصة بصور فائقة السلاسة.",

    longDescription:
      "Ultra smooth refresh rate monitor with vivid IPS colors and low latency built for competitive gaming.",
    longDescription_ar:
      "شاشة بمعدل تحديث فائق السلاسة وألوان IPS زاهية وزمن استجابة منخفض مصممة للألعاب التنافسية.",

    category: { id: "cat_monitor", name: "Monitor", name_ar: "شاشة" },
    brand: { id: "brand_lg", name: "LG" },

    pricing: {
      current: 370,
      old: 400,
      currency: "USD",
      discountPercentage: 30,
    },
    ratings: { average: 5, totalReviews: 99 },
    stock: { inStock: true, quantity: 30 },
    sections: ["flash-sales", "best-selling", "explore"],

    thumbnail: monitorImage,
    gallery: [monitorImage],
    colors: [],
    sizes: ["24-inch"],
    tags: ["monitor", "gaming", "display"],
    relatedProducts: ["prod_001"],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_004",
    slug: "s-series-comfort-chair",

    title: "S-Series Comfort Chair",
    title_ar: "كرسي كومفورت S-Series",

    shortTitle: "Gaming Chair",
    shortTitle_ar: "كرسي ألعاب",

    description: "Luxury ergonomic chair for office and gaming setup.",
    description_ar: "كرسي فاخر مريح للمكتب وإعداد الألعاب.",

    longDescription:
      "Premium ergonomic gaming chair designed for long sessions with superior back and neck support.",
    longDescription_ar:
      "كرسي ألعاب مريح فاخر مصمم للجلسات الطويلة مع دعم ممتاز للظهر والرقبة.",

    category: { id: "cat_furniture", name: "Furniture", name_ar: "أثاث" },
    brand: { id: "brand_sseries", name: "S-Series" },

    pricing: {
      current: 375,
      old: 400,
      currency: "USD",
      discountPercentage: 25,
    },
    ratings: { average: 4.6, totalReviews: 99 },
    stock: { inStock: true, quantity: 20 },
    sections: ["flash-sales", "explore"],

    thumbnail: chairImage,
    gallery: [chairImage],
    colors: [{ id: "gray", name: "Gray", name_ar: "رمادي", value: "#5C5C5C" }],
    sizes: ["L"],
    tags: ["chair", "gaming", "office"],
    relatedProducts: ["prod_001"],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: false,
    isFeatured: false,
  },

  {
    id: "prod_005",
    slug: "north-coat",

    title: "The North Coat",
    title_ar: "معطف نورث",

    shortTitle: "Winter Fashion Coat",
    shortTitle_ar: "معطف شتوي عصري",

    description: "Premium winter coat with modern fashion style.",
    description_ar: "معطف شتوي فاخر بتصميم عصري أنيق.",

    longDescription:
      "Elegant winter coat crafted with premium materials for maximum warmth and modern fashion styling.",
    longDescription_ar:
      "معطف شتوي أنيق مصنوع من مواد فاخرة لأقصى درجات الدفء والأناقة.",

    category: { id: "cat_fashion", name: "Fashion", name_ar: "موضة" },
    brand: { id: "brand_north", name: "North" },

    pricing: {
      current: 260,
      old: 360,
      currency: "USD",
      discountPercentage: 20,
    },
    ratings: { average: 5, totalReviews: 65 },
    stock: { inStock: true, quantity: 55 },
    sections: ["best-selling", "explore"],

    thumbnail: coatImage,
    gallery: [coatImage],
    colors: [{ id: "brown", name: "Brown", name_ar: "بني", value: "#6B4F3B" }],
    sizes: ["S", "M", "L"],
    tags: ["fashion", "coat", "winter"],
    relatedProducts: ["prod_014"],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_006",
    slug: "gucci-duffle-bag",

    title: "Gucci Duffle Bag",
    title_ar: "حقيبة غوتشي دافل",

    shortTitle: "Luxury Duffle Bag",
    shortTitle_ar: "حقيبة سفر فاخرة",

    description: "Elegant luxury bag for premium lifestyle.",
    description_ar: "حقيبة فاخرة أنيقة لأسلوب حياة راقي.",

    longDescription:
      "Premium Gucci duffle bag with luxury leather finishing and spacious storage for travel and fashion lovers.",
    longDescription_ar:
      "حقيبة غوتشي دافل الفاخرة بتشطيب جلدي فاخر ومساحة تخزين واسعة لمحبي السفر والأناقة.",

    category: { id: "cat_fashion", name: "Fashion", name_ar: "موضة" },
    brand: { id: "brand_gucci", name: "Gucci" },

    pricing: {
      current: 960,
      old: 1160,
      currency: "USD",
      discountPercentage: 15,
    },
    ratings: { average: 4, totalReviews: 65 },
    stock: { inStock: true, quantity: 20 },
    sections: ["best-selling"],

    thumbnail: bagImage,
    gallery: [bagImage],
    colors: [{ id: "black", name: "Black", name_ar: "أسود", value: "#000000" }],
    sizes: [],
    tags: ["bag", "fashion", "luxury"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 7 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_007",
    slug: "rgb-liquid-cpu-cooler",

    title: "RGB Liquid CPU Cooler",
    title_ar: "مبرد معالج سائل RGB",

    shortTitle: "CPU Cooler",
    shortTitle_ar: "مبرد معالج",

    description: "Advanced RGB cooling system for high performance PCs.",
    description_ar: "نظام تبريد RGB متقدم لأجهزة الكمبيوتر عالية الأداء.",

    longDescription:
      "High performance liquid CPU cooler with customizable RGB lighting and ultra silent cooling technology.",
    longDescription_ar:
      "مبرد معالج سائل عالي الأداء مع إضاءة RGB قابلة للتخصيص وتقنية تبريد صامتة للغاية.",

    category: { id: "cat_computers", name: "Computer", name_ar: "كمبيوتر" },
    brand: { id: "brand_coolermaster", name: "Cooler Master" },

    pricing: { current: 160, old: 170, currency: "USD", discountPercentage: 5 },
    ratings: { average: 5, totalReviews: 65 },
    stock: { inStock: true, quantity: 44 },
    sections: ["best-selling"],

    thumbnail: coolerImage,
    gallery: [coolerImage],
    colors: [{ id: "rgb", name: "RGB", name_ar: "RGB", value: "#DB4444" }],
    sizes: [],
    tags: ["cooler", "pc", "rgb"],
    relatedProducts: ["prod_010"],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: false,
    isFeatured: false,
  },

  {
    id: "prod_008",
    slug: "jr-zoom-soccer-cleats",

    title: "Jr. Zoom Soccer Cleats",
    title_ar: "حذاء كرة قدم جونيور زووم",

    shortTitle: "Football Shoes",
    shortTitle_ar: "حذاء كرة قدم",

    description: "Lightweight soccer cleats built for speed and comfort.",
    description_ar: "حذاء كرة قدم خفيف الوزن مصمم للسرعة والراحة.",

    longDescription:
      "Professional football cleats designed for agility, speed, and traction on all field types.",
    longDescription_ar:
      "حذاء كرة قدم احترافي مصمم للرشاقة والسرعة والثبات على جميع أنواع الملاعب.",

    category: { id: "cat_sports", name: "Sports", name_ar: "رياضة" },
    brand: { id: "brand_nike", name: "Nike" },

    pricing: {
      current: 1160,
      old: 1400,
      currency: "USD",
      discountPercentage: 15,
    },
    ratings: { average: 5, totalReviews: 35 },
    stock: { inStock: true, quantity: 32 },
    sections: ["explore", "best-selling"],

    thumbnail: shoesImage,
    gallery: [shoesImage],
    colors: [
      { id: "yellow", name: "Yellow", name_ar: "أصفر", value: "#EEFF61" },
      { id: "red", name: "Red", name_ar: "أحمر", value: "#DB4444" },
    ],
    sizes: ["40", "41", "42", "43"],
    tags: ["sports", "football", "shoes"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_009",
    slug: "kids-electric-car",

    title: "Kids Electric Car",
    title_ar: "سيارة كهربائية للأطفال",

    shortTitle: "Electric Toy Car",
    shortTitle_ar: "سيارة لعبة كهربائية",

    description: "Luxury electric toy car for kids.",
    description_ar: "سيارة لعبة كهربائية فاخرة للأطفال.",

    longDescription:
      "Battery-powered kids car with realistic lights, sound system, and remote control.",
    longDescription_ar:
      "سيارة أطفال تعمل بالبطارية مع إضاءة واقعية ونظام صوت وتحكم عن بُعد.",

    category: { id: "cat_kids", name: "Kids", name_ar: "أطفال" },
    brand: { id: "brand_kidszone", name: "Kids Zone" },

    pricing: {
      current: 960,
      old: 1100,
      currency: "USD",
      discountPercentage: 12,
    },
    ratings: { average: 3.5, totalReviews: 65 },
    stock: { inStock: true, quantity: 12 },
    sections: ["explore"],

    thumbnail: carImage,
    gallery: [carImage],
    colors: [{ id: "red", name: "Red", name_ar: "أحمر", value: "#FB1314" }],
    sizes: [],
    tags: ["kids", "toy", "car"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: true,
    isFeatured: false,
  },

  {
    id: "prod_010",
    slug: "luxury-perfume",

    title: "Luxury Perfume",
    title_ar: "عطر فاخر",

    shortTitle: "Premium Perfume",
    shortTitle_ar: "عطر راقي",

    description: "Elegant fragrance for daily use.",
    description_ar: "عطر أنيق للاستخدام اليومي.",

    longDescription:
      "Luxury perfume with long-lasting scent and premium fragrance blend.",
    longDescription_ar: "عطر فاخر برائحة تدوم طويلاً وتركيبة عطرية راقية.",

    category: { id: "cat_beauty", name: "Beauty", name_ar: "جمال" },
    brand: { id: "brand_lux", name: "Luxury Scents" },

    pricing: {
      current: 250,
      old: 300,
      currency: "USD",
      discountPercentage: 20,
    },
    ratings: { average: 4.2, totalReviews: 40 },
    stock: { inStock: true, quantity: 50 },
    sections: ["explore"],

    thumbnail: perfumeImage,
    gallery: [perfumeImage],
    colors: [],
    sizes: [],
    tags: ["perfume", "beauty"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 7 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_011",
    slug: "premium-dog-food",

    title: "Premium Dog Food",
    title_ar: "طعام كلاب فاخر",

    shortTitle: "Dog Food",
    shortTitle_ar: "طعام كلاب",

    description: "Healthy food for dogs.",
    description_ar: "غذاء صحي للكلاب.",

    longDescription:
      "Nutritious dry food formulated for dogs with balanced vitamins and minerals.",
    longDescription_ar: "طعام جاف مغذٍ مُصاغ للكلاب بفيتامينات ومعادن متوازنة.",

    category: { id: "cat_pets", name: "Pets", name_ar: "حيوانات أليفة" },
    brand: { id: "brand_paw", name: "PawLife" },

    pricing: {
      current: 100,
      old: 120,
      currency: "USD",
      discountPercentage: 10,
    },
    ratings: { average: 3.8, totalReviews: 35 },
    stock: { inStock: true, quantity: 70 },
    sections: ["explore"],

    thumbnail: dogFoodImage,
    gallery: [dogFoodImage],
    colors: [],
    sizes: [],
    tags: ["pets", "dog", "food"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [],
    isNew: false,
    isFeatured: false,
  },

  {
    id: "prod_012",
    slug: "modern-bookshelf",

    title: "Modern Bookshelf",
    title_ar: "رف كتب عصري",

    shortTitle: "Bookshelf",
    shortTitle_ar: "رف كتب",

    description: "Minimal modern bookshelf.",
    description_ar: "رف كتب عصري بتصميم مبسط.",

    longDescription:
      "Stylish wooden bookshelf designed for modern home decoration.",
    longDescription_ar: "رف كتب خشبي أنيق مصمم للديكور المنزلي العصري.",

    category: { id: "cat_furniture", name: "Furniture", name_ar: "أثاث" },
    brand: { id: "brand_home", name: "HomeStyle" },

    pricing: { current: 360, old: 0, currency: "USD", discountPercentage: 0 },
    ratings: { average: 4.9, totalReviews: 65 },
    stock: { inStock: true, quantity: 14 },
    sections: ["best-selling", "explore"],

    thumbnail: shelfImage,
    gallery: [shelfImage],
    colors: [],
    sizes: [],
    tags: ["home", "furniture"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_013",
    slug: "quilted-satin-jacket",

    title: "Quilted Satin Jacket",
    title_ar: "جاكيت ساتان مبطن",

    shortTitle: "Jacket",
    shortTitle_ar: "جاكيت",

    description: "Stylish satin jacket.",
    description_ar: "جاكيت ساتان أنيق.",

    longDescription:
      "Modern quilted jacket with premium design and comfortable fit.",
    longDescription_ar: "جاكيت مبطن عصري بتصميم فاخر ومقاس مريح.",

    category: { id: "cat_fashion", name: "Fashion", name_ar: "موضة" },
    brand: { id: "brand_jacketstudio", name: "Jacket Studio" },

    pricing: { current: 660, old: 720, currency: "USD", discountPercentage: 8 },
    ratings: { average: 4.5, totalReviews: 55 },
    stock: { inStock: true, quantity: 40 },
    sections: ["explore"],

    thumbnail: jacketImage,
    gallery: [jacketImage],
    colors: [
      { id: "green", name: "Green", name_ar: "أخضر", value: "#184A48" },
      { id: "red", name: "Red", name_ar: "أحمر", value: "#DB4444" },
    ],
    sizes: ["S", "M", "L", "XL"],
    tags: ["fashion", "jacket"],
    relatedProducts: [],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },

  {
    id: "prod_014",
    slug: "asus-gaming-laptop",

    title: "ASUS Gaming Laptop",
    title_ar: "لابتوب أسوس للألعاب",

    shortTitle: "Gaming Laptop",
    shortTitle_ar: "لابتوب ألعاب",

    description: "High performance gaming laptop.",
    description_ar: "لابتوب ألعاب عالي الأداء.",

    longDescription:
      "Powerful ASUS gaming laptop designed for high FPS gaming, multitasking, and heavy workloads with smooth performance.",
    longDescription_ar:
      "لابتوب أسوس قوي للألعاب مصمم لألعاب FPS عالية وتعدد المهام وأعباء العمل الثقيلة بأداء سلس.",

    category: { id: "cat_computers", name: "Computers", name_ar: "كمبيوترات" },
    brand: { id: "brand_asus", name: "ASUS" },

    pricing: {
      current: 700,
      old: 850,
      currency: "USD",
      discountPercentage: 18,
    },
    ratings: { average: 5, totalReviews: 325 },
    stock: { inStock: true, quantity: 25 },
    sections: ["explore", "best-selling"],

    thumbnail: laptopImage,
    gallery: [laptopImage],
    colors: [
      { id: "black", name: "Black", name_ar: "أسود", value: "#000000" },
      { id: "gray", name: "Gray", name_ar: "رمادي", value: "#666666" },
    ],
    sizes: [],
    tags: ["laptop", "gaming", "computer"],
    relatedProducts: ["prod_007"],
    shipping: { freeDelivery: true, returnDays: 30 },
    reviewsData: [],
    isNew: true,
    isFeatured: true,
  },

  {
    id: "prod_015",
    slug: "canon-dslr-camera",

    title: "Canon DSLR Camera",
    title_ar: "كاميرا كانون DSLR",

    shortTitle: "DSLR Camera",
    shortTitle_ar: "كاميرا DSLR",

    description: "Professional DSLR camera.",
    description_ar: "كاميرا DSLR احترافية.",

    longDescription:
      "Canon DSLR camera delivers ultra HD quality, sharp images, and cinematic video performance for professional photography.",
    longDescription_ar:
      "كاميرا كانون DSLR تقدم جودة فائقة الوضوح وصور حادة وأداء فيديو سينمائي للتصوير الاحترافي.",

    category: { id: "cat_camera", name: "Camera", name_ar: "كاميرا" },
    brand: { id: "brand_canon", name: "Canon" },

    pricing: {
      current: 360,
      old: 400,
      currency: "USD",
      discountPercentage: 10,
    },
    ratings: { average: 4.6, totalReviews: 95 },
    stock: { inStock: true, quantity: 18 },
    sections: ["explore"],

    thumbnail: cameraImage,
    gallery: [cameraImage],
    colors: [{ id: "black", name: "Black", name_ar: "أسود", value: "#000000" }],
    sizes: [],
    tags: ["camera", "photography", "dslr"],
    relatedProducts: ["prod_003"],
    shipping: { freeDelivery: true, returnDays: 14 },
    reviewsData: [],
    isNew: false,
    isFeatured: true,
  },
];

/* =========================================
   API HELPERS
========================================= */
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getFlashProducts = async () => {
  await delay(500);
  return {
    success: true,
    data: products.filter((p) => p.sections?.includes("flash-sales")),
  };
};

export const getBestSellingProducts = async () => {
  await delay(500);
  return {
    success: true,
    data: products.filter((p) => p.sections?.includes("best-selling")),
  };
};

export const getExploreProducts = async () => {
  await delay(500);
  return {
    success: true,
    data: products.filter((p) => p.sections?.includes("explore")),
  };
};

export const getProductBySlug = async (slug) => {
  await delay(300);
  return products.find((p) => p.slug === slug) || null;
};

export const getRelatedProducts = async (ids = []) => {
  await delay(300);
  return products.filter((p) => ids.includes(p.id));
};

export const searchProducts = async (query = "") => {
  await delay(200);
  const term = query.toLowerCase().trim();
  if (!term) return { success: true, data: products };
  return {
    success: true,
    data: products.filter(
      (p) =>
        p.title?.toLowerCase().includes(term) ||
        p.title_ar?.includes(term) ||
        p.shortTitle?.toLowerCase().includes(term) ||
        p.category?.name?.toLowerCase().includes(term) ||
        p.brand?.name?.toLowerCase().includes(term) ||
        p.tags?.some((tag) => tag.toLowerCase().includes(term)),
    ),
  };
};
