export const SalesModule = {
  state: () => ({
    sales: [
      { id: '1', name: 'запчасти', discount: 70, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '2', name: 'лодки', discount: 15, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '3', name: 'аксессуары', discount: 75, startDate: '2023-02-01', endDate: '2024-02-01' },
      { id: '4', name: 'инструменты', discount: 60, startDate: '2023-02-01', endDate: '2024-02-01' }
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
