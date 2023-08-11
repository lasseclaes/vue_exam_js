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
      path: '/bestillinger',
      name: 'bestillinger',
      component: BestillingerView
    },
    {
      path: '/bestillinger/arkiv',
      name: 'arkiv',
      component: () => import('../views/bestillinger/ArkivView.vue')
    },
    {
      path: '/bestillinger/slettede',
      name: 'slettede',
      component: () => import('../views/bestillinger/SlettedeView.vue')
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
      path: '/testingcounterstore',
      name: 'testingcounterstore',
      component: () => import('../views/TestingCounterStoreView.vue')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('../views/NotesLjn.vue')
    },
    {
      path: '/eksamener',
      name: 'eksamener',
      component: () => import('../views/NothingHereView.vue')
    },
    {
      path: '/statistik',
      name: 'statistik',
      component: () => import('../views/NothingHereView.vue')
    },
    {
      path: '/fakturering',
      name: 'fakturering',
      component: () => import('../views/NothingHereView.vue')
    },
    {
      path: '/rushhour',
      name: 'rushhour',
      component: () => import('../views/NothingHereView.vue')
    },
    {
      path: '/dubletter',
      name: 'dubletter',
      component: () => import('../views/NothingHereView.vue')
    },
    {
      path: '/udtraek',
      name: 'udtraek',
      component: () => import('../views/NothingHereView.vue')
    }
  ]
})

export default router
