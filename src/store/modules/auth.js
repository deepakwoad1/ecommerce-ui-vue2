import { registerUser } from "@/services/auth.service";
import { getKeycloak } from "@/plugins/keycloak";

const state = {
  user: null,
  registering: false,
};

const mutations = {
  SET_REGISTERING(state, value) {
    state.registering = value;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
};

const actions = {
  async register({ commit }, payload) {
    commit("SET_REGISTERING", true);
    try {
      await registerUser(payload);
    } finally {
      commit("SET_REGISTERING", false);
    }
  },
  login() {
    const keycloak = getKeycloak();

    if (!keycloak) {
      console.error("Keycloak not initialized");
      return;
    }

    keycloak.login({
      redirectUri: window.location.origin,
    });
  },

  logout({ commit }) {
    const keycloak = getKeycloak();
    commit("CLEAR_USER");
    keycloak?.logout({ redirectUri: window.location.origin });
  },

  /**
   * Sync user from Keycloak token → Vuex
   * Call this once after app loads or login success
   */
  syncUserFromKeycloak({ commit }) {
    const keycloak = getKeycloak();

    if (!keycloak?.authenticated) return;

    const token = keycloak.tokenParsed;

    commit("SET_USER", {
      id: token.sub, // ✅ userId
      username: token.preferred_username,
      email: token.email,
      name: token.name,
    });
  },
};

const getters = {
  isLoggedIn: (state) => !!state.user,
  currentUser: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
