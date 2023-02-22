export const FiltersModule = {
  state: () => ({
    filtersGroup: [
      { id: '1', name: 'Наличие', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: 'checkers', expectedValue: null },
      { id: '2', name: 'Новинки', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: 'checkers', expectedValue: null },
      { id: '3', name: 'Цена', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: 'slider', expectedValue: null },
      { id: '4', name: 'Мощность, л.с.', category: ['2'], type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '5', name: 'Мощность двигателя, л.с.', category: ['2'], type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '6', name: 'Макс. скорость', category: ['2'], type: 'select', expectedValue: [{ value: 90, name: 90 }, { value: 130, name: 130 }, { value: 154, name: 154 }, { value: 230, name: 230 }, { value: 300, name: 300 }] },
      { id: '7', name: 'Бренд', category: ['2'], type: 'checkers', expectedValue: null },
      { id: '8', name: 'Модель', category: ['2'], type: 'checkers', expectedValue: null },
      { id: '9', name: 'Акции', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: 'checkers', expectedValue: null },
      { id: '10', name: 'Страны', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: 'checkers', expectedValue: null },
      { id: '11', name: 'Категория', category: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'], type: null, expectedValue: null }
    ],
    filters: [
      { id: '1', value: true, filter: 'isStock', name: 'В наличие', filterGroup: '1', controll: [] },
      { id: '2', value: true, filter: 'isOrder', name: 'Под заказ', filterGroup: '1', controll: [] },
      { id: '3', value: true, filter: 'isAll', name: 'Все', filterGroup: '2', controll: ['4', '5'] },
      { id: '4', value: false, filter: 'isNew', name: 'Новинки', filterGroup: '2', controll: ['3'] },
      { id: '5', value: false, filter: 'isSale', name: 'Акции', filterGroup: '2', controll: ['3'] },
      { id: '6', value: 0, filter: 'priceBottom', name: 'Цена', filterGroup: '3', controll: [] },
      { id: '22', value: 2000000, filter: 'priceTop', name: 'Цена', filterGroup: '3', controll: [] },
      { id: '7', value: null, filter: 'power', name: 'Мощность, л.с.', filterGroup: '4', controll: [] },
      { id: '8', value: null, filter: 'enginePower', name: 'Мощность двигателя, л.с.', filterGroup: '5', controll: [] },
      { id: '9', value: null, filter: 'highSpeed', name: 'Макс. скорость', filterGroup: '6', controll: [] },
      { id: '10', value: false, filter: 'brands', name: 'BRP', filterGroup: '7', controll: [] },
      { id: '11', value: false, filter: 'brands', name: 'Spark 2', filterGroup: '7', controll: [] },
      { id: '12', value: false, filter: 'brands', name: 'Spark 3', filterGroup: '7', controll: [] },
      { id: '13', value: false, filter: 'models', name: 'Sea-doo Spark 2', filterGroup: '8', controll: [] },
      { id: '17', value: false, filter: 'isSale', name: 'SALE', filterGroup: '9', controll: [] },
      { id: '18', value: false, filter: 'isNew', name: 'NEW', filterGroup: '9', controll: [] },
      { id: '19', value: false, filter: 'isHit', name: 'HIT', filterGroup: '9', controll: [] },
      { id: '20', value: false, filter: 'isDiler', name: 'ДИЛЕР', filterGroup: '9', controll: [] },
      { id: '21', value: false, filter: 'country', name: 'Россия', filterGroup: '10', controll: [] },
      { id: '24', value: false, filter: 'country', name: 'Канада', filterGroup: '10', controll: [] },
      { id: '23', value: {}, filter: 'category', name: 'Категория', filterGroup: '11', controll: [] }
    ],
    pageGroups: [],
    pageFilters: [],
    popularFilters: []
  }),
  getters: {
    getFiltersGroup: (state) => (category) => {
      return state.filtersGroup.filter(group => group.category.includes(category))
    },
    getFilterByGroup: (state) => (group) => {
      return state.filters.filter(filter => filter.filterGroup === group)
    },
    getFiltersByCategory: (state) => (category) => {
      const tempGroups = state.filtersGroup.filter(group => group.category.includes(category))
      // [...state.filtersGroup.filter(group => group.category === category)].map(group => state.filters.filter(filter => filter.filterGroup === group.id))
      return state.filters.filter(filter => tempGroups.some(group => group.id === filter.filterGroup))
    },
    getPopularFilters: (state) => {
      return state.popularFilters
    }
  },
  mutations: {
    setPageGroups: (state, category) => {
      state.pageGroups = state.filtersGroup.filter(group => group.category.includes(category))
    },
    setPageFilters: (state) => {
      function copy (obj) {
        function copyProps (clone) {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              clone[key] = copy(obj[key])
            }
          }
        }
        function cloneObj () {
          const clone = {}
          copyProps(clone)
          return clone
        }
        function cloneArr () {
          return obj.map(function (item) {
            return copy(item)
          })
        }
        const type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
        if (type === 'object') return cloneObj()
        if (type === 'array') return cloneArr()
        return obj
      }
      state.pageFilters = copy(state.filters.filter(filter => state.pageGroups.some(group => group.id === filter.filterGroup)))
    },
    setPopularFilters: (state) => {
      const tempFilters = state.pageFilters.filter(filter => filter.filterGroup === '10' || filter.filterGroup === '8' || filter.filterGroup === '7')
      state.popularFilters = tempFilters.sort(() => Math.random() - 0.5).slice(0, 5)
    }
  },
  actions: {
    updateFilter: ({ state }, newFilter) => {
      state.pageFilters.forEach((filter, i) => {
        if (filter.id === newFilter.id) { state.pageFilters[i] = newFilter }
        if (newFilter.controll.length > 0 && newFilter.value) {
          for (const filterId of newFilter.controll) {
            console.log(filterId)
            state.pageFilters.find(filter => filter.id === filterId).value = false
          }
        }
      })
    }
  },
  namespaced: true
}
