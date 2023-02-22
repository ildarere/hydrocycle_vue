export const productsModule = {
  state: () => ({
    products: [
      { id: '1', name: 'Водонепроницаемый Рюкзак', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '2', name: 'Спасательный жилет BRP Men\'s Airflow PFD', img: 'BRP Audio-Premium System.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 6900, finalPrice: 5000, saleEndDate: new Date(2023, 1, 30), isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '3', name: 'BRP Audio-Premium System', img: 'BRP Mens Airflow PFD.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 68000, finalPrice: 68000, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '4', name: 'Спасательное снаряжение', img: 'Rescue equipment.png', category: '7', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30), isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '5', name: 'BRP Audio-портативная система', img: 'BRP Audio-портативная система.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 7500, saleEndDate: new Date(2023, 1, 30), isNew: false, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '6', name: 'Garmin Echomap Plus 62cv', img: 'Garmin Echomap Plus 62cv.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 45800, finalPrice: 45800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '7', name: 'RF D.E.S.S.TM Key', img: 'RF D.E.S.S.TM Key.png', category: '10', with_this_product: ['2', '3', '4'], isSale: true, count: 0, price: 9800, finalPrice: 8000, saleEndDate: new Date(2023, 1, 30), isNew: false, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '8', name: 'Мужской костюм 3мм', img: 'Мужской костюм 3мм.png', category: '10', with_this_product: ['2', '3', '4'], isSale: false, count: 11, price: 7000, finalPrice: 7000, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '9', name: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\\Mango', img: 'BRP SeaDoo GTI 130hp SE Black.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1049500, finalPrice: 1049500, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTI 130hp SE Black\\Mango', isMain: true }, { name: 'brand', value: 'Spark 3', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 230, isMain: true }, { name: 'enginePower', value: 230, isMain: true }, { name: 'highSpeed', value: 230, isMain: true }] },
      { id: '10', name: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic', img: 'BRP SeaDoo GTI 155hp SE Long Blue Metallic.png', category: '2', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 1100475, finalPrice: 1100475, saleEndDate: new Date(2023, 1, 30), isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTI 155hp SE Long Blue Metallic', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 130, isMain: true }, { name: 'enginePower', value: 130, isMain: true }, { name: 'highSpeed', value: 130, isMain: true }] },
      { id: '11', name: 'Гидроцикл BRP SeaDoo GTR 230hp X California green ', img: 'BRP SeaDoo GTR 230hp X California green.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1323700, finalPrice: 1323700, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTR 230hp X California green', isMain: true }, { name: 'brand', value: 'BRP', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 130, isMain: true }, { name: 'enginePower', value: 300, isMain: true }, { name: 'highSpeed', value: 300, isMain: true }] },
      { id: '12', name: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream', img: 'BRP SeaDoo GTR 230hp STD Black Gulfstream.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1323700, finalPrice: 1323700, saleEndDate: null, isNew: false, parametrs: [{ name: 'model', value: 'SeaDoo GTR 230hp STD Black / Gulfstream', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 90, isMain: true }, { name: 'enginePower', value: 90, isMain: true }, { name: 'highSpeed', value: 130, isMain: true }] },
      { id: '13', name: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal', img: 'BRP SeaDoo GTX 300hp LTD Liquid Metal.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1543000, finalPrice: 1543000, saleEndDate: null, isNew: false, parametrs: [{ name: 'model', value: 'SeaDoo GTX 300hp LTD Liquid Metal', isMain: true }, { name: 'brand', value: 'Spark 3', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 230, isMain: true }, { name: 'enginePower', value: 90, isMain: true }, { name: 'highSpeed', value: 300, isMain: true }] },
      { id: '14', name: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up', img: 'BRP SeaDoo Spark 60hp 2 up.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 732345, finalPrice: 732345, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'Sea-doo Spark 2', isMain: true }, { name: 'brand', value: 'BRP', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 300, isMain: true }, { name: 'enginePower', value: 230, isMain: true }, { name: 'highSpeed', value: 130, isMain: true }] },
      { id: '15', name: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental', img: 'BRP SeaDoo Spark GTS 90hp Rental.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 857666, finalPrice: 857666, saleEndDate: null, isNew: false, parametrs: [{ name: 'model', value: 'SeaDoo Spark GTS 90hp Rental', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Россия', isMain: true }, { name: 'power', value: 130, isMain: true }, { name: 'enginePower', value: 90, isMain: true }, { name: 'highSpeed', value: 90, isMain: true }] },
      { id: '16', name: 'Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue', img: 'BRP SeaDoo WAKE 230hp PRO Teal blue.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1229711, finalPrice: 1229711, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo WAKE 230hp PRO Teal blue', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 90, isMain: true }, { name: 'enginePower', value: 300, isMain: true }, { name: 'highSpeed', value: 230, isMain: true }] },
      { id: '17', name: 'Гидроцикл BRP SeaDoo GTI 130hp SE Black\\Mango', img: 'BRP SeaDoo GTI 130hp SE Black.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1049500, finalPrice: 1049500, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTI 130hp SE Black\\Mango', isMain: true }, { name: 'brand', value: 'BRP', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 230, isMain: true }, { name: 'enginePower', value: 300, isMain: true }, { name: 'highSpeed', value: 90, isMain: true }] },
      { id: '18', name: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic', img: 'BRP SeaDoo GTI 155hp SE Long Blue Metallic.png', category: '2', with_this_product: ['2', '3', '4'], isSale: true, count: 10, price: 1100475, finalPrice: 1100474, saleEndDate: new Date(2023, 1, 30), isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTI 155hp SE Long Blue Metallic', isMain: true }, { name: 'brand', value: 'Spark 3', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 90, isMain: true }, { name: 'enginePower', value: 90, isMain: true }, { name: 'highSpeed', value: 300, isMain: true }] },
      { id: '19', name: 'Гидроцикл BRP SeaDoo GTR 230hp X California green ', img: 'BRP SeaDoo GTR 230hp X California green.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1323700, finalPrice: 1323700, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTR 230hp X California green', isMain: true }, { name: 'brand', value: 'Spark 3', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 90, isMain: true }, { name: 'enginePower', value: 130, isMain: true }, { name: 'highSpeed', value: 130, isMain: true }] },
      { id: '20', name: 'Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream', img: 'BRP SeaDoo GTR 230hp STD Black Gulfstream.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 0, price: 1323700, finalPrice: 1323700, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'SeaDoo GTR 230hp STD Black / Gulfstream', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 130, isMain: true }, { name: 'enginePower', value: 130, isMain: true }, { name: 'highSpeed', value: 90, isMain: true }] },
      { id: '21', name: 'Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal', img: 'BRP SeaDoo GTX 300hp LTD Liquid Metal.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 1543000, finalPrice: 1543000, saleEndDate: null, isNew: false, parametrs: [{ name: 'model', value: 'SeaDoo GTX 300hp LTD Liquid Metal', isMain: true }, { name: 'brand', value: 'Spark 2', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 300, isMain: true }, { name: 'enginePower', value: 300, isMain: true }, { name: 'highSpeed', value: 230, isMain: true }] },
      { id: '22', name: 'Гидроцикл BRP SeaDoo Spark 60hp 2 up', img: 'BRP SeaDoo Spark 60hp 2 up.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 732345, finalPrice: 732345, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: 'Sea-doo Spark 2', isMain: true }, { name: 'brand', value: 'BRP', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 230, isMain: true }, { name: 'enginePower', value: 130, isMain: true }, { name: 'highSpeed', value: 90, isMain: true }] },
      { id: '23', name: 'Гидроцикл BRP SeaDoo Spark GTS 90hp Rental', img: 'BRP SeaDoo Spark GTS 90hp Rental.png', category: '2', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 857666, finalPrice: 857666, saleEndDate: null, isNew: false, parametrs: [{ name: 'model', value: 'SeaDoo Spark GTS 90hp Rental', isMain: true }, { name: 'brand', value: 'BRP', isMain: true }, { name: 'country', value: 'Канада', isMain: true }, { name: 'power', value: 90, isMain: true }, { name: 'enginePower', value: 90, isMain: true }, { name: 'highSpeed', value: 130, isMain: true }] },
      { id: '24', name: 'Мотор', img: 'motor-product.png', category: '8', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '25', name: 'Шина для квадроцикла Wanda P376 26x10.00 -12 6PR TL', img: '5e04687a1ebb9f355d6adbb76ebc63dc.jpg', category: '9', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 7800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '26', name: 'Гаечный ключ BRP', img: 'png-transparent-adjustable-spanner-car-car.png', category: '11', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '27', name: 'Очки для плавания BRP', img: 'png-transparent-goggles-swimming-glasses-swans-goggles-lens-sport-swimming-pool.png', category: '12', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '28', name: 'Квадроцикл', img: 'atv.png', category: '1', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '29', name: 'Катер', img: 'speedboat.png', category: '3', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '30', name: 'Снегоход', img: 'snowmobile.png', category: '4', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '31', name: 'Вездеход', img: 'cross-country-vehicle.png', category: '5', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '32', name: 'Двигатель', img: 'engine.png', category: '6', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '33', name: 'Водонепроницаемый Рюкзак2', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] },
      { id: '34', name: 'Водонепроницаемый Рюкзак3', img: 'Backpack.png', category: '7', with_this_product: ['2', '3', '4'], isSale: false, count: 10, price: 9800, finalPrice: 9800, saleEndDate: null, isNew: true, parametrs: [{ name: 'model', value: '', isMain: true }, { name: 'brand', value: '', isMain: true }, { name: 'country', value: '', isMain: true }] }
    ],
    pageProducts: [],
    totalPages: 10,
    pageLimit: 12,
    page: 1,
    sortOptions: [
      { value: 'popular', name: 'По популярнсти' },
      { value: 'price', name: 'По цене' }
    ]
  }),
  getters: {
    getPageProducts: (state) => {
      return state.pageProducts.slice(state.pageLimit * (state.page - 1), state.pageLimit * state.page)
    },
    getProducts: (state) => {
      return state.products
    },
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    getPopularProductsInCategory: (state) => (categoryId, limit) => {
      return state.products.filter(product => product.category === categoryId).slice(0, limit)
    },
    getProductsInCategory: (state) => (categoryId, limit) => {
      return state.products.filter(product => product.category === categoryId).slice(0, limit)
    },
    getSaleProduct: (state) => {
      const sales = state.products.filter(product => product.isSale === true)
      const rand = Math.floor(Math.random() * sales.length)
      console.log(sales[rand])
      return sales[rand]
    },
    getTotalPages: (state) => {
      return state.totalPages
    },
    getPage: (state) => {
      return state.page
    },
    getProductsByReq: (state) => (req) => {
      return state.products
    }
  },
  mutations: {
    setPageProducts (state, products) {
      state.pageProducts = products
    },
    setIsSale: (state, saleProduct) => () => {
      state.products.find(saleProduct.product).isSale = saleProduct.isSale
    },
    setTotalPages: (state, totalPages) => {
      state.totalPages = totalPages
    },
    setPage: (state, page) => {
      state.page = page
    },
    sortByPrice: (state) => {
      state.pageProducts.sort((a, b) => a.finalPrice - b.finalPrice)
    },
    sortByPopular: (state) => {
      state.pageProducts.sort(() => Math.random() - 0.5)
    },
    minusProduct: (state) => (productMinus) => {
      state.products.find(product => product.id === productMinus.id).count -= productMinus.count
    },
    setProductsByReq: (state, req) => {
    }
  },
  actions: {
    update: ({ state, commit }, sales) => {
      state.products.forEach(product => {
        if (sales.some(sale => sale.categoryId === product.category)) {
          product.finalPrice = product.price * sales.find(sale => sale.categoryId === product.category).discount / 100
        }
        product.price > product.finalPrice ? product.isSale = true : product.isSale = false
        Math.random() - 0.5 > 0
          ? product.isDiler = true
          : product.isDiler = false
        if (product.isSale) { product.saleEndDate = new Date(2023, 1, 30) }
        Math.random() - 0.5 > 0
          ? product.isHit = true
          : product.isHit = false
        // product.price > product.finalPrice ? commit('setIsSale', { isSale: true, product: product }) : commit('setIsSale', { isSale: false, product: product })
        // if (product.saleEndDate >= new Date()) { commit('setIsSale', { isSale: false, product: product }) }
        const zeroNum = '000000'
        product.number = zeroNum.substring(product.id, 14) + product.id
      })
    },
    sort: ({ state, commit }, value) => {
      console.log(value)
      switch (value) {
        case 'price':
          commit('sortByPrice')
          break
        case 'popular':
          commit('sortByPopular')
          break
        default:
      }
    },
    updateProducts: ({ state, commit }, filters) => {
      const tempProductList = []
      state.products.forEach(product => {
        filters.forEach(filter => {
          switch (filter.filter) {
            case 'isStock':
              if (filter.value && product.count > 0) {
                tempProductList.push(product)
              }
              break
            case 'isOrder':
              if (filter.value && product.count === 0) {
                tempProductList.push(product)
              }
              break
            default:
              break
          }
        })
      })
      const isMatch = (product) => {
        const isMatchP = []
        filters.forEach(filter => {
          switch (filter.filter) {
            case 'category':
              filter.value.id === product.category
                ? isMatchP.push(true)
                : isMatchP.push(false)
              break
            case 'priceBottom':
              product.price >= filter.value
                ? isMatchP.push(true)
                : isMatchP.push(false)
              break
            case 'priceTop':
              product.price <= filter.value
                ? isMatchP.push(true)
                : isMatchP.push(false)
              break
            case 'power':
              if (product.parametrs.find(param => param.name === 'power')) {
                product.parametrs.find(param => param.name === 'power').value === filter.value || filter.value === null || filter.value === 'null'
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'enginePower':
              if (product.parametrs.find(param => param.name === 'enginePower')) {
                product.parametrs.find(param => param.name === 'enginePower').value === filter.value || filter.value === null || filter.value === 'null'
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'highSpeed':
              if (product.parametrs.find(param => param.name === 'highSpeed')) {
                product.parametrs.find(param => param.name === 'highSpeed').value === filter.value || filter.value === null || filter.value === 'null'
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'isSale':
              if (filter.value) {
                product.isSale === filter.value
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'isNew':
              if (filter.value) {
                product.isNew === filter.value
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'isHit':
              if (filter.value) {
                product.isHit === filter.value
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            case 'isDiler':
              if (filter.value) {
                product.isDiler === filter.value
                  ? isMatchP.push(true)
                  : isMatchP.push(false)
              }
              break
            default:
              isMatchP.push(true)
              break
          }
        })
        return !isMatchP.includes(false)
      }
      const models = filters.filter(filter => filter.filter === 'models')
      const brands = filters.filter(filter => filter.filter === 'brands')
      const country = filters.filter(filter => filter.filter === 'country')
      const isMatchModels = (product) => {
        const isMatchP = []
        models.forEach(filter => {
          if (filter.value) {
            product.parametrs.find(param => param.name === 'model').value === filter.name
              ? isMatchP.push(true)
              : isMatchP.push(false)
          }
        })
        if (isMatchP.length === 0) {
          return true
        }
        return isMatchP.includes(true)
      }
      const isMatchCountry = (product) => {
        const isMatchP = []
        country.forEach(filter => {
          if (filter.value) {
            product.parametrs.find(param => param.name === 'country').value === filter.name
              ? isMatchP.push(true)
              : isMatchP.push(false)
          }
        })
        if (isMatchP.length === 0) {
          return true
        }
        return isMatchP.includes(true)
      }
      const isMatchBrands = (product) => {
        const isMatchP = []
        brands.forEach(filter => {
          if (filter.value) {
            product.parametrs.find(param => param.name === 'brand').value === filter.name
              ? isMatchP.push(true)
              : isMatchP.push(false)
          }
        })
        if (isMatchP.length === 0) {
          return true
        }
        return isMatchP.includes(true)
      }
      commit('setPageProducts', tempProductList.filter(isMatch).filter(isMatchModels).filter(isMatchCountry).filter(isMatchBrands))
      commit('setTotalPages', Math.ceil(state.pageProducts.length / state.pageLimit))
    }
  },
  namespaced: true
}
