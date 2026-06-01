import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    // ── TopHeader ──────────────────────────────
    sale: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
    saleMobile: "Summer Sale 50% OFF!",
    shopNow: "Shop Now",
    english: "English",
    arabic: "العربية",

    // ── Navbar ─────────────────────────────────
    logo: "Exclusive",
    home: "Home",
    contact: "Contact",
    about: "About",
    signUp: "Sign Up",

    // ── Search ─────────────────────────────────
    searchPlaceholder: "What are you looking for?",
    searchResults: "Search results",
    viewAll: "View all results",
    noResults: "No results for",
    tryKeywords: "Try different keywords",

    // ── NavIcons / MobileMenu ──────────────────
    wishlist: "Wishlist",
    cart: "Cart",
    account: "Account",
    copyright: "Exclusive Store © 2025",

    // ── Footer ─────────────────────────────────
    subscribe: "Subscribe",
    subscribeDesc: "Get 10% off your first order",
    emailPlaceholder: "Enter your email",
    support: "Support",
    addresss: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",

    email: "exclusive@gmail.com",
    phone: "+88015-88888-9999",
    myAccount: "My Account",
    loginRegister: "Login / Register",
    shop: "Shop",
    quickLink: "Quick Link",
    privacyPolicy: "Privacy Policy",
    termsOfUse: "Terms Of Use",
    faq: "FAQ",
    downloadApp: "Download App",
    downloadDesc: "Save $3 with App New User Only",
    footerCopyright: "Copyright Rimel 2022. All rights reserved",

    // ── Categories Sidebar ─────────────────────
    catWomenFashion: "Woman's Fashion",
    catMenFashion: "Men's Fashion",
    catElectronics: "Electronics",
    catHome: "Home & Lifestyle",
    catMedicine: "Medicine",
    catSports: "Sports & Outdoor",
    catBaby: "Baby's & Toys",
    catGroceries: "Groceries & Pets",
    catHealth: "Health & Beauty",

    // ── Hero Slides ────────────────────────────
    slideIphoneSubtitle: "iPhone 14 Series",
    slideIphoneTitle: "Up to 10% off Voucher",
    slideGamingSubtitle: "Gaming Collection",
    slideGamingTitle: "Play Like Pro",
    slideFashionSubtitle: "Summer Collection",
    slideFashionTitle: "New Fashion Deals",
    slideSpeakerSubtitle: "Smart Speaker",
    slideSpeakerTitle: "Best Sound Experience",
    slidePerfumeSubtitle: "Luxury Perfume",
    slidePerfumeTitle: "Fresh New Arrivals",

    // ── Flash Sales ────────────────────────────
    todayBadge: "Today's",
    flashSales: "Flash Sales",
    timerDays: "Days",
    timerHours: "Hours",
    timerMinutes: "Minutes",
    timerSeconds: "Seconds",
    noProductsFound: "No Products Found",
    noProductsMatch: "No products match",
    viewAllProducts: "View All Products",
    showLess: "Show Less",

    // ── Product Details ────────────────────────
    pleaseSelectColor: "Please select a color",
    pleaseSelectSize: "Please select a size",
    addedToCart: "Added to cart",
    alreadyInWishlist: "Already in wishlist",
    addedToWishlist: "Added to wishlist",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    color: "Color",
    size: "Size",
    colours: "Colours",
    totalPrice: "Total Price",
    addToCart: "Add to Cart",
    addMore: "Add More",
    freeDelivery: "Free Delivery",
    deliveryDesc: "Enter your postal code for Delivery Availability",
    returnPolicy: "Return Delivery",
    returnDesc: "Free 30 Days Delivery Returns",
    reviews: "Reviews",
    relatedItems: "Related Items",
    loadMore: "Load More",
    somethingWentWrong: "Something went wrong",
    category: "Category",
    product: "Product",
    brand: "Brand",
    // ── أضيفي في translations.en ──
    wishlistEmpty: "Your wishlist is empty",
    wishlistEmptyDesc: "Save products and they'll appear here.",
    moveAllToBag: "Move All To Bag",
    productsAddedToCart: "products added to cart",
    allProductsInCart: "All products already in cart",
    removedFromWishlist: "Removed from wishlist",
    justForYou: "Just For You",
    recommendedProducts: "Recommended Products",
    recommendedDesc: "Based on your wishlist, here are products you may love.",
    seeAll: "See All",

    // Cart page / breadcrumb
    cart: "Cart",

    // CartTable headers & actions
    cartPrice: "Price",
    cartQuantity: "Quantity",
    cartSubtotal: "Subtotal",
    returnToShop: "Return To Shop",
    updateCart: "Update Cart",
    cartUpdated: "Cart updated successfully",

    // CartItem
    removeItem: "Remove item",
    increaseQty: "Increase quantity",
    decreaseQty: "Decrease quantity",
    fromHome: "From Home",
    fromProductDetails: "From Product Details",

    // CartSummary
    cartTotal: "Cart Total",
    cartTotalDesc: "Review your order summary before proceeding to checkout.",
    cartTotalLabel: "Total",
    shipping: "Shipping",
    discount: "Discount",
    taxNote: "Taxes included if applicable",
    proceedToCheckout: "Proceed To Checkout",
    secureCheckout: "Secure checkout powered by encrypted payment protection.",

    // CouponForm
    couponPlaceholder: "Coupon Code",
    applyCoupon: "Apply Coupon",
    enterCoupon: "Please enter coupon code",
    couponApplied: "Coupon applied successfully",
    invalidCoupon: "Invalid coupon code",
    // AccountDropdown menu items
    profile: "My Profile",
    orders: "My Orders",
    wishlistMenu: "My Wishlist",
    addressBook: "Address Book",

    // AccountDropdown status
    accountCompleted: "Profile completed",
    accountActive: "Active account",

    // AccountDropdown logout
    logout: "Log Out",

    // StorySection
    ourStoryTitle: "Our Story",
    ourStoryP1:
      "Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.",
    ourStoryP2:
      "Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.",

    // TeamSection
    ourTeamBadge: "Our Team",
    ourTeamTitle: "Meet Our Creative Team",

    // StatsSection — titles are numbers so they stay the same,
    // only subtitles need translation
    statSellers: "10.5k",
    statSellersDesc: "Sellers active on our site",
    statSales: "33k",
    statSalesDesc: "Monthly product sale",
    statProducts: "45.5k",
    statProductsDesc: "Customer active on our site",
    statCustomers: "25k",
    statCustomersDesc: "Annual gross sale on our site",
    service1Title: "Free And Fast Delivery",
    service1Desc: "Free delivery for all orders over $140",

    service2Title: "24/7 Customer Service",
    service2Desc: "Friendly 24/7 customer support",

    service3Title: "Money Back Guarantee",
    service3Desc: "We return money within 30 days",
    // AccountPage hero
    welcomeBack: "Welcome Back",
    accountDashboardDesc:
      "Manage your profile, orders, wishlist and addresses from your personal dashboard.",
    addresses: "Addresses",

    // AccountSidebar sections
    manageAccount: "Manage My Account",

    // AccountPage / ProfileTab
    myProfileTitle: "My Profile",
    myProfileDesc: "Manage your personal information and security settings.",

    // ProfileTab — personal info
    personalInfo: "Personal Information",
    firstName: "First Name",
    firstNamePlaceholder: "Enter first name",
    lastName: "Last Name",
    lastNamePlaceholder: "Enter last name",
    emailAddress: "Email Address",
    address: "Enter your address",
    emailAddressPlaceholder: "Enter email address",
    addressPlaceholder: "Enter address",

    // ProfileTab — security
    security: "Security",
    currentPassword: "Current Password",
    currentPasswordPlaceholder: "Enter current password",
    newPassword: "New Password",
    newPasswordPlaceholder: "Enter new password",
    confirmPassword: "Confirm Password",
    confirmPasswordPlaceholder: "Confirm new password",

    // ProfileTab — actions
    unsavedChanges: "You have unsaved changes",
    upToDate: "Everything is up to date",
    reset: "Reset",
    saveChanges: "Save Changes",
    profileSaved: "Account saved successfully ✨",

    // Simple tabs
    noOrdersYet: "You haven't placed any orders yet.",
    manageAddresses: "Manage your shipping addresses here.",
    // en
    contactBreadcrumb: "Contact",
    callTitle: "Call To Us",
    callDesc: "We are available 24/7, 7 days a week.",
    callDetail: "Phone: +8801611112222",
    mailTitle: "Write To Us",
    mailDesc: "Fill out our form and we will contact you within 24 hours.",
    mailDetail1: "Emails: customer@exclusive.com",
    mailDetail2: "Emails: support@exclusive.com",
    contactFormTitle: "Send Us a Message",
    contactFormDesc: "We'd love to hear from you. Fill out the form below.",
    namePlaceholder: "Your Name",
    emailPlaceholder2: "Your Email",
    phonePlaceholder: "Your Phone",
    messagePlaceholder: "Write your message here...",
    sending: "Sending...",
    sendMessage: "Send Message",
    messageSent: "Message sent successfully",
    // en
    validNameShort: "Name is too short",
    validEmailRequired: "Email is required",
    validEmailInvalid: "Invalid email",
    validPhoneInvalid: "Invalid phone number",
    validMessageShort: "Message is too short",
    validFirstNameShort: "First name must be at least 2 characters",
    validLastNameShort: "Last name must be at least 2 characters",
    validAddressRequired: "Address is required",
    validCurrentPasswordRequired: "Current password is required",
    validNewPasswordRequired: "New password is required",
    validPasswordLength: "Password must be at least 8 characters",
    validPasswordsNoMatch: "Passwords do not match",
    validFirstNameRequired: "First name is required",
    validStreetRequired: "Street address is required",
    validCityRequired: "City is required",

    // en
    checkoutTitle: "Billing Details",
    checkoutDesc: "Complete your billing details below",
    fieldFirstName: "First Name",
    fieldCompanyName: "Company Name",
    fieldStreetAddress: "Street Address",
    fieldApartment: "Apartment / Floor",
    fieldCity: "Town / City",
    fieldPhone: "Phone Number",
    fieldEmail: "Email Address",
    saveInfo: "Save this information",
    saveInfoDesc: "Save your billing details for faster checkout.",
    couponCode: "Coupon Code",
    enterCoupon: "Enter coupon code",
    applyCoupon: "Apply Coupon",
    couponApplied: "Coupon Applied Successfully",
    invalidCoupon: "Invalid Coupon",
    orderSummaryTitle: "Order Summary",
    orderSummaryDesc: "Review your order before placing it",
    cartEmpty: "Your cart is empty",
    subtotal: "Subtotal",
    shipping: "Shipping",
    free: "Free",
    discount: "Discount",
    total: "Total",
    paymentMethod: "Payment Method",
    paymentMethodDesc: "Choose your preferred payment method",
    placeOrder: "Place Order",
    processing: "Processing...",
    orderPlaced: "Order Placed Successfully",
    accountLabel: "Account",
    myAccountLabel: "My Account",
    productLabel: "Product",
    viewCartLabel: "View Cart",
    checkoutLabel: "Checkout",
    enterField: "Enter",
    bankTitle: "Bank",
    bankDesc: "Pay securely using your card",
    cashTitle: "Cash On Delivery",
    cashDesc: "Pay when receiving your order",
    // en
    secureLogin: "Secure Login",
    welcomeBack: "Welcome Back",
    loginDesc: "Login to continue shopping with Exclusive.",
    passwordPlaceholder: "Password",
    forgotPassword: "Forgot Password?",
    loggingIn: "Logging in...",
    logIn: "Log In",
    noAccount: "Don't have account?",
    createOne: "Create one",
    loggedInSuccess: "Logged in successfully",
    invalidCredentials: "Invalid email or password",
    enterEmailFirst: "Enter your email first",
    resetEmailSent: "Reset email sent",
    createAccount: "Create Account",
    joinExclusive: "Join Exclusive",
    signupDesc: "Create your account and start shopping.",
    fullNamePlaceholder: "Full name",
    accountCreated: "Account created ✨",
    signupFailed: "Signup failed",
    googleSignupSuccess: "Google signup successful ✨",
    googleSignupFailed: "Google signup failed",
    continueWithGoogle: "Continue with Google",
    alreadyHaveAccount: "Already have account?",
    creating: "Creating...",
    loading: "Loading...",
    validPasswordPattern: "Must include uppercase, lowercase, and number",
    validConfirmPasswordRequired: "Please confirm password",
    // en
    searchPageLabel: "Exclusive Search",
    discoverProducts: "Discover Amazing Products",
    searchPageDesc:
      "Explore premium products, trending collections and exclusive offers.",
    productsFound: "Products Found",
    searchIdle: "Discover Amazing Products",
    searchIdleDesc:
      "Search laptops, cameras, gaming accessories, fashion and more.",
    noProductsMatchQuery: "We couldn't find any products matching",
    resultsFor: "Results for",
    productsLabel: "Products",
    browseMatchingDesc: "Browse matching products from our catalog.",

    emptyCartTitle: "Your cart is empty",
    emptyCartDesc:
      "Looks like you haven't added anything yet. Start shopping now.",
    emptyWishlistTitle: "Your wishlist is empty",
    emptyWishlistDesc:
      "Start exploring products and save your favorite items for later.",
    startShopping: "Start Shopping",
    exploreProducts: "Explore Products",
  },

  ar: {
    // ── TopHeader ──────────────────────────────
    sale: "خصم الصيف على جميع ملابس السباحة مع شحن سريع مجاني — خصم 50٪!",
    saleMobile: "خصم الصيف 50٪!",
    shopNow: "تسوق الآن",
    english: "English",
    arabic: "العربية",

    // ── Navbar ─────────────────────────────────
    logo: "إكسكلوسيف",
    home: "الرئيسية",
    contact: "تواصل معنا",
    about: "من نحن",
    signUp: "إنشاء حساب",

    // ── Search ─────────────────────────────────
    searchPlaceholder: "عن ماذا تبحث؟",
    searchResults: "نتائج البحث",
    viewAll: "عرض كل النتائج",
    noResults: "لا نتائج لـ",
    tryKeywords: "جرب كلمات مختلفة",

    // ── NavIcons / MobileMenu ──────────────────
    wishlist: "المفضلة",
    cart: "السلة",
    account: "حسابي",
    copyright: "إكسكلوسيف © 2025",

    // ── Footer ─────────────────────────────────
    subscribe: "اشترك",
    subscribeDesc: "احصل على خصم 10٪ على أول طلب",
    emailPlaceholder: "أدخل بريدك الإلكتروني",
    support: "الدعم",
    addresss: "١١١ بيجوي ساراني، دكا، بنغلاديش.",

    email: "exclusive@gmail.com",
    phone: "+88015-88888-9999",
    myAccount: "حسابي",
    loginRegister: "تسجيل الدخول / إنشاء حساب",
    shop: "المتجر",
    quickLink: "روابط سريعة",
    privacyPolicy: "سياسة الخصوصية",
    termsOfUse: "شروط الاستخدام",
    faq: "الأسئلة الشائعة",
    downloadApp: "حمّل التطبيق",
    downloadDesc: "وفّر $3 مع التطبيق للمستخدمين الجدد فقط",
    footerCopyright: "حقوق النشر محفوظة لـ ريميل 2022",

    // ── Categories Sidebar ─────────────────────
    catWomenFashion: "أزياء نسائية",
    catMenFashion: "أزياء رجالية",
    catElectronics: "إلكترونيات",
    catHome: "المنزل ونمط الحياة",
    catMedicine: "دواء",
    catSports: "رياضة وخارجية",
    catBaby: "أطفال وألعاب",
    catGroceries: "بقالة وحيوانات",
    catHealth: "صحة وجمال",

    // ── Hero Slides ────────────────────────────
    slideIphoneSubtitle: "سلسلة آيفون 14",
    slideIphoneTitle: "خصم يصل إلى 10٪",
    slideGamingSubtitle: "مجموعة الألعاب",
    slideGamingTitle: "العب كالمحترفين",
    slideFashionSubtitle: "مجموعة الصيف",
    slideFashionTitle: "أحدث صفقات الموضة",
    slideSpeakerSubtitle: "سماعة ذكية",
    slideSpeakerTitle: "أفضل تجربة صوتية",
    slidePerfumeSubtitle: "عطور فاخرة",
    slidePerfumeTitle: "وصل حديثاً",

    // ── Flash Sales ────────────────────────────
    todayBadge: "اليوم",
    flashSales: "تخفيضات سريعة",
    timerDays: "أيام",
    timerHours: "ساعات",
    timerMinutes: "دقائق",
    timerSeconds: "ثواني",
    noProductsFound: "لا توجد منتجات",
    noProductsMatch: "لا توجد منتجات تطابق",
    viewAllProducts: "عرض كل المنتجات",
    showLess: "عرض أقل",

    // ── Product Details ────────────────────────
    pleaseSelectColor: "من فضلك اختر لوناً",
    pleaseSelectSize: "من فضلك اختر مقاساً",
    addedToCart: "تمت الإضافة للسلة",
    alreadyInWishlist: "موجود بالفعل في المفضلة",
    addedToWishlist: "تمت الإضافة للمفضلة",
    inStock: "متوفر",
    outOfStock: "غير متوفر",
    color: "اللون",
    size: "المقاس",
    colours: "الألوان",
    totalPrice: "السعر الإجمالي",
    addToCart: "أضف للسلة",
    addMore: "أضف المزيد",
    freeDelivery: "توصيل مجاني",
    deliveryDesc: "أدخل الرمز البريدي للتحقق من التوصيل",
    returnPolicy: "سياسة الإرجاع",
    returnDesc: "إرجاع مجاني خلال 30 يوماً",
    reviews: "تقييم",
    relatedItems: "منتجات ذات صلة",
    loadMore: "تحميل المزيد",
    somethingWentWrong: "حدث خطأ ما",
    category: "الفئة",
    product: "المنتج",
    brand: "الماركة",

    // ── أضيفي في translations.ar ──
    wishlistEmpty: "قائمة المفضلة فارغة",
    wishlistEmptyDesc: "احفظ المنتجات وستظهر هنا.",
    moveAllToBag: "نقل الكل إلى السلة",
    productsAddedToCart: "منتج أُضيف إلى السلة",
    allProductsInCart: "كل المنتجات موجودة بالفعل في السلة",
    removedFromWishlist: "تمت الإزالة من المفضلة",
    justForYou: "خصيصاً لك",
    recommendedProducts: "منتجات مقترحة",
    recommendedDesc: "بناءً على مفضلتك، إليك منتجات قد تعجبك.",
    seeAll: "عرض الكل",

    // Cart page / breadcrumb
    cart: "السلة",

    // CartTable headers & actions
    cartPrice: "السعر",
    cartQuantity: "الكمية",
    cartSubtotal: "الإجمالي الفرعي",
    returnToShop: "العودة للمتجر",
    updateCart: "تحديث السلة",
    cartUpdated: "تم تحديث السلة بنجاح",

    // CartItem
    removeItem: "حذف المنتج",
    increaseQty: "زيادة الكمية",
    decreaseQty: "تقليل الكمية",
    fromHome: "من الرئيسية",
    fromProductDetails: "من تفاصيل المنتج",

    // CartSummary
    cartTotal: "إجمالي السلة",
    cartTotalDesc: "راجع ملخص طلبك قبل المتابعة لإتمام الشراء.",
    cartTotalLabel: "الإجمالي",
    shipping: "الشحن",
    discount: "الخصم",
    taxNote: "الضرائب مشمولة إن وُجدت",
    proceedToCheckout: "إتمام الشراء",
    secureCheckout: "دفع آمن محمي بتشفير كامل.",

    // CouponForm
    couponPlaceholder: "كود الكوبون",
    applyCoupon: "تطبيق الكوبون",
    enterCoupon: "من فضلك أدخل كود الكوبون",
    couponApplied: "تم تطبيق الكوبون بنجاح",
    invalidCoupon: "كود الكوبون غير صحيح",
    // AccountDropdown menu items
    profile: "ملفي الشخصي",
    orders: "طلباتي",
    wishlistMenu: "قائمة المفضلة",
    addressBook: "دفتر العناوين",

    // AccountDropdown status
    accountCompleted: "الملف مكتمل",
    accountActive: "حساب نشط",

    // AccountDropdown logout
    logout: "تسجيل الخروج",

    // StorySection
    ourStoryTitle: "قصتنا",
    ourStoryP1:
      "انطلقنا عام 2015، وإكسكلوسيف هو الموقع الرائد للتسوق الإلكتروني في جنوب آسيا بحضور نشط في بنغلاديش. بدعم من حلول تسويقية وبيانات وخدمات متنوعة، يضم الموقع 10,500 بائع و300 علامة تجارية ويخدم 3 ملايين عميل في المنطقة.",
    ourStoryP2:
      "يقدم إكسكلوسيف أكثر من مليون منتج ويتوسع بوتيرة سريعة، مع تشكيلة متنوعة تشمل فئات المستهلك المختلفة.",

    // TeamSection
    ourTeamBadge: "فريقنا",
    ourTeamTitle: "تعرّف على فريقنا المبدع",

    // StatsSection
    statSellers: "10.5k",
    statSellersDesc: "بائع نشط على موقعنا",
    statSales: "33k",
    statSalesDesc: "مبيعات شهرية من المنتجات",
    statProducts: "45.5k",
    statProductsDesc: "عميل نشط على موقعنا",
    statCustomers: "25k",
    statCustomersDesc: "إجمالي المبيعات السنوية على موقعنا",
    service1Title: "توصيل مجاني وسريع",
    service1Desc: "توصيل مجاني لجميع الطلبات التي تتجاوز $140",

    service2Title: "خدمة عملاء 24/7",
    service2Desc: "دعم ودي على مدار الساعة طوال أيام الأسبوع",

    service3Title: "ضمان استرداد المال",
    service3Desc: "نسترد أموالك خلال 30 يوماً",
    // AccountPage hero
    welcomeBack: "مرحباً بعودتك",
    accountDashboardDesc:
      "أدِر ملفك الشخصي وطلباتك وقائمة المفضلة وعناوينك من لوحة التحكم الخاصة بك.",
    addresses: "العناوين",

    // AccountSidebar sections
    manageAccount: "إدارة حسابي",

    // AccountPage / ProfileTab
    myProfileTitle: "ملفي الشخصي",
    myProfileDesc: "أدِر معلوماتك الشخصية وإعدادات الأمان.",

    // ProfileTab — personal info
    personalInfo: "المعلومات الشخصية",
    firstName: "الاسم الأول",
    firstNamePlaceholder: "أدخل الاسم الأول",
    lastName: "اسم العائلة",
    lastNamePlaceholder: "أدخل اسم العائلة",
    emailAddress: "البريد الإلكتروني",
    address: "أدخل عنوانك",
    emailAddressPlaceholder: "أدخل البريد الإلكتروني",
    addressPlaceholder: "أدخل العنوان",

    // ProfileTab — security
    security: "الأمان",
    currentPassword: "كلمة المرور الحالية",
    currentPasswordPlaceholder: "أدخل كلمة المرور الحالية",
    newPassword: "كلمة المرور الجديدة",
    newPasswordPlaceholder: "أدخل كلمة المرور الجديدة",
    confirmPassword: "تأكيد كلمة المرور",
    confirmPasswordPlaceholder: "أكد كلمة المرور الجديدة",

    // ProfileTab — actions
    unsavedChanges: "لديك تغييرات غير محفوظة",
    upToDate: "كل شيء محدّث",
    reset: "إعادة تعيين",
    saveChanges: "حفظ التغييرات",
    profileSaved: "تم حفظ الحساب بنجاح ✨",

    // Simple tabs
    noOrdersYet: "لم تقم بأي طلبات بعد.",
    manageAddresses: "أدِر عناوين الشحن الخاصة بك هنا.",
    // ar
    contactBreadcrumb: "تواصل معنا",
    callTitle: "اتصل بنا",
    callDesc: "متاحون على مدار الساعة، 7 أيام في الأسبوع.",
    callDetail: "هاتف: +8801611112222",
    mailTitle: "راسلنا",
    mailDesc: "املأ النموذج وسنتواصل معك خلال 24 ساعة.",
    mailDetail1: "البريد: customer@exclusive.com",
    mailDetail2: "البريد: support@exclusive.com",
    contactFormTitle: "أرسل لنا رسالة",
    contactFormDesc: "يسعدنا سماعك. املأ النموذج أدناه.",
    namePlaceholder: "اسمك",
    emailPlaceholder2: "بريدك الإلكتروني",
    phonePlaceholder: "رقم هاتفك",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sending: "جاري الإرسال...",
    sendMessage: "إرسال الرسالة",
    messageSent: "تم إرسال الرسالة بنجاح",

    // ar
    validNameShort: "الاسم قصير جداً",
    validEmailRequired: "البريد الإلكتروني مطلوب",
    validEmailInvalid: "بريد إلكتروني غير صحيح",
    validPhoneInvalid: "رقم الهاتف غير صحيح",
    validMessageShort: "الرسالة قصيرة جداً",
    validFirstNameShort: "الاسم الأول يجب أن يكون حرفين على الأقل",
    validLastNameShort: "اسم العائلة يجب أن يكون حرفين على الأقل",
    validAddressRequired: "العنوان مطلوب",
    validCurrentPasswordRequired: "كلمة المرور الحالية مطلوبة",
    validNewPasswordRequired: "كلمة المرور الجديدة مطلوبة",
    validPasswordLength: "كلمة المرور يجب أن تكون 8 أحرف على الأقل",
    validPasswordsNoMatch: "كلمتا المرور غير متطابقتين",
    validFirstNameRequired: "الاسم الأول مطلوب",
    validStreetRequired: "عنوان الشارع مطلوب",
    validCityRequired: "المدينة مطلوبة",

    // ar
    checkoutTitle: "تفاصيل الفاتورة",
    checkoutDesc: "أكمل تفاصيل الفاتورة أدناه",
    fieldFirstName: "الاسم الأول",
    fieldCompanyName: "اسم الشركة",
    fieldStreetAddress: "عنوان الشارع",
    fieldApartment: "الشقة / الطابق",
    fieldCity: "المدينة",
    fieldPhone: "رقم الهاتف",
    fieldEmail: "البريد الإلكتروني",
    saveInfo: "حفظ هذه المعلومات",
    saveInfoDesc: "احفظ تفاصيل الفاتورة لتسريع عملية الدفع.",
    couponCode: "كود الخصم",
    enterCoupon: "أدخل كود الخصم",
    applyCoupon: "تطبيق الكود",
    couponApplied: "تم تطبيق الكود بنجاح",
    invalidCoupon: "كود غير صحيح",
    orderSummaryTitle: "ملخص الطلب",
    orderSummaryDesc: "راجع طلبك قبل تأكيده",
    cartEmpty: "سلة التسوق فارغة",
    subtotal: "المجموع الفرعي",
    shipping: "الشحن",
    free: "مجاني",
    discount: "الخصم",
    total: "الإجمالي",
    paymentMethod: "طريقة الدفع",
    paymentMethodDesc: "اختر طريقة الدفع المفضلة",
    placeOrder: "تأكيد الطلب",
    processing: "جاري المعالجة...",
    orderPlaced: "تم تأكيد الطلب بنجاح",
    accountLabel: "الحساب",
    myAccountLabel: "حسابي",
    productLabel: "المنتج",
    viewCartLabel: "عرض السلة",
    checkoutLabel: "الدفع",
    enterField: "أدخل",
    bankTitle: "بنك",
    bankDesc: "ادفع بأمان باستخدام بطاقتك",
    cashTitle: "الدفع عند الاستلام",
    cashDesc: "ادفع عند استلام طلبك",
    // ar
    secureLogin: "تسجيل دخول آمن",
    welcomeBack: "مرحباً بعودتك",
    loginDesc: "سجل دخولك لمواصلة التسوق مع إكسكلوسيف.",
    passwordPlaceholder: "كلمة المرور",
    forgotPassword: "نسيت كلمة المرور؟",
    loggingIn: "جاري تسجيل الدخول...",
    logIn: "تسجيل الدخول",
    noAccount: "ليس لديك حساب؟",
    createOne: "أنشئ حساباً",
    loggedInSuccess: "تم تسجيل الدخول بنجاح",
    invalidCredentials: "بريد إلكتروني أو كلمة مرور غير صحيحة",
    enterEmailFirst: "أدخل بريدك الإلكتروني أولاً",
    resetEmailSent: "تم إرسال رابط إعادة التعيين",
    createAccount: "إنشاء حساب",
    joinExclusive: "انضم لإكسكلوسيف",
    signupDesc: "أنشئ حسابك وابدأ التسوق.",
    fullNamePlaceholder: "الاسم الكامل",
    accountCreated: "تم إنشاء الحساب ✨",
    signupFailed: "فشل إنشاء الحساب",
    googleSignupSuccess: "تم التسجيل بجوجل بنجاح ✨",
    googleSignupFailed: "فشل التسجيل بجوجل",
    continueWithGoogle: "المتابعة بجوجل",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    creating: "جاري الإنشاء...",
    loading: "جاري التحميل...",
    validPasswordPattern: "يجب أن تحتوي على حرف كبير وصغير ورقم",
    validConfirmPasswordRequired: "يرجى تأكيد كلمة المرور",
    // ar
    searchPageLabel: "بحث إكسكلوسيف",
    discoverProducts: "اكتشف منتجات رائعة",
    searchPageDesc: "استكشف منتجات مميزة وكولكشنات رائجة وعروض حصرية.",
    productsFound: "منتج موجود",
    searchIdle: "اكتشف منتجات رائعة",
    searchIdleDesc: "ابحث عن لابتوبات، كاميرات، إكسسوارات جيمنج، موضة والمزيد.",
    noProductsMatchQuery: "لم نجد أي منتجات تطابق",
    resultsFor: "نتائج",
    productsLabel: "المنتجات",
    browseMatchingDesc: "تصفح المنتجات المطابقة من كتالوجنا.",

    emptyCartTitle: "سلة التسوق فارغة",
    emptyCartDesc: "يبدو أنك لم تضف أي منتجات بعد. ابدأ التسوق الآن.",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundDesc:
      "الصفحة التي تبحث عنها ربما تم حذفها أو نقلها أو غير متاحة مؤقتاً.",
    backHome: "العودة للرئيسية",
    goBack: "رجوع",
    emptyWishlistTitle: "قائمة المفضلة فارغة",
    emptyWishlistDesc: "ابدأ باستعراض المنتجات واحفظ المفضلة منها.",
    startShopping: "ابدأ التسوق",
    exploreProducts: "استعرض المنتجات",
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      isArabic: lang === "ar",
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
