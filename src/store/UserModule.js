export const UserModule = {
  state: () => ({
    User: {
      id: '',
      name: '',
      mail: '',
      likedProducts: ['1'],
      shopingcart: []
    }
  }),
  getters: {
    getLikedProducts (state) {
      return state.User.likedProducts
    }
  },
  mutations: {
    toggleLikedProducts (state, id) {
      state.User.likedProducts.includes(id) ? state.User.likedProducts.splice(state.User.likedProducts.findIndex(el => el === id), 1) : state.User.likedProducts.push(id)
    }
  },
  actions: {
  },
  namespaced: true
}
