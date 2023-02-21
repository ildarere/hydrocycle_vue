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
      @showcart="showcart"
    ></popular-products-section-vue>
    <promotion-banner-sale
    :sale="getSale"></promotion-banner-sale>
    <shopping-cart-dialog
      @close="showToggle"
      v-if="isShow"
      :product="tempProd"
      @addincart="addProductInShoppingCartMethod"
    >
    </shopping-cart-dialog>
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
import showToggleMixin from '@/mixins/showToggleMixin'
import ShoppingCartDialog from '@/components/UI/ShoppingCartDialog.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  mixins: [widthTrackingMixin, showToggleMixin],
  data () {
    return {
      tempProd: {}
    }
  },
  components: {
    LayoutPageVue, PromotionSectionVue, SearchingSectionVue, CetegoriesSectionVue, PopularProductsSectionVue, PromotionBannerSale, ShoppingCartDialog
  },
  methods: {
    ...mapMutations({
      setPageProducts: 'products/setPageProducts',
      toggleLikedProducts: 'user/toggleLikedProducts',
      addProductInShoppingCart: 'user/addProductInShoppingCart',
      minusProduct: 'products/minusProduct'
    }),
    ...mapActions({
      updateInformation: 'products/update'
    }),
    updateProducts (categoryId) {
      this.setPageProducts(this.getPopularProductsInCategory(categoryId, 8))
    },
    showcart (productId) {
      this.showToggle()
      this.tempProd = this.getProductById(productId)
    },
    addProductInShoppingCartMethod (id, count) {
      this.showToggle()
      this.addProductInShoppingCart({ id: id, count: count })
      this.minusProduct({ id: id, count: count })
    }
  },
  created () {
    this.updateInformation(this.getSales)
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
      getSale: 'sales/getSale',
      getSales: 'sales/getSales'
    })
  }
}
</script>
<style lang="scss">
</style>
