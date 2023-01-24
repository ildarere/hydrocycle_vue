export const CategoriesModule = {
  state: () => ({
    categories: [
      { id: '1', name: 'Квадроциклы', img: 'atv.png' },
      { id: '2', name: 'Гидроциклы', img: 'hydrocyrcle.png' },
      { id: '3', name: 'Катера', img: 'speedboat.png' },
      { id: '4', name: 'Снегоходы', img: 'snowmobile.png' },
      { id: '5', name: 'Вездеходы', img: 'cross-country-vehicle.png' },
      { id: '6', name: 'Двигатели', img: 'engine.png' },
      { id: '7', name: 'Запчасти', img: 'atv.png' },
      { id: '8', name: 'моторы', img: 'atv.png' },
      { id: '9', name: 'шины ', img: 'atv.png' },
      { id: '10', name: 'электроника', img: 'atv.png' },
      { id: '11', name: 'инструменты', img: 'atv.png' },
      { id: '12', name: 'аксессуары', img: 'atv.png' }
    ]
  }),
  getters: {
    getMainCategories: (state) => {
      return state.categories.filter(category => category.id <= 6)
    },
    getCategoriesSubMain: (state) => {
      return state.categories.filter(category => category.id > 6)
    },
    getLayoutCategories: (state) => {
      return state.categories.filter(category => category.id <= 7)
    },
    getLayoutCategoriesMobile: (state) => {
      return state.categories.filter(category => category.id <= 7)
    }
  },
  namespaced: true
}
