<template >
<div id="carouselWithIndicators" class="carousel slide" data-bs-ride="carousel">
   <ol class="carousel-indicators">
      <li data-bs-target="#carouselWithIndicators"
        v-for="(prod, index) in 3"
        :key="index"
        :data-bs-slide-to="index"
        :class="{active: index === 0}"
        class="indicator"
      ></li>
   </ol>
   <div class="carousel-inner ">
      <div class="carousel-item  " v-for="(prod, index) in 3" :key="index" :class="{active: index === 0}">
        <img :src="require(`@/assets/carusel/banner${index+1}.png`)" class="d-block w-100 carousel-img" :alt="`slide ${index}`">
      </div>
   </div>
   <a class="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </a>
   <a class="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </a>
</div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.carousel-img {
  max-height: 400px;
}
.indicator {
    border-radius: 50% !important;
    background-color: transparent !important;
    border: 1px solid white !important;
    width: 11px !important;
    height: 11px !important;
    margin: 0 4px 30px 4px !important;

}
.active {
    background-color: white !important;
}
.carousel-control-prev {
  left: 23px;
  justify-content: flex-start;
}
.carousel-control-next {
  right: 23px;
  justify-content: flex-end;
}
</style>
