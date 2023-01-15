export const categoriesModule = {
  state: () => ({
    categories: [
      { id: '1', name: 'Квадроциклы', img: 'atv.png' },
      { id: '2', name: 'Гидроциклы', img: 'hydrocyrcle.png' },
      { id: '3', name: 'Катера', img: 'speedboat.png' },
      { id: '4', name: 'Снегоходы', img: 'snowmobile.png' },
      { id: '5', name: 'Вездеходы', img: 'cross-country-vehicle.png' },
      { id: '6', name: 'Двигатели', img: 'engine.png' }
    ]
  }),
  namespaced: true
}
