import Keycloak from "keycloak-js";
import store from "@/store";

let keycloakInstance = null;

export function initKeycloak(onAuthenticated) {
  keycloakInstance = new Keycloak({
    url: process.env.VUE_APP_KEYCLOAK_URL,
    realm: process.env.VUE_APP_KEYCLOAK_REALM,
    clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
  });

  return keycloakInstance
    .init({
      onLoad: "check-sso",
      checkLoginIframe: false,
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      console.log("Keycloak authenticated:", authenticated);

      // ✅ Initial sync on app load / refresh
      if (authenticated) {
        store.dispatch("auth/syncUserFromKeycloak");
      }

      // ✅ Sync user again when token refresh succeeds
      keycloakInstance.onAuthRefreshSuccess = () => {
        console.log("Keycloak token refreshed");
        store.dispatch("auth/syncUserFromKeycloak");
      };

      // ✅ Clear user on logout
      keycloakInstance.onAuthLogout = () => {
        store.dispatch("auth/logout");
      };

      onAuthenticated?.(authenticated);
      return authenticated;
    })
    .catch((error) => {
      console.error("Keycloak initialization failed", error);
    });
}

/**
 * Safe accessor for axios interceptors & store
 */
export function getKeycloak() {
  return keycloakInstance;
}
