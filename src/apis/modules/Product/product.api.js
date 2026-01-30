import httpProduct from "@/apis/common/http.product";

export default {
  getProducts(params = { offset: 0, limit: 10 }) {
    return httpProduct.get("/products", { params });
  },
};
