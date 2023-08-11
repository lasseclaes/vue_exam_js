import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BestillingerView from '../views/BestillingerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      /*      name: 'home',
      component: HomeView */
      redirect: '/bestillinger'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/bestillinger',
      name: 'bestillinger',
      component: BestillingerView
    },
    {
      path: '/testingcounterstore',
      name: 'testingcounterstore',
      component: () => import('../views/TestingCounterStoreView.vue')
    }
  ]
})

export default router
