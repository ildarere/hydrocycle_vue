export const UserModule = {
  state: () => ({
    User: {
      id: '',
      name: '',
      mail: '',
      likedProducts: ['1'],
      shoppingCart: []
    }
  }),
  getters: {
    getLikedProducts: (state) => {
      return state.User.likedProducts
    },
    getShoppingCartCounter: (state) => {
      return state.User.shoppingCart.length
    }
  },
  mutations: {
    toggleLikedProducts: (state, id) => {
      state.User.likedProducts.includes(id) ? state.User.likedProducts.splice(state.User.likedProducts.findIndex(el => el === id), 1) : state.User.likedProducts.push(id)
    },
    addProductInShoppingCart: (state, product) => {
      if (state.User.shoppingCart.some(prod => prod.id === product.id)) {
        state.User.shoppingCart.find(prod => prod.id === product.id).count += product.count
      } else {
        state.User.shoppingCart.push(product)
      }
    }
  },
  actions: {
  },
  namespaced: true
}
