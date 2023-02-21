<template >
<div class="container">
<nav class="navbar nav-top-line navbar-expand-lg  ">
  <div class="container-fluid p-0 w-100 row m-0">
      <ul class="navbar-nav d-flex justify-content-between align-items-center col-5 ">
        <li class="nav-item">
          <a class="nav-link p-0 fw-bold" role="button" @click="$router.push('/')" >Магазины</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0 fw-bold" role="button" @click="$router.push('/')" >Акции</a>
        </li>
        <li class="nav-item">
          <a class="nav-link p-0 fw-bold" role="button" @click="$router.push('/')" >Доставка и оплата</a>
        </li>
      </ul>
      <a class="p-0 col-2 text-center" role="button" @click="$router.push('/')" ><img src="@/assets/logo.svg" alt="logo"></a>
      <a class="nav-link p-0 col-md-3 col-lg-4 text-center fw-bold" role="button" @click="$router.push('/')"><font-awesome-icon icon="fa-solid fa-location-dot" />Москва,  ул. Науки  25</a>
      <div class="p-0  col-md-2 col-lg-1 text-end icons d-flex" href="#">
        <font-awesome-icon icon="fa-regular fa-heart " role="button" @click="$router.push('/')"/>
        <font-awesome-icon icon="fa-solid fa-user " role="button" @click="$router.push('/')"/>
        <div class="shopping-cart" role="button">
          <font-awesome-icon icon="fa-solid fa-cart-shopping "  class="shopping-cart__icon" @click="$router.push('/')"/>
          <div class="shopping-cart__counter"> {{ shoppingСounter }}</div>
        </div>
      </div>
  </div>
</nav>
<nav class="navbar nav-bottom-line navbar-expand-lg navbar-expand-md navbar-light bg-light p-0">
  <div class="container-fluid p-0 w-100 h-100">
      <ul class="navbar-nav  d-flex justify-content-between w-100 align-items-center h-100">
        <li class="nav-item nav-bottom-line__items"
          v-for="category in categories" :key="category.id"
        >
          <a class="nav-link p-0"  @click.prevent="$router.push({path:`/catalog/${category.nameEn}`})">{{ category.name }}</a>
        </li>
      </ul>
  </div>
</nav>
</div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    shoppingСounter: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.shopping-cart {
  position: relative;
  width: 30px;
  margin-right: 15px;
}
.shopping-cart__counter {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  bottom: 0;
  right: 0;
  background-color: #1C62CD;
  transform: translateX(50%) translateY(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
}
.shopping-cart__icon {
  height: 22px;
}
.icons > * {
  height: 22px;
  padding-right: 10px;
}
.fa-location-dot {
  height: 24px;
  padding-right: 3px;
}
.navbar-nav__nav-item {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.nav-bottom-line {
  height: 53px;
}
.nav-top-line {
  height: 122px !important;
}
.container  {
    max-width: 1171px !important;
    padding: 0;
    margin-bottom: 80px;
}
.nav-bottom-line__items {
  position: relative !important;
  height: 100%;

  &:hover::after {
    display: block;
    content: '';
    position: absolute;
    bottom: -3px ;
    height: 1px;
    width: 100%;
    border-bottom: 3px solid #1C62CD;;
  }
}
.nav-link {
    font-family: 'SF Pro Display';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 768px) {
  .nav-bottom-line {
    display: none;
  }
}
</style>
