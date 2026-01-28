import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import keycloak from "@/keycloak";
import RegisterView from "@/views/auth/RegisterView.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { requiresAuth: true },
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
        component: RegisterView,
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
