<template>
  <div class="margin-top"></div>
  <nav class=" top-nav container m-0 p-0">
      <div class=" nav-top-line row m-0" >
        <div class=" col-3 text-center">
          <font-awesome-icon role="button" icon="fa-solid fa-bars" class="button"  @click.stop="showDialog" />
        </div>
        <a class="col-3 col-sm-6 col-md-6 text-center p-0" role="button" @click="$router.push('/')" ><img src="@/assets/logo-mobile.svg" alt="logo"></a>
        <div class="col-6 col-sm-3 col-md-3 text-end justify-content-end icons-headlines d-flex " href="#">
          <font-awesome-icon icon="fa-regular fa-heart " role="button" @click="$router.push('/')"/>
          <font-awesome-icon icon="fa-solid fa-user " role="button" @click="$router.push('/')"/>
          <div class="shopping-cart" role="button">
            <font-awesome-icon icon="fa-solid fa-cart-shopping "  class="shopping-cart__icon" @click="$router.push('/')"/>
            <div class="shopping-cart__counter"> {{ shoppingСounter }}</div>
          </div>
        </div>
      </div>
      <div class="row nav-bottom-line m-0 p-0">
          <ul class="col-12 d-flex flex-nowrap bg-light justify-content-sm-center p-0">
            <li class="nav-item">
              <a class="nav-link align-items-center pe-3 fw-bold" role="button" @click="$router.push('/')" >Магазины</a>
            </li>
            <li class="nav-item">
              <a class="nav-link align-items-center pe-3 fw-bold" role="button" @click="$router.push('/')" >Акции</a>
            </li>
            <li class="nav-item">
              <a class="nav-link align-items-center pe-3 fw-bold  bg-light" role="button" @click="$router.push('/')" >Доставка и оплата</a>
            </li>
          </ul>
      </div>
  </nav>
<transition name="menu">
    <div class="mobile-nav-back" v-if="show" @click.stop="hideDialog">
      <nav  class="mobile-nav" @click.stop>
        <ul class="nav mobile-nav-list ">
          <li class="nav-item"
            v-for="(link, index) in menuLinksMobile" :key="index"
          >
              <font-awesome-icon icon="fa-solid fa-user " class="icon" @click="$router.push('/')"/>
              <a class="nav-link p-0 " role="button" @click="$router.push('/')" >{{ link }}</a>
          </li>
          <li class="nav-item "
            v-for="category in categories" :key="category.id"
          >
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click.prevent="$router.push({path:`/catalog/${category.nameEn}`})">{{ category.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'
import { mapState } from 'vuex'
export default {
  mixins: [toggleMixin],
  props: {
    categories: {
      type: Array,
      required: true
    },
    shoppingСounter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState({
      menuLinksMobile: state => state.menuLinksMobile
    })
  }
}
</script>
<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
}
.margin-top {
  margin-bottom: 145px;
}
.nav-bottom-line {
  overflow-x: auto;
  white-space: nowrap;
}
.mobile-nav-back {
  top: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 1000;
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
.button {
  width: 50px;
  height: 50px;
}
.nav-top-line {
  height: 68px;
  display: flex;
  align-items: center;
  background-color: white;
}
.icons-headlines> * {
  height: 22px;
  padding-right: 10px;
}
.shopping-cart {
  position: relative;
  width: 30px;
  margin-right: 10px;
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
.icon {
  width: 20px;
  height: 20px;
  margin-right: 20px;

}
.mobile-nav {
  position: fixed;
  background-color: white;
  width: 243px;
  height: 100vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow-y: auto;
}
.mobile-nav-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
.mobile-nav-list > li {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: flex-end;
}
.nav-link {
    color: #2F3035;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    height: 60px;
    display: flex;
    align-items: flex-end;
}
.nav-link:hover {
    color: #2F3035;
    font-weight: bold;
}
</style>
