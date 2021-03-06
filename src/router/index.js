import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/success',
    name: 'success',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "success" */ '../views/SuccessView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
