import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Start from "../views/Start.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
