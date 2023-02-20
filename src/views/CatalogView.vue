<template >
  <layout-page-vue>
    <bread-crumb-vue
      :category="category"
    ></bread-crumb-vue>
    <catalog-section-vue
      :category="category"
      :products="getPageProducts"
      :likedProducts="getLikedProducts"
      @likeToggle="toggleLikedProducts"
      :filtersGroup="pageGroups"
      :filters="pageFilters"
      @update="updateFilter"
      @updateproducts="updateProducts(pageFilters, category)"
      :totalPages="getTotalPages"
      :currentPage="getPage"
      @changepage="setPage"
      :sortFilters="sortOptions"
      @sort="sort"
      :popularFilters="getPopularFilters"
      >
    </catalog-section-vue>
  </layout-page-vue>
</template>
<script>
import LayoutPageVue from '@/layout/LayoutPage.vue'
import BreadCrumbVue from '@/components/UI/BreadCrumb.vue'
import CatalogSectionVue from '@/components/CatalogSection.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: {
    LayoutPageVue, BreadCrumbVue, CatalogSectionVue
  },
  data () {
    return {
      category: {}
    }
  },
  created () {
    this.category = this.getCategoryById(this.$route.query.category)
    this.setPageGroups(this.category.id)
    this.setPageFilters()
    this.pageFilters.find(filter => filter.filter === 'category').value = this.category
    this.setPopularFilters()
    this.updateProducts(this.pageFilters, this.category)
  },
  watch: {
    $route () {
      this.category = this.getCategoryById(this.$route.query.category)
      this.setPageGroups(this.category.id)
      this.setPageFilters()
      this.pageFilters.find(filter => filter.filter === 'category').value = this.category
      this.setPopularFilters()
      this.updateProducts(this.pageFilters, this.category)
    }
  },
  methods: {
    ...mapMutations({
      toggleLikedProducts: 'user/toggleLikedProducts',
      setPageFilters: 'filters/setPageFilters',
      setPageGroups: 'filters/setPageGroups',
      setPage: 'products/setPage',
      setPopularFilters: 'filters/setPopularFilters'
    }),
    ...mapActions({
      updateFilter: 'filters/updateFilter',
      updateProducts: 'products/updateProducts',
      sort: 'products/sort'
    })
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
      getCategoryById: 'categories/getCategoryById',
      getProductsInCategory: 'products/getProductsInCategory',
      getFiltersGroup: 'filters/getFiltersGroup',
      getFilterByGroup: 'filters/getFilterByGroup',
      getFiltersByCategory: 'filters/getFiltersByCategory',
      getTotalPages: 'products/getTotalPages',
      getPage: 'products/getPage',
      getPageProducts: 'products/getPageProducts',
      getPopularFilters: 'filters/getPopularFilters'
    })
  }
}
</script>
<style lang="scss">
</style>
