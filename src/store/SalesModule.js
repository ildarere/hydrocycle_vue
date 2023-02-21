export const SalesModule = {
  state: () => ({
    sales: [
      { id: '1', name: 'запчасти', path: 'spare-part', discount: 70, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '2', name: 'катера', path: 'speedboat', discount: 15, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '3', name: 'аксессуары', path: 'accessories', discount: 75, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '4', name: 'инструменты', path: 'instruments', discount: 60, startDate: '2023-02-01', endDate: '2024-02-01' }
    ]
  }),
  getters: {
    getSale: (state) => {
      const rand = Math.floor(Math.random() * state.sales.length)
      return state.sales[rand]
    }
  },
  namespaced: true
}
