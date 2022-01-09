import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DylanSandBox01 from "@/views/DylanSandBox01.vue";
import Conversation from "@/views/Conversation.vue";
import ChristieSandbox from "@/views/ChristieSandbox.vue";
import VisualProgramming from "@/views/VisualProgramming.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    iconClass: "fas fa-home",
    mainMenu: true,
  },
  {
    path: "/code-art",
    name: "Code Art",
    component: VisualProgramming,
  },
  {
    path: "/dylan-sandbox",
    name: "DylanSandbox",
    component: DylanSandBox01,
  },
  {
    path: "/conversation",
    name: "Conversation",
    component: Conversation,
  },
  {
    path: "/christie-sandbox",
    name: "ChristieSandbox",
    component: ChristieSandbox,
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
