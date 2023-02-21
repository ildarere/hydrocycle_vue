export const CategoriesModule = {
  state: () => ({
    categories: [
      { id: '1', name: 'Квадроциклы', nameEn: 'atv', img: 'atv.png', isMain: true, isLayout: true },
      { id: '2', name: 'Гидроциклы', nameEn: 'hydrocyrcle', img: 'hydrocyrcle.png', isMain: true, isLayout: true },
      { id: '3', name: 'Катера', nameEn: 'speedboat', img: 'speedboat.png', isMain: true, isLayout: true },
      { id: '4', name: 'Снегоходы', nameEn: 'snowmobile', img: 'snowmobile.png', isMain: true, isLayout: true },
      { id: '5', name: 'Вездеходы', nameEn: 'cross-country-vehicle', img: 'cross-country-vehicle.png', isMain: true, isLayout: true },
      { id: '6', name: 'Двигатели', nameEn: 'engine', img: 'engine.png', isMain: true, isLayout: true },
      { id: '7', name: 'Запчасти', nameEn: 'spare-part', img: 'atv.png', isMain: false, isLayout: true },
      { id: '8', name: 'Моторы', nameEn: 'motor', img: 'atv.png', isMain: false, isLayout: false },
      { id: '9', name: 'Шины', nameEn: 'tires', img: 'atv.png', isMain: false, isLayout: false },
      { id: '10', name: 'Электроника', nameEn: 'electronics', img: 'atv.png', isMain: false, isLayout: false },
      { id: '11', name: 'Инструменты', nameEn: 'instruments', img: 'atv.png', isMain: false, isLayout: false },
      { id: '12', name: 'Аксессуары', nameEn: 'accessories', img: 'atv.png', isMain: false, isLayout: false }
    ]
  }),
  getters: {
    getMainCategories: (state) => {
      return state.categories.filter(category => category.isMain === true)
    },
    getCategoriesSubMain: (state) => {
      return state.categories.filter(category => category.isMain === false)
    },
    getLayoutCategories: (state) => {
      return state.categories.filter(category => category.isLayout === true)
    },
    getLayoutCategoriesMobile: (state) => {
      return state.categories.filter(category => category.isLayout === true)
    },
    getCategoryById: (state) => (categoryId) => {
      return state.categories.find(category => category.id === categoryId)
    },
    getCategoryByName: (state) => (categoryName) => {
      return state.categories.find(category => category.nameEn === categoryName)
    }
  },
  namespaced: true
}
