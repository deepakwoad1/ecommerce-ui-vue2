import ProductApi from "@/apis/modules/Product/product.api";

export default {
  async fetchProducts({ offset = 0, limit = 10 } = {}) {
    const response = await ProductApi.getProducts({ offset, limit });
    return response.data;
  },
};
