import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";

import "@/plugins/bootstrap-vue";
import "@/plugins/vee-validate";
import "@/plugins/global-components";

import { initKeycloak } from "./plugins/keycloak";

Vue.config.productionTip = false;

initKeycloak(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
