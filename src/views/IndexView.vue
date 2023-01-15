<template >
  <nav-bar-vue v-if="!NavBarMobileVisible"></nav-bar-vue>
  <nav-bar-mobile-vue v-if="NavBarMobileVisible" v-model:show="navBarVisible"></nav-bar-mobile-vue>
  <promotion-section-vue class="promotion-section-m"></promotion-section-vue>
  <searching-section-vue></searching-section-vue>
  <cetegories-section-vue
    :categories="categories"
  ></cetegories-section-vue>
  <footer-bar-vue></footer-bar-vue>
</template>
<script>
import FooterBarVue from '@/components/FooterBar.vue'
import NavBarMobileVue from '@/components/NavBarMobile.vue'
import NavBarVue from '@/components/NavBar.vue'
import PromotionSectionVue from '@/components/PromotionSection.vue'
import SearchingSectionVue from '@/components/SearchingSection.vue'
import CetegoriesSectionVue from '@/components/CetegoriesSection.vue'
import { mapState } from 'vuex'
export default {
  components: {
    FooterBarVue, NavBarMobileVue, NavBarVue, PromotionSectionVue, SearchingSectionVue, CetegoriesSectionVue
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
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.window.width <= 1024 ? this.NavBarMobileVisible = true : this.NavBarMobileVisible = false
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories.categories
    })
  }
}
</script>
<style lang="scss">
.promotion-section-m {
  margin-bottom: 80px;
}
</style>
