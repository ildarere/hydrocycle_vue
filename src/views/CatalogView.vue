<template >
  <layout-page-vue>
    <bread-crumb-vue
      :category="category"
    ></bread-crumb-vue>
    <catalog-section-vue
      :category="category"
      :products="getProductsInCategory(category.id, 5)"
      :likedProducts="getLikedProducts"
      @likeToggle="toggleLikedProducts"
      :filtersGroup="getFiltersGroup('0')"
      :filters="getFiltersByCategory('0')"
      >
    </catalog-section-vue>
  </layout-page-vue>
</template>
<script>
import LayoutPageVue from '@/layout/LayoutPage.vue'
import BreadCrumbVue from '@/components/UI/BreadCrumb.vue'
import CatalogSectionVue from '@/components/CatalogSection.vue'
import { mapGetters, mapMutations } from 'vuex'
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
  },
  watch: {
    $route () {
      this.category = this.getCategoryById(this.$route.query.category)
    }
  },
  methods: {
    ...mapMutations({
      toggleLikedProducts: 'user/toggleLikedProducts'
    })
  },
  computed: {
    ...mapGetters({
      getLikedProducts: 'user/getLikedProducts',
      getCategoryById: 'categories/getCategoryById',
      getProductsInCategory: 'products/getProductsInCategory',
      getFiltersGroup: 'filters/getFiltersGroup',
      getFilterByGroup: 'filters/getFilterByGroup',
      getFiltersByCategory: 'filters/getFiltersByCategory'
    })
  }
}
</script>
<style lang="scss">
</style>
