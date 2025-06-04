import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import SuccessView from "../views/Success.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;