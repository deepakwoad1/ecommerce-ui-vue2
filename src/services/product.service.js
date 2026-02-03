import ProductApi from "@/apis/modules/product.api";
import { normalizeProduct } from "@/utils/product.helper";

/**
 * Fetch paginated products
 */
// export async function fetchProducts({ offset = 0, limit = 10 } = {}) {
//   const response = await ProductApi.getProducts({ offset, limit });

//   //   return {
//   //     items: normalizeProductList(response.data.items),
//   //     total: response.data.total,
//   //     offset,
//   //     limit,
//   //   };
//   return response.data;
// }

export async function fetchProducts(params = {}) {
  try {
    const response = await ProductApi.getProducts(params);
    return response.data;
  } catch (error) {
    // ❌ do NOT console.log raw Axios error in UI
    throw new Error("PRODUCT_FETCH_FAILED");
  }
}

/**
 * Fetch single product by id
 */
export async function fetchProductById(productId) {
  if (!productId) {
    throw new Error("Product ID is required");
  }

  const response = await ProductApi.getProductById(productId);
  return normalizeProduct(response.data);
}
