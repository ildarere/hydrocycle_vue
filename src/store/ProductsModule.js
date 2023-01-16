export const productsModule = {
  state: () => ({
    products: [
      { id: '1', name: 'Водонепроницаемый Рюкзак', img: 'Backpack.png', category: 6, with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800 },
      { id: '2', name: 'Спасательный жилет BRP Men\'s Airflow PFD', img: 'BRP Audio-Premium System.png', category: 6, with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 6900 },
      { id: '3', name: 'BRP Audio-Premium System', img: 'BRP Mens Airflow PFD.png', category: 6, with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 68000 },
      { id: '4', name: 'Спасательное снаряжение', img: 'Rescue equipment.png', category: 6, with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800 }
    ],
    pageProducts: []
  }),
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  },
  mutations: {
    setPageProducts (state, products) {
      state.pageProducts = products
    }
  },
  namespaced: true
}
