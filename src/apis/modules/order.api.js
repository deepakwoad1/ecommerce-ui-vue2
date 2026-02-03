import httpSecure from "@/apis/common/http.secure";

export default {
  create(payload) {
    return httpSecure.post(
      `${process.env.VUE_APP_ORDER_API}/api/orders`,
      payload,
    );
  },
};
