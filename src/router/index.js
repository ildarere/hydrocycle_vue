import { createRouter, createWebHashHistory } from 'vue-router'
import IndexVue from '@/views/IndexView.vue'
import CatalogView from '@/views/CatalogView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexVue
  },
  {
    path: '/catalog/:category',
    component: CatalogView
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
