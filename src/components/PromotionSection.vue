!<template >
    <div class="promotion-section container p-0">
        <slider-carusel-vue class="promotion-section__slider"></slider-carusel-vue>
        <promotion-banner-vue class="promotion"></promotion-banner-vue>
    </div>
</template>
<script>
import SliderCaruselVue from '@/components/UI/SliderCarusel.vue'
import PromotionBannerVue from '@/components/UI/PromotionBanner.vue'
export default {
  components: {
    SliderCaruselVue, PromotionBannerVue
  }
}
</script>
<style lang="scss" scoped>
.promotion-section {
    display: grid;
    grid-template-columns: repeat(12, 1fr) ;
    gap: 40px;
    margin-bottom: 80px;
}
.promotion-section__slider {
    grid-column: span 9;
}
.promotion {
    grid-column: span 3;
}
@media screen and (max-width: 1024px) {
    .promotion-section {
    gap: 0;
}
.promotion-section__slider {
    grid-column: span 12;
}
.promotion {
    grid-column: 5 / span 3;
}
}
</style>
