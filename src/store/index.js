import { createStore } from 'vuex'
import { CategoriesModule } from '@/store/CategoriesModule'
import { productsModule } from '@/store/ProductsModule'
import { UserModule } from '@/store/UserModule'
import { SalesModule } from '@/store/SalesModule'
import { FiltersModule } from '@/store/FiltersModule'
export default createStore({
  state: {
    menuLinksMobile: ['Войти', 'Регистрация', 'Магазины', 'Акции', 'Доставка и оплата']
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categories: CategoriesModule,
    products: productsModule,
    user: UserModule,
    sales: SalesModule,
    filters: FiltersModule
  }
})
