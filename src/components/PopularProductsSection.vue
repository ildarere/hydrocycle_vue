<template>
    <div class="container">
      <h2 class="section-title">Популярные товары</h2>
      <nav class="navbar nav-bottom-line navbar-expand-lg navbar-expand-md navbar-light p-0">
        <div class="container-fluid p-0 w-100 h-100">
            <ul class="navbar-nav d-flex flex-wrap justify-content-start align-items- w-100 h-100">
              <li class="nav-item nav-bottom-line__items h-100"
                v-for="category in categories" :key="category.id"
                @click="$emit('update', category.id)">
                <a class="nav-link p-0" href="#" @click.prevent="">{{ category.name }}</a>
              </li>
            </ul>
        </div>
      </nav>
    <div id="carouselWithIndicatorsProducts" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
          <li data-bs-target="#carouselWithIndicatorsProducts" data-bs-slide-to="0" class="active indicator"></li>
          <li data-bs-target="#carouselWithIndicatorsProducts" data-bs-slide-to="1" class="indicator"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active  ">
            <div class="d-block d-flex product-container" alt="Slide 1">
              <product-card
                v-for="product of products"
                :key="product.id"
                :product="product"
                :isLiked="likedProducts.includes(product.id) ? true : false"
                @likeToggle="$emit('likeToggle', product.id)"
              ></product-card>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block d-flex product-container" alt="Slide 2">
              <product-card
                v-for="product of products"
                :key="product.id"
                :product="product"
                :isLiked="likedProducts.includes(product.id) ? true : false"
              ></product-card>
            </div>
          </div>
      </div>
      <a class="carousel-control-prev " href="#carouselWithIndicatorsProducts" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next carousel-control" href="#carouselWithIndicatorsProducts" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
      </a>
      </div>
      <div class="show-more" role="button">Показать еще</div>
    </div>
</template>
<script>
import ProductCard from '@/components/UI/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  props: {
    categories: {
      type: Array,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    likedProducts: {
      type: Array
    }
  },
  created () {
    this.$emit('update', '1')
  }
}
</script>
<style lang="scss" scoped>
.show-more {
  width: 252px;
  height: 50px;
  background: #F0F0F4;
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.carousel {
  margin-bottom: 35px;
}
.container {
  margin-bottom: 85px;
}
.navbar-nav {
  overflow-x: auto;
  white-space: nowrap;
}
.section-title {
  font-family: 'Barlow', sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  margin-bottom: 25px;
}
.product-container {
  gap: 30px;
}
.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
  width: 30px;
}
.carousel-control-next {
  right: -40px;
}
.carousel-control-prev {
  left: -40px;
}
.carousel-indicators {
  display: none;
}
.navbar {
  height: 30px;
  margin-bottom: 25px;
}
.nav-item {
  margin-right: 50px;
  position: relative !important;
  height: 100%;
  &:hover::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 3px solid #1C62CD;
  }
  &:hover .nav-link {
    font-weight: bold;
  }
}
.nav-link {
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
}
</style>
