<template >
  <nav-bar-vue
    v-if="!NavBarMobileVisible"
    :categories="getLayoutCategories"
    :shoppingСounter="getShoppingCartCounter"
  ></nav-bar-vue>
  <nav-bar-mobile-vue
    v-if="NavBarMobileVisible"
    v-model:show="navBarVisible"
    :categories="getLayoutCategories"
    :shoppingСounter="getShoppingCartCounter"
  ></nav-bar-mobile-vue>
  <promotion-section-vue ></promotion-section-vue>
  <searching-section-vue></searching-section-vue>
  <cetegories-section-vue
    :categories="getMainCategories"
  ></cetegories-section-vue>
  <popular-products-section-vue
    :categories="getCategoriesSubMain"
    @update="updateProducts"
    :products="pageProducts"
    :likedProducts="getLikedProducts"
    @likeToggle="toggleLikedProducts"
    :isMobile="isMobile"
  ></popular-products-section-vue>
  <promotion-banner-sale></promotion-banner-sale>
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
import PromotionBannerSale from '@/components/UI/PromotionBannerSale.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    FooterBarVue, NavBarMobileVue, NavBarVue, PromotionSectionVue, SearchingSectionVue, CetegoriesSectionVue, PopularProductsSectionVue, PromotionBannerSale
  },
  data () {
    return {
      navBarVisible: false,
      NavBarMobileVisible: false,
      isMobile: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    console.log()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations({
      setPageProducts: 'products/setPageProducts',
      toggleLikedProducts: 'user/toggleLikedProducts'
    }),
    ...mapActions({
    }),
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.window.width <= 1024 ? this.NavBarMobileVisible = true : this.NavBarMobileVisible = false
      this.window.width <= 768 ? this.isMobile = true : this.isMobile = false
    },
    updateProducts (categoryId) {
      console.log(this.getPopularProductsInCategory(categoryId, 4))
      this.setPageProducts(this.getPopularProductsInCategory(categoryId, 4))
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      popularCategories: state => state.popularProducts.categories,
      pageProducts: state => state.products.pageProducts,
      user: state => state.user.User
    }),
    ...mapGetters({
      getProductById: 'products/getProductById',
      getPopularProductsInCategory: 'products/getPopularProductsInCategory',
      getLikedProducts: 'user/getLikedProducts',
      getShoppingCartCounter: 'user/getShoppingCartCounter',
      getMainCategories: 'categories/getMainCategories',
      getCategoriesSubMain: 'categories/getCategoriesSubMain',
      getLayoutCategories: 'categories/getLayoutCategories',
      getLayoutCategoriesMobile: 'categories/getLayoutCategoriesMobile'
    })
  }
}
</script>
<style lang="scss">
</style>
