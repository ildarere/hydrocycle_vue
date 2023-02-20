<template >
    <nav-bar-vue
    v-if="!isMedium"
    :categories="getLayoutCategories"
    :shoppingСounter="getShoppingCartCounter"
  ></nav-bar-vue>
  <nav-bar-mobile-vue
    v-if="isMedium"
    v-model:show="navBarVisible"
    :categories="getLayoutCategories"
    :shoppingСounter="getShoppingCartCounter"
  ></nav-bar-mobile-vue>
  <slot></slot>
  <footer-bar-vue></footer-bar-vue>
</template>
<script>
import { mapGetters } from 'vuex'
import FooterBarVue from '@/components/FooterBar.vue'
import NavBarMobileVue from '@/components/NavBarMobile.vue'
import NavBarVue from '@/components/NavBar.vue'
import widthTrackingMixin from '@/mixins/widthTrackingMixin'
export default {
  mixins: [widthTrackingMixin],
  data () {
    return {
      navBarVisible: false
    }
  },
  components: {
    FooterBarVue, NavBarMobileVue, NavBarVue
  },
  computed: {
    ...mapGetters({
      getLayoutCategories: 'categories/getLayoutCategories',
      getLayoutCategoriesMobile: 'categories/getLayoutCategoriesMobile',
      getShoppingCartCounter: 'user/getShoppingCartCounter'
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
