import { categories } from "@/data/categories";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getCategories = async () => {
  await delay(300);

  return {
    success: true,
    data: categories,
  };
};
