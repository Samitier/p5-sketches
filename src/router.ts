import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue"
import NotFound from "./pages/404.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
      name: "notFound"
    }
  ]
})
