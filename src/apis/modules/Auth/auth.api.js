import httpAuth from "@/apis/common/http.auth";

export default {
  register(payload) {
    return httpAuth.post("/api/auth/register-new", payload);
  },
};
