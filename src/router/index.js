import { createRouter, createWebHistory } from 'vue-router'
import IncrementView from '../views/IncrementView.vue'
import DecrementView from '../views/DecrementView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IncrementView
  },
  {
    path: '/decrement',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:DecrementView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
