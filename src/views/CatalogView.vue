<template >
  <layout-page-vue>
    <bread-crumb-vue
      :category="category"
    ></bread-crumb-vue>
    <searching-section-vue v-if="category.id === '13'"></searching-section-vue>
    <catalog-section-vue
      :category="category"
      :products="getPageProducts"
      :likedProducts="getLikedProducts"
      @likeToggle="toggleLikedProducts"
      :filtersGroup="pageGroups"
      :filters="pageFilters"
      @update="updateFilter"
      @updateproducts="updateProductsF(pageFilters, category)"
      :totalPages="getTotalPages"
      :currentPage="getPage"
      @changepage="setPage"
      :sortFilters="sortOptions"
      @sort="sort"
      :popularFilters="getPopularFilters"
      @showcart="showcart"
      >
    </catalog-section-vue>
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
import BreadCrumbVue from '@/components/UI/BreadCrumb.vue'
import CatalogSectionVue from '@/components/CatalogSection.vue'
import ShoppingCartDialog from '@/components/UI/ShoppingCartDialog.vue'
import showToggleMixin from '@/mixins/showToggleMixin'
import SearchingSectionVue from '@/components/SearchingSection.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    LayoutPageVue, BreadCrumbVue, CatalogSectionVue, ShoppingCartDialog, SearchingSectionVue
  },
  mixins: [showToggleMixin],
  data () {
    return {
      category: {},
      tempProd: {}
    }
  },
  created () {
    this.updateInformation(this.getSales)
    this.category = this.getCategoryByName(this.$route.params.category)
    this.setPageGroups(this.category.id)
    this.setPageFilters()
    this.pageFilters.find(filter => filter.filter === 'category').value = this.category
    this.setPopularFilters()
    this.updateProducts(this.pageFilters, this.category)
    if (this.category.id === '13') {
      this.setProductsByReq(this.$route.query)
    }
    this.setPage(1)
  },
  watch: {
    $route () {
      this.category = this.getCategoryByName(this.$route.params.category)
      this.setPageGroups(this.category.id)
      this.setPageFilters()
      this.pageFilters.find(filter => filter.filter === 'category').value = this.category
      this.setPopularFilters()
      this.updateProducts(this.pageFilters, this.category)
      if (this.category.id === '13') {
        this.setProductsByReq(this.$route.query)
      }
      this.setPage(1)
    }
  },
  methods: {
    ...mapMutations({
      toggleLikedProducts: 'user/toggleLikedProducts',
      setPageFilters: 'filters/setPageFilters',
      setPageGroups: 'filters/setPageGroups',
      setPage: 'products/setPage',
      setPopularFilters: 'filters/setPopularFilters',
      addProductInShoppingCart: 'user/addProductInShoppingCart',
      minusProduct: 'products/minusProduct',
      setProductsByReq: 'products/setProductsByReq'
    }),
    ...mapActions({
      updateFilter: 'filters/updateFilter',
      updateProducts: 'products/updateProducts',
      updateInformation: 'products/update',
      sort: 'products/sort'
    }),
    showcart (productId) {
      this.showToggle()
      this.tempProd = this.getProductById(productId)
    },
    addProductInShoppingCartMethod (id, count) {
      this.showToggle()
      this.addProductInShoppingCart({ id: id, count: count })
      this.minusProduct({ id: id, count: count })
    },
    updateProductsF (pageFilters, category) {
      this.updateProducts(pageFilters, category)
      if (this.category.id === '13') {
        this.setProductsByReq(this.$route.query)
      }
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories,
      user: state => state.user.User,
      pageGroups: state => state.filters.pageGroups,
      pageFilters: state => state.filters.pageFilters,
      sortOptions: state => state.products.sortOptions
    }),
    ...mapGetters({
      getLikedProducts: 'user/getLikedProducts',
      getCategoryByName: 'categories/getCategoryByName',
      getCategoryById: 'categories/getCategoryById',
      getProductsInCategory: 'products/getProductsInCategory',
      getProductById: 'products/getProductById',
      getFiltersGroup: 'filters/getFiltersGroup',
      getFilterByGroup: 'filters/getFilterByGroup',
      getFiltersByCategory: 'filters/getFiltersByCategory',
      getTotalPages: 'products/getTotalPages',
      getPage: 'products/getPage',
      getPageProducts: 'products/getPageProducts',
      getPopularFilters: 'filters/getPopularFilters',
      getSales: 'sales/getSales'
    })
  }
}
</script>
<style lang="scss">
</style>
