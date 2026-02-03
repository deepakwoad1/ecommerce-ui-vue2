import { fetchProducts } from "@/services/product.service";

const state = {
  products: [],
  loading: false,
  error: null,
};

const mutations = {
  SET_LOADING(state, value) {
    state.loading = value;
  },
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async loadProducts({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const products = await fetchProducts();
      commit("SET_PRODUCTS", products);
    } catch (error) {
      console.error("Failed to load products", error);
      commit("SET_ERROR", "Unable to load products");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
