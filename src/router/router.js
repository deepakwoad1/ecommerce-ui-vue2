import Vue from "vue";
import VueRouter from "vue-router";
import keycloak from "@/plugins/keycloak";
import AuthLayout from "@/container/layouts/AuthLayout.vue";
import DefaultLayout from "@/container/layouts/DefaultLayout.vue";
import ProductList from "@/container/pages/product/ProductList.vue";
import CartPage from "@/container/pages/cart/CartPage.vue";

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
        component: ProductList,
      },
      {
        path: "cart",
        name: "Cart",
        component: CartPage,
      },
    ],
  },
  {
    path: "/checkout",
    component: DefaultLayout,
    meta: { public: true },
    children: [
      {
        path: "",
        name: "Checkout",
        component: () => import("@/container/pages/checkout/CheckoutPage.vue"),
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

  // 2️⃣ Protect private routes
  if (to.meta.requiresAuth && !keycloak.authenticated) {
    return keycloak.login();
  }

  next();
});

export default router;
