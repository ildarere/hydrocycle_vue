export const PopularProductsModule = {
  state: () => ({
    categories: [
      { id: '1', name: 'запчасти', products: ['1', '2', '3', '4'] },
      { id: '2', name: 'моторы', products: ['4', '3', '2', '1'] },
      { id: '3', name: 'шины ', products: ['1', '2', '1', '4'] },
      { id: '4', name: 'электроника', products: ['1', '4', '4', '4'] },
      { id: '5', name: 'инструменты', products: ['1', '2', '3', '4'] },
      { id: '6', name: 'аксессуары', products: ['1', '2', '3', '4'] }
    ]
  }),
  namespaced: true
}
