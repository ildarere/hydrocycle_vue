export const CategoriesModule = {
  state: () => ({
    categories: [
      { id: '1', name: 'Квадроциклы', nameEn: 'atv', img: 'atv.png' },
      { id: '2', name: 'Гидроциклы', nameEn: 'hydrocyrcle', img: 'hydrocyrcle.png' },
      { id: '3', name: 'Катера', nameEn: 'speedboat', img: 'speedboat.png' },
      { id: '4', name: 'Снегоходы', nameEn: 'snowmobile', img: 'snowmobile.png' },
      { id: '5', name: 'Вездеходы', nameEn: 'cross-country-vehicle', img: 'cross-country-vehicle.png' },
      { id: '6', name: 'Двигатели', nameEn: 'engine', img: 'engine.png' },
      { id: '7', name: 'Запчасти', nameEn: 'spare-part', img: 'atv.png' },
      { id: '8', name: 'Моторы', nameEn: 'motor', img: 'atv.png' },
      { id: '9', name: 'Шины', nameEn: 'tires', img: 'atv.png' },
      { id: '10', name: 'Электроника', nameEn: 'electronics', img: 'atv.png' },
      { id: '11', name: 'Инструменты', nameEn: 'instruments', img: 'atv.png' },
      { id: '12', name: 'Аксессуары', nameEn: 'accessories', img: 'atv.png' }
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
    },
    getCategoryById: (state) => (categoryId) => {
      return state.categories.find(category => category.id === categoryId)
    }
  },
  namespaced: true
}
