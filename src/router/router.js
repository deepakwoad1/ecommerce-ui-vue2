import Vue from "vue";
import VueRouter from "vue-router";
import { getKeycloak } from "@/plugins/keycloak";
import AuthLayout from "@/container/layouts/AuthLayout.vue";
import DefaultLayout from "@/container/layouts/DefaultLayout.vue";
import ProductPage from "@/container/pages/product/ProductPage.vue";
import CartPage from "@/container/pages/cart/CartPage.vue";
import AboutPage from "@/container/pages/about/AboutPage.vue";
import NotFoundPage from "@/container/pages/error/NotFoundPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    meta: { public: true },
    children: [
      {
        path: "",
        name: "Products",
        component: ProductPage,
        meta: { public: true },
      },
      {
        path: "cart",
        name: "Cart",
        component: CartPage,
        meta: { public: true },
      },
      {
        path: "about",
        name: "About",
        component: AboutPage,
        meta: { public: true },
      },
      {
        path: "checkout",
        name: "Checkout",
        component: () => import("@/container/pages/checkout/CheckoutPage.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  // 🔓 Auth routes (Public)
  {
    path: "/auth",
    component: AuthLayout,
    meta: { public: true },
    children: [
      {
        path: "register",
        name: "register",
        component: () => import("@/container/pages/auth/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 1️⃣ Allow public routes always
  if (to.meta.public) {
    return next();
  }

  // 🔐 Protected routes
  if (to.matched.some((r) => r.meta.requiresAuth)) {
    const keycloak = getKeycloak();

    if (!keycloak) {
      console.warn("Keycloak not initialized yet");
      return next(false);
    }

    if (!keycloak.authenticated) {
      return keycloak.login();
    }
  }

  next();
});

export default router;
