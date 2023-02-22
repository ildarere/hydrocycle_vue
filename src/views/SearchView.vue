<template >
  <layout-page-vue>
    <searching-section-vue></searching-section-vue>
    <shopping-cart-dialog
      @close="showToggle"
      v-if="isShow"
      :product="tempProd"
      @addincart="addProductInShoppingCartMethod"
    >
    </shopping-cart-dialog>
    <div class="container">
      <div class="product-container">
        <product-card
          v-for="(product, index) in getPageProducts" :key="index"
            :product="product"
            :isLiked="getLikedProducts.includes(product.id) ? true : false"
            @likeToggle="toggleLikedProducts"
            @showcart="showcart(product.id)"
          ></product-card>
      </div>
    </div>
    <page-wrapper
      :currentPage="getPage"
      :totalPages="getTotalPages"
      @changepage="setPage">
    </page-wrapper>
  </layout-page-vue>
</template>
<script>
import LayoutPageVue from '@/layout/LayoutPage.vue'
import SearchingSectionVue from '@/components/SearchingSection.vue'
import widthTrackingMixin from '@/mixins/widthTrackingMixin'
import showToggleMixin from '@/mixins/showToggleMixin'
import ShoppingCartDialog from '@/components/UI/ShoppingCartDialog.vue'
import PageWrapper from '@/components/UI/PageWrapper.vue'
import ProductCard from '@/components/UI/ProductCard.vue'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  mixins: [widthTrackingMixin, showToggleMixin],
  data () {
    return {
      tempProd: {}
    }
  },
  components: {
    LayoutPageVue, SearchingSectionVue, ShoppingCartDialog, PageWrapper, ProductCard
  },
  methods: {
    ...mapMutations({
      setPageProducts: 'products/setPageProducts',
      toggleLikedProducts: 'user/toggleLikedProducts',
      addProductInShoppingCart: 'user/addProductInShoppingCart',
      minusProduct: 'products/minusProduct',
      setPage: 'products/setPage',
      setProductsByReq: 'products/setProductsByReq'
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
  mounted () {
    this.setProductsByReq(this.$route.query)
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
      getProductById: 'products/getProductById',
      getLikedProducts: 'user/getLikedProducts',
      getSales: 'sales/getSales',
      getTotalPages: 'products/getTotalPages',
      getPage: 'products/getPage',
      getProductsByReq: 'products/getProductsByReq',
      getPageProducts: 'products/getPageProducts'
    })
  }
}
</script>
<style lang="scss" scoped>
.product-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
