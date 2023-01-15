import { createStore } from 'vuex'
import { categoriesModule } from '@/store/categoriesModule'
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
    categories: categoriesModule
  }
})
