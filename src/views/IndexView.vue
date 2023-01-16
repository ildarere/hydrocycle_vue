<template >
  <nav-bar-vue v-if="!NavBarMobileVisible"></nav-bar-vue>
  <nav-bar-mobile-vue v-if="NavBarMobileVisible" v-model:show="navBarVisible"></nav-bar-mobile-vue>
  <promotion-section-vue class="promotion-section-m"></promotion-section-vue>
  <searching-section-vue></searching-section-vue>
  <cetegories-section-vue
    :categories="categories"
  ></cetegories-section-vue>
  <popular-products-section-vue
    :categories="popularCategories"
    @update="updateProducts"
    :products="pageProducts"
  ></popular-products-section-vue>
  <footer-bar-vue></footer-bar-vue>
</template>
<script>
import FooterBarVue from '@/components/FooterBar.vue'
import NavBarMobileVue from '@/components/NavBarMobile.vue'
import NavBarVue from '@/components/NavBar.vue'
import PromotionSectionVue from '@/components/PromotionSection.vue'
import SearchingSectionVue from '@/components/SearchingSection.vue'
import CetegoriesSectionVue from '@/components/CetegoriesSection.vue'
import PopularProductsSectionVue from '@/components/PopularProductsSection.vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    FooterBarVue, NavBarMobileVue, NavBarVue, PromotionSectionVue, SearchingSectionVue, CetegoriesSectionVue, PopularProductsSectionVue
  },
  data () {
    return {
      navBarVisible: false,
      NavBarMobileVisible: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations({
      setPageProducts: 'products/setPageProducts'
    }),
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.window.width <= 1024 ? this.NavBarMobileVisible = true : this.NavBarMobileVisible = false
    },
    updateProducts (categoryId) {
      const productsId = this.popularCategories.find(category => category.id === categoryId).products
      const products = []
      for (const id of productsId) {
        products.push(this.getProductById(id))
      }
      this.setPageProducts(products)
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      popularCategories: state => state.popularProducts.categories,
      pageProducts: state => state.products.pageProducts
    }),
    ...mapGetters({
      getProductById: 'products/getProductById'
    })
  }
}
</script>
<style lang="scss">
.promotion-section-m {
  margin-bottom: 80px;
}
</style>
