<template >
    <div class="promotion-section container p-0 ">
        <slider-carusel-vue class="promotion-section__slider"></slider-carusel-vue>
        <promotion-banner-vue class="promotion" :product="product"></promotion-banner-vue>
    </div>
</template>
<script>
import SliderCaruselVue from '@/components/UI/SliderCarusel.vue'
import PromotionBannerVue from '@/components/UI/PromotionBanner.vue'
export default {
  components: {
    SliderCaruselVue, PromotionBannerVue
  },
  props: {
    product: Object
  }
}
</script>
<style lang="scss" scoped>
.promotion-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 35px;
    margin-bottom: 80px;
}
.promotion-section__slider {
    max-width: 870px;
    flex: 0 2 auto;
}
.promotion {
    flex: 0 1 auto;
}
</style>
