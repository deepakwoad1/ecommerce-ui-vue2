import httpPublic from "@/apis/common/http.public";

export default {
  getProducts(params) {
    return httpPublic.get(`${process.env.VUE_APP_PRODUCT_API}/api/products`, {
      params,
    });
  },
  getProductById(id) {
    return httpPublic.get(
      `${process.env.VUE_APP_PRODUCT_API}/api/products/${id}`,
    );
  },
};
