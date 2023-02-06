export const productsModule = {
  state: () => ({
    products: [
      { id: '1', name: 'Водонепроницаемый Рюкзак', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null },
      { id: '2', name: 'Спасательный жилет BRP Men\'s Airflow PFD', img: 'BRP Audio-Premium System.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 6900, finalPrice: 5000, saleEndDate: new Date(2023, 1, 30) },
      { id: '3', name: 'BRP Audio-Premium System', img: 'BRP Mens Airflow PFD.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 68000, finalPrice: 68000, saleEndDate: null },
      { id: '4', name: 'Спасательное снаряжение', img: 'Rescue equipment.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30) },
      { id: '5', name: 'BRP Audio-портативная система', img: 'BRP Audio-портативная система.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 7500, saleEndDate: new Date(2023, 1, 30) },
      { id: '6', name: 'Garmin Echomap Plus 62cv', img: 'Garmin Echomap Plus 62cv.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 45800, finalPrice: 45800, saleEndDate: null },
      { id: '7', name: 'RF D.E.S.S.TM Key', img: 'RF D.E.S.S.TM Key.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30) },
      { id: '8', name: 'Мужской костюм 3мм', img: 'Мужской костюм 3мм.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 7000, finalPrice: 7000, saleEndDate: null },
      { id: '9', name: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\\Mango', img: 'BRP SeaDoo GTI 130hp SE Black.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1049500, finalPrice: 1049500, saleEndDate: null },
      { id: '10', name: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic', img: 'BRP SeaDoo GTI 155hp SE Long Blue Metallic.png', category: '2', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 1100475, finalPrice: 1100475, saleEndDate: new Date(2023, 1, 30) },
      { id: '11', name: 'Гидроцикл BRP SeaDoo GTR 230hp X California green ', img: 'BRP SeaDoo GTR 230hp X California green.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1323700, finalPrice: 1323700, saleEndDate: null },
      { id: '12', name: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream', img: 'BRP SeaDoo GTR 230hp STD Black Gulfstream.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1323700, finalPrice: 1323700, saleEndDate: null },
      { id: '13', name: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal', img: 'BRP SeaDoo GTX 300hp LTD Liquid Metal.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1543000, finalPrice: 1543000, saleEndDate: null },
      { id: '14', name: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up', img: 'BRP SeaDoo Spark 60hp 2 up.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 732345, finalPrice: 732345, saleEndDate: null },
      { id: '15', name: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental', img: 'BRP SeaDoo Spark GTS 90hp Rental.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 857666, finalPrice: 857666, saleEndDate: null },
      { id: '16', name: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue', img: 'BRP SeaDoo WAKE 230hp PRO Teal blue.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1229711, finalPrice: 1229711, saleEndDate: null }
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
    getProductsInCategory: (state) => (categoryId, limit) => {
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
