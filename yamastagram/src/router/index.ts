import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Yamastagram from '../views/Yamastagram.vue'
import Expenses from '../views/Expenses.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/yamastagram',
    name: 'yamastagram',
    component: Yamastagram
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: Expenses
  }
]

const router = createRouter({
  // TODO バックエンド実装時にヒストリーモードに戻す
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
