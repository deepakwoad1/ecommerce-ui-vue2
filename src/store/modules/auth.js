import AuthService from "@/modules/Auth/Auth";
import keycloak from "@/plugins/keycloak";

const state = {
  registering: false,
};

const mutations = {
  SET_REGISTERING(state, value) {
    state.registering = value;
  },
};

const actions = {
  async register({ commit }, payload) {
    commit("SET_REGISTERING", true);
    try {
      await AuthService.registerUser(payload);
    } finally {
      commit("SET_REGISTERING", false);
    }
  },

  login() {
    keycloak.login({
      redirectUri: window.location.origin,
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
