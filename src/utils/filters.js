import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const getProductsByCategorySlug = (slug) => {
  const category = categories.find((c) => c.slug === slug);

  if (!category) return [];

  return products.filter((p) => p.categoryId === category.id);
};
