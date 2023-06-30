import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutView",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;