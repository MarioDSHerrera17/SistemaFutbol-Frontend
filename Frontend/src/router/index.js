import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import LigasView from '../views/LigasView.vue'

const routes = [
  { path: '/', component: LigasView},
  { path: '/login', component: LoginView },
  { path: '/ligas', component: LigasView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
