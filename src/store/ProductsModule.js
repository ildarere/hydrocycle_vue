export const productsModule = {
  state: () => ({
    products: [
      { id: '1', name: 'Водонепроницаемый Рюкзак', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800 },
      { id: '2', name: 'Спасательный жилет BRP Men\'s Airflow PFD', img: 'BRP Audio-Premium System.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 6900 },
      { id: '3', name: 'BRP Audio-Premium System', img: 'BRP Mens Airflow PFD.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 68000 },
      { id: '4', name: 'Спасательное снаряжение', img: 'Rescue equipment.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800 },
      { id: '5', name: 'BRP Audio-портативная система', img: 'BRP Audio-портативная система.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800 },
      { id: '6', name: 'Garmin Echomap Plus 62cv', img: 'Garmin Echomap Plus 62cv.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 45800 },
      { id: '7', name: 'RF D.E.S.S.TM Key', img: 'RF D.E.S.S.TM Key.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800 },
      { id: '8', name: 'Мужской костюм 3мм', img: 'Мужской костюм 3мм.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 7000 }
    ],
    pageProducts: []
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getPopularProductsInCategory: (state) => (categoryId, limit) => {
      return state.products.filter(product => product.category === categoryId).slice(0, limit)
    }
  },
  mutations: {
    setPageProducts (state, products) {
      state.pageProducts = products
    }
  },
  namespaced: true
}
