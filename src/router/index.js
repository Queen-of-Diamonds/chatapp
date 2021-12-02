import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    iconClass: "fas fa-home",
    mainMenu: true,
  },
  {
    path: "/feed",
    name: "Feed",
    component: Home,
    iconClass: "fas fa-search",
    mainMenu: true,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Home,
    iconClass: "fal fa-comment",
    mainMenu: true,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Home,
    iconClass: "fas fa-envelope",
    mainMenu: true,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Home,
    iconClass: "fas fa-user",
    mainMenu: true,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Home,
    iconClass: "fas fa-sign-out",
    mainMenu: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
