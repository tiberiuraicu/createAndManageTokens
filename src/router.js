import { createRouter, createWebHistory } from "vue-router";

import CreateTokens from "./components/CreateTokens.vue";
import EditTokens from "./components/EditTokens.vue";
import HomePage from "./components/HomePage.vue";

const router = createRouter({
  routes: [
    { path: "/", component: HomePage, redirect: "/create" },
    { path: "/create", component: CreateTokens },
    { path: "/manage", name: "manage", component: EditTokens },
  ],
  history: createWebHistory(),
});

export default router;
