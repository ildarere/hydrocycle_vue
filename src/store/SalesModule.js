export const SalesModule = {
  state: () => ({
    sales: [
      { id: '1', name: 'запчасти', path: 'spare-part', discount: 70, startDate: '2023-02-01', endDate: '2024-02-01', categoryId: '6' },
      { id: '2', name: 'катера', path: 'speedboat', discount: 15, startDate: '2023-02-01', endDate: '2024-02-01', categoryId: '3' },
      { id: '3', name: 'аксессуары', path: 'accessories', discount: 75, startDate: '2023-02-01', endDate: '2024-02-01', categoryId: '12' },
      { id: '4', name: 'инструменты', path: 'instruments', discount: 60, startDate: '2023-02-01', endDate: '2024-02-01', categoryId: '11' }
    ]
  }),
  getters: {
    getSale: (state) => {
      const rand = Math.floor(Math.random() * state.sales.length)
      return state.sales[rand]
    },
    getSales: (state) => {
      return state.sales
    }
  },
  namespaced: true
}
