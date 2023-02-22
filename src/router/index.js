import IndexVue from '@/views/IndexView.vue'
import CatalogView from '@/views/CatalogView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: IndexVue
  },
  {
    path: '/catalog/:category',
    component: CatalogView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
