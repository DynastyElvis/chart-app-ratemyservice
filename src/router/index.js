import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  {
    path: "/main",
    component: MainPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mock authentication guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
