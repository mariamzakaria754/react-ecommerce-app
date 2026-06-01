import { products } from "@/data/products";

const API_DELAY = 400;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/* =========================================
   BASE RESPONSE WRAPPER
========================================= */
const response = (data, success = true) => ({
  success,
  data,
});

/* =========================================
   GET ALL PRODUCTS
========================================= */
export const getProducts = async () => {
  await delay(API_DELAY);

  return response({
    total: products.length,
    items: products,
  });
};

/* =========================================
   GET PRODUCT BY ID
========================================= */
export const getProductById = async (id) => {
  await delay(API_DELAY);

  const product = products.find((p) => p.id === id);

  return response(product || null, !!product);
};

/* =========================================
   GET PRODUCT BY SLUG
========================================= */
export const getProductBySlug = async (slug) => {
  await delay(API_DELAY);

  const product = products.find((p) => p.slug === slug);

  return response(product || null, !!product);
};

/* =========================================
   GET BY SECTION (GENERIC)
========================================= */
export const getProductsBySection = async (section) => {
  await delay(API_DELAY);

  const data = products.filter((p) => p.sections?.includes(section));

  return response(data);
};

/* =========================================
   GET RELATED PRODUCTS (SMART VERSION)
========================================= */
export const getRelatedProducts = async (ids = [], limit = 12) => {
  await delay(300);

  let result = [];

  if (Array.isArray(ids) && ids.length > 0) {
    result = products.filter((p) => ids.includes(p.id));
  }

  // fallback لو مفيش related
  if (result.length === 0) {
    result = products.slice(0, limit);
  }

  // لو أقل من المطلوب، نكمل منتجات عشوائيًا
  if (result.length < limit) {
    const extra = products
      .filter((p) => !result.includes(p))
      .slice(0, limit - result.length);

    result = [...result, ...extra];
  }

  return {
    success: true,
    data: result.slice(0, limit),
  };
};
