import httpPublic from "@/apis/common/http.public";

export default {
  register(payload) {
    return httpPublic.post(
      `${process.env.VUE_APP_AUTH_API}/api/auth/register-new`,
      payload,
    );
  },
};
