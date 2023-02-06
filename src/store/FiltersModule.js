export const FiltersModule = {
  state: () => ({
    filtersGroup: [
      { id: '1', name: 'Наличие', category: '0', type: 'checkers', expectedValue: null },
      { id: '2', name: 'Новинки', category: '0', type: 'checkers', expectedValue: null },
      { id: '3', name: 'Цена', category: '0', type: 'slider', expectedValue: null },
      { id: '4', name: 'Мощность, л.с.', category: '0', type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '5', name: 'Мощность двигателя, л.с.', category: '0', type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '6', name: 'Макс. скорость', category: '0', type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '7', name: 'Бренд', category: '0', type: 'checkers', expectedValue: null },
      { id: '8', name: 'Модель', category: '0', type: 'checkers', expectedValue: null },
      { id: '9', name: 'Акции', category: '0', type: 'checkers', expectedValue: null },
      { id: '10', name: 'Страны', category: '0', type: 'checkers', expectedValue: null }
    ],
    filters: [
      { id: '1', isBoolean: true, filter: 'isStock', name: 'В наличие', filterGroup: '1' },
      { id: '2', isBoolean: true, filter: 'isOrder', name: 'Под заказ', filterGroup: '1' },
      { id: '3', isBoolean: true, filter: 'isAll', name: 'Все', filterGroup: '2' },
      { id: '4', isBoolean: true, filter: 'isNew', name: 'Новинки', filterGroup: '2' },
      { id: '5', isBoolean: true, filter: 'isStock', name: 'Акции', filterGroup: '2' },
      { id: '6', isBoolean: false, filter: 'priceBottom', name: 'Цена', filterGroup: '3' },
      { id: '22', isBoolean: false, filter: 'priceTop', name: 'Цена', filterGroup: '3' },
      { id: '7', isBoolean: false, filter: 'power', name: 'Мощность, л.с.', filterGroup: '4' },
      { id: '8', isBoolean: false, filter: 'enginePower', name: 'Мощность двигателя, л.с.', filterGroup: '5' },
      { id: '9', isBoolean: false, filter: 'highSpeed', name: 'Макс. скорость', filterGroup: '6' },
      { id: '10', isBoolean: true, filter: 'brand', name: 'BRP', filterGroup: '7' },
      { id: '11', isBoolean: true, filter: 'brand', name: 'Spark 2', filterGroup: '7' },
      { id: '12', isBoolean: true, filter: 'brand', name: 'Spark 3', filterGroup: '7' },
      { id: '13', isBoolean: true, filter: 'model', name: 'Sea-doo Spark 2', filterGroup: '8' },
      { id: '14', isBoolean: true, filter: 'model', name: 'SeaDoo Spark 90 ', filterGroup: '8' },
      { id: '15', isBoolean: true, filter: 'model', name: 'SeaDoo GTI 155', filterGroup: '8' },
      { id: '16', isBoolean: true, filter: 'model', name: 'SeaDoo GTR 230', filterGroup: '8' },
      { id: '17', isBoolean: true, filter: 'isSale', name: 'SALE', filterGroup: '9' },
      { id: '18', isBoolean: true, filter: 'isNew', name: 'NEW', filterGroup: '9' },
      { id: '19', isBoolean: true, filter: 'isHit', name: 'HIT', filterGroup: '9' },
      { id: '20', isBoolean: true, filter: 'isDiler', name: 'ДИЛЕР', filterGroup: '9' },
      { id: '21', isBoolean: true, filter: 'country', name: 'Россия', filterGroup: '10' }
    ]
  }),
  getters: {
    getFiltersGroup: (state) => (category) => {
      return state.filtersGroup.filter(group => group.category === category)
    },
    getFilterByGroup: (state) => (group) => {
      return state.filters.filter(filter => filter.filterGroup === group)
    },
    getFiltersByCategory: (state) => (category) => {
      const tempGroups = state.filtersGroup.filter(group => group.category === category)
      // [...state.filtersGroup.filter(group => group.category === category)].map(group => state.filters.filter(filter => filter.filterGroup === group.id))
      return state.filters.filter(filter => tempGroups.some(group => group.id === filter.filterGroup))
    }
  },
  namespaced: true
}
