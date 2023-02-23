<template>
    <div class="container">
      <h2 class="section-title">Популярные товары</h2>
      <nav class="navbar nav-bottom-line navbar-expand-lg navbar-expand-md navbar-light p-0">
        <div class="container-fluid p-0 w-100 h-100">
          <div class="nav-container">
            <div v-for="(category, index) in categories" :key="category.id" class="">
              <input type="radio" name="radio" :id="category.name + category.id" class="category" :checked="index === 0"/>
              <label :for="category.name + category.id" class="nav-item" @click="$emit('update', category.id); currentCategory = category">{{ category.name }}</label>
            </div>
          </div>
        </div>
      </nav>
    <div id="carouselWithIndicatorsProducts" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
          <li data-bs-target="#carouselWithIndicatorsProducts" data-bs-slide-to="0" class="active indicator"></li>
          <li data-bs-target="#carouselWithIndicatorsProducts" data-bs-slide-to="1" class="indicator"></li>
          <li data-bs-target="#carouselWithIndicatorsProducts" data-bs-slide-to="2" class="indicator"></li>
      </ol>
      <div class="carousel-inner">
          <div class="carousel-item active" v-if="!isMobile">
            <div class=" d-flex product-container " alt="">
              <product-card
                v-for="product of products.slice(0, 4)"
                :key="product.id"
                :product="product"
                :isLiked="likedProducts.includes(product.id) ? true : false"
                @likeToggle="$emit('likeToggle', product.id)"
                @showcart="$emit('showcart', product.id)"
              ></product-card>
            </div>
          </div>
          <div class="carousel-item " v-if="!isMobile && products.length > 4">
            <div class="d-flex product-container " alt="" >
              <product-card
                v-for="product of products.slice(4, 8)"
                :key="product.id"
                :product="product"
                :isLiked="likedProducts.includes(product.id) ? true : false"
                @showcart="$emit('showcart', product.id)"
              ></product-card>
            </div>
          </div>
          <div v-if="isMobile">
            <div class="carousel-item align-self-center"
                  v-for="(product, index) in products.slice(0, 3)"
                  :class="{active: index === 0}"
                  :key="product.id">
              <div class="d-block d-flex product-container" alt="" >
                <product-card
                  :product="product"
                  :isLiked="likedProducts.includes(product.id) ? true : false"
                  @likeToggle="$emit('likeToggle', product.id)"
                  @showcart="$emit('showcart', product.id)"
                ></product-card>
              </div>
            </div>
          </div>
      </div>
        <a class="carousel-control-prev" href="#carouselWithIndicatorsProducts" role="button" data-bs-slide="prev" :class="{ disabled : products.length < 4 }">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next carousel-control" href="#carouselWithIndicatorsProducts" role="button" data-bs-slide="next" :class="{ disabled : products.length < 4 }">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
      </div>
      <div class="show-more" role="button" @click.prevent="$router.push({path:`/catalog/${currentCategory.nameEn}`})">Показать еще</div>
    </div>
</template>
<script>
import ProductCard from '@/components/UI/ProductCard.vue'
export default {
  data () {
    return {
      currentCategory: {}
    }
  },
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
    },
    isMobile: {
      type: Boolean,
      required: true
    }
  },
  created () {
    this.$emit('update', '7')
    this.currentCategory = this.categories.find(category => category.id === '7')
  }
}
</script>
<style lang="scss" scoped>
.disabled {
  opacity: 0.1 !important;
}
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
.carousel-inner {
  overflow-x: auto;
}
.carousel-inner::-webkit-scrollbar {
  height: 0;
  width: 0;
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
.carousel-control-next {
  right: -40px;
}
.carousel-control-prev {
  left: -40px;
}
.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
  width: 30px;
}

.carousel-indicators {
  bottom: -60px !important;
  & .indicator {
    background: #C4C4C4 !important;
    border-radius: 50% !important;
    height: 14px !important;
    width: 14px !important;
    border: 0;
    display: none;
  }
 & .active {
  background: #1C62CD !important;
 }
}
.navbar {
  height: 30px;
  margin-bottom: 25px;
}
.nav-container {
  height: 45px;
  display: flex;
  overflow-x: auto;

}
.nav-item {
  margin-right: 50px;
  display: flex;
  align-items: center;
  position: relative !important;
  height: 100%;
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-transform: lowercase;
  &::after {
    display: none;
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    border-bottom: 3px solid #1C62CD;
  }
}
.category {
  display: none;
  &:checked + .nav-item {
    &::after {
      display: block;
    }
  font-weight: bold;
}
}
@media screen and (max-width: 1024px) {
.carousel {
  padding: 0 40px;
}
.carousel-control-next {
  right: 0;
}
.carousel-control-prev {
  left: 0;
}
}
@media screen and (max-width: 767px) {
  .carousel {
    margin-bottom: 75px;
    padding: 0;
  }
  .product-container {
    justify-content: center !important;
  }
  .carousel-indicators {
    & .indicator {
      display: block;
    }
  }
.carousel-control-next,
.carousel-control-prev {
  display: none;
}

}
</style>
