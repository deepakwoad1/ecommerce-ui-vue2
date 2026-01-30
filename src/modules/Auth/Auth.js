import AuthApi from "@/apis/modules/Auth/auth.api";

export default {
  async registerUser(payload) {
    await AuthApi.register(payload);
    // No return needed
  },
};
