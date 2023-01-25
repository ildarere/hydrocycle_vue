<template >
  <layout-page-vue>
    <bread-crumb-vue
      :category="category"
    ></bread-crumb-vue>
  </layout-page-vue>
</template>
<script>
import LayoutPageVue from '@/layout/LayoutPage.vue'
import BreadCrumbVue from '@/components/UI/BreadCrumb.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    LayoutPageVue, BreadCrumbVue
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
  computed: {
    ...mapGetters({
      getCategoryById: 'categories/getCategoryById'
    })
  }
}
</script>
<style lang="scss">
</style>
