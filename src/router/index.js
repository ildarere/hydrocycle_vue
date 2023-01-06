import { createRouter, createWebHashHistory } from 'vue-router'
import IndexVue from '@/views/IndexView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
