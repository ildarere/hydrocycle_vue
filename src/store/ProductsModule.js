export const productsModule = {
  state: () => ({
    products: [
      { id: '1', name: 'Водонепроницаемый Рюкзак', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: new Date(2023, 1, 30) },
      { id: '2', name: 'Спасательный жилет BRP Men\'s Airflow PFD', img: 'BRP Audio-Premium System.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 6900, finalPrice: 5000, saleEndDate: new Date(2023, 1, 30) },
      { id: '3', name: 'BRP Audio-Premium System', img: 'BRP Mens Airflow PFD.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 68000, finalPrice: 68000, saleEndDate: new Date(2023, 1, 30) },
      { id: '4', name: 'Спасательное снаряжение', img: 'Rescue equipment.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30) },
      { id: '5', name: 'BRP Audio-портативная система', img: 'BRP Audio-портативная система.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 7500, saleEndDate: new Date(2023, 1, 30) },
      { id: '6', name: 'Garmin Echomap Plus 62cv', img: 'Garmin Echomap Plus 62cv.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 45800, finalPrice: 45800, saleEndDate: new Date(2023, 1, 30) },
      { id: '7', name: 'RF D.E.S.S.TM Key', img: 'RF D.E.S.S.TM Key.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30) },
      { id: '8', name: 'Мужской костюм 3мм', img: 'Мужской костюм 3мм.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 7000, finalPrice: 7000, saleEndDate: new Date(2023, 1, 30) }
    ],
    pageProducts: []
  }),
  getters: {
    getProducts: (state) => {
      return state.products
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getPopularProductsInCategory: (state) => (categoryId, limit) => {
      return state.products.filter(product => product.category === categoryId).slice(0, limit)
    },
    getSaleProduct: (state) => {
      const sales = state.products.filter(product => product.isSale === true)
      const rand = Math.floor(Math.random() * sales.length)
      return sales[rand]
    }
  },
  mutations: {
    setPageProducts (state, products) {
      state.pageProducts = products
    },
    setIsSale: (state) => (isSale, product) => {
      state.products.find(product).isSale = isSale
    }
  },
  actions: {
    update: ({ state, commit }) => {
      state.products.forEach(product => {
        product.price <= product.finalPrice ? commit('setIsSale', true, product) : commit('setIsSale', false, product)
        if (product.saleEndDate >= new Date()) { commit('setIsSale', false, product) }
      })
    }
  },
  namespaced: true
}
