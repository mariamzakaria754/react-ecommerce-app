import speaker from "@/assets/images/speaker-big.png";

export const getPromoData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 5);

      resolve({
        id: 1,

        category: "Categories",
        categoryAr: "الفئات",

        title: "Enhance Your Music Experience",
        titleAr: "طوّر تجربتك الموسيقية",

        image: speaker,

        buttonText: "Buy Now!",
        buttonTextAr: "اشتري الآن!",

        endDate: futureDate.toISOString(),
      });
    }, 1000);
  });
};
