import axios from "axios";
import { getKeycloak } from "@/plugins/keycloak";

const httpSecure = axios.create({
  timeout: 10000,
});

httpSecure.interceptors.request.use(async (config) => {
  const keycloak = getKeycloak();

  if (keycloak?.token) {
    await keycloak.updateToken(30);
    config.headers.Authorization = `Bearer ${keycloak.token}`;
  }

  return config;
});

httpSecure.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      getKeycloak()?.login();
    }
    return Promise.reject(err);
  },
);

export default httpSecure;
