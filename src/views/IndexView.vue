<template >
  <layout-page-vue>
    <promotion-section-vue
      :product="getSaleProduct"></promotion-section-vue>
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
    <promotion-banner-sale
    :sale="getSale"></promotion-banner-sale>
  </layout-page-vue>
</template>
<script>
import LayoutPageVue from '@/layout/LayoutPage.vue'
import PromotionSectionVue from '@/components/PromotionSection.vue'
import SearchingSectionVue from '@/components/SearchingSection.vue'
import CetegoriesSectionVue from '@/components/CetegoriesSection.vue'
import PopularProductsSectionVue from '@/components/PopularProductsSection.vue'
import PromotionBannerSale from '@/components/UI/PromotionBannerSale.vue'
import widthTrackingMixin from '@/mixins/widthTrackingMixin'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  mixins: [widthTrackingMixin],
  components: {
    LayoutPageVue, PromotionSectionVue, SearchingSectionVue, CetegoriesSectionVue, PopularProductsSectionVue, PromotionBannerSale
  },
  methods: {
    ...mapMutations({
      setPageProducts: 'products/setPageProducts',
      toggleLikedProducts: 'user/toggleLikedProducts'
    }),
    ...mapActions({
      updateInformation: 'products/update'
    }),
    updateProducts (categoryId) {
      this.setPageProducts(this.getPopularProductsInCategory(categoryId, 4))
    }
  },
  created () {
    this.updateInformation()
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      popularCategories: state => state.popularProducts.categories,
      pageProducts: state => state.products.pageProducts,
      user: state => state.user.User
    }),
    ...mapGetters({
      getProducts: 'products/getProducts',
      getSaleProduct: 'products/getSaleProduct',
      getProductById: 'products/getProductById',
      getPopularProductsInCategory: 'products/getPopularProductsInCategory',
      getLikedProducts: 'user/getLikedProducts',
      getMainCategories: 'categories/getMainCategories',
      getCategoriesSubMain: 'categories/getCategoriesSubMain',
      getSale: 'sales/getSale'
    })
  }
}
</script>
<style lang="scss">
</style>
