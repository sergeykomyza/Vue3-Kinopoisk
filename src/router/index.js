import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '../views/Catalog.vue'
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Catalog
    },
    {
      path: '/movie/:kinopoiskId',
      component: Detail,
      props: route => ({
        id: route.params.kinopoiskId, 
        nameRu: route.query.name,
        posterUrl: route.query.poster
      })
    }
  ]
})

export default router
