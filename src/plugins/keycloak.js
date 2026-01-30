import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: process.env.VUE_APP_KEYCLOAK_URL,
  realm: process.env.VUE_APP_KEYCLOAK_REALM,
  clientId: process.env.VUE_APP_KEYCLOAK_CLIENT_ID,
});

export const initKeycloak = (onAuthenticated) => {
  keycloak
    .init({
      onLoad: "check-sso",
      checkLoginIframe: false,
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      console.log("Authenticated:", authenticated);

      if (authenticated) {
        console.log("ACCESS TOKEN:", keycloak.token);
      }

      onAuthenticated();
    })
    .catch((error) => {
      console.error("Keycloak initialization failed", error);
    });
};

export default keycloak;
