import { createRouter, createWebHistory } from 'vue-router'
import HomeHome from '../views/Home.vue'
import loginLogin from '../views/login.vue'


const routes = [
  {
    path: '/',
    name: 'HomeHome',
    component: HomeHome
  },
  {
    path: '/login',
    name: 'loginLogin',
    component: loginLogin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
