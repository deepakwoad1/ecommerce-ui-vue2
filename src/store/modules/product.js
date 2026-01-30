import ProductService from "@/modules/Product/Product";

const state = {
  products: [],
  loading: false,
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_LOADING(state, status) {
    state.loading = status;
  },
};

const actions = {
  async loadProducts({ commit }) {
    commit("SET_LOADING", true);
    try {
      const products = await ProductService.fetchProducts();
      commit("SET_PRODUCTS", products);
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
