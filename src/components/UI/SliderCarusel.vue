<template >
<div id="carouselWithIndicators" class="carousel slide" data-bs-ride="carousel">
   <ol class="carousel-indicators">
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="0" class="active indicator"></li>
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="1" class="indicator"></li>
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="2" class="indicator"></li>
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="3" class="indicator"></li>
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="4" class="indicator"></li>
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to="5" class="indicator"></li>
   </ol>
   <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 1">
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 2">
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 3">
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 4">
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 5">
      </div>
      <div class="carousel-item">
        <img src="@/assets/carusel/banner.png" class="d-block w-100" alt="Slide 6">
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
