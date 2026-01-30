const CART_KEY = "ecommerce_cart";

const state = {
  items: JSON.parse(localStorage.getItem(CART_KEY) || "[]"),
};

const getters = {
  cartItems: (state) => state.items,

  cartCount: (state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),

  cartTotal: (state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  isInCart: (state) => (productId) => {
    return state.items.some((item) => item.productId === productId);
  },
};

const mutations = {
  ADD_TO_CART(state, product) {
    const existing = state.items.find(
      (item) => item.productId === product.productId,
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      state.items.push({ ...product, quantity: 1 });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(state.items));
  },

  REMOVE_FROM_CART(state, productId) {
    state.items = state.items.filter((item) => item.productId !== productId);

    localStorage.setItem(CART_KEY, JSON.stringify(state.items));
  },

  UPDATE_QUANTITY(state, { productId, quantity }) {
    const item = state.items.find((item) => item.productId === productId);

    if (item && quantity > 0) {
      item.quantity = quantity;
    }

    localStorage.setItem(CART_KEY, JSON.stringify(state.items));
  },

  CLEAR_CART(state) {
    state.items = [];
    localStorage.removeItem(CART_KEY);
  },
};

const actions = {
  addToCart({ commit }, product) {
    commit("ADD_TO_CART", product);
  },

  removeFromCart({ commit }, productId) {
    commit("REMOVE_FROM_CART", productId);
  },

  updateQuantity({ commit }, payload) {
    commit("UPDATE_QUANTITY", payload);
  },

  clearCart({ commit }) {
    commit("CLEAR_CART");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
