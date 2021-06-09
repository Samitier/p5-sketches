import SketchList from './pages/SketchList.vue'
import NotFound from './pages/404.vue'
import SketchDetail from './pages/SketchDetail/SketchDetail.vue'
import sketches from './sketches'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: SketchList,
      name: 'P5 Sketches - Blai Samitier',
      meta: {
        description: 'A description'
      }
    },
    ...sketches.map((s) => ({
      path: '/' + s.sketch,
      component: SketchDetail,
      name: s.name,
      meta: {
        description: s.description,
        sketch: s.sketch
      }
    })),
    {
      path: '/:pathMatch(.*)',
      component: NotFound,
      name: '404 Not found',
      meta: {
        description: 'The page cannot be found',
        robots: 'none'
      }
    }
  ]
})
