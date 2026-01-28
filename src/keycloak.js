import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "ecommerce-realm",
  clientId: "ecommerce-ui",
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
