import { createStore } from 'vuex'
import { CategoriesModule } from '@/store/CategoriesModule'
import { productsModule } from '@/store/ProductsModule'
import { UserModule } from '@/store/UserModule'
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
    user: UserModule
  }
})
