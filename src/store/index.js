import { createStore } from 'vuex'
import { CategoriesModule } from '@/store/CategoriesModule'
import { PopularProductsModule } from '@/store/PopularProductsModule'
import { productsModule } from '@/store/ProductsModule'
import { UserModule } from '@/store/UserModule'
export default createStore({
  state: {
    menuLinks: ['Квадроциклы', 'Катера', 'Гидроциклы', 'Лодки', 'Вездеходы', 'Снегоходы', 'Двигатели', 'Запчасти'],
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
    popularProducts: PopularProductsModule,
    products: productsModule,
    user: UserModule
  }
})
