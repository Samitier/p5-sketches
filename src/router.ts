import { createRouter, createWebHistory } from "vue-router"
import SketchList from "./pages/SketchList.vue"
import SketchDetail from "./pages/SketchDetail.vue"
import NotFound from "./pages/404.vue"
import sketches from "./sketches"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: SketchList,
      name: "My vue app",
      meta: {
        description: "A description"
      }
    },
    ...sketches.map(s => ({
      path: "/" + s.name.toLowerCase().replace(/ /g, "-"),
      component: SketchDetail,
      name: s.name,
      meta: {
        description: s.description,
        sketch: s.sketch
      }
    })),
    {
      path: "/:catchAll(.*)",
      component: NotFound,
      name: "404 Not found",
      meta: {
        description: "The page cannot be found",
        robots: "noindex"
      }
    }
  ]
})
