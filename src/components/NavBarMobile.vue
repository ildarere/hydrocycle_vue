<template>
  <nav class=" w-100 top-nav container">
      <div class=" nav-top-line row" >
        <div class=" col-3 text-center">
          <font-awesome-icon role="button" icon="fa-solid fa-bars" class="button"  @click.stop="showDialog" />
        </div>
        <a class="col-3 col-sm-6 col-md-6 text-center p-0" role="button" @click="$router.push('/')" ><img src="@/assets/logo-mobile.svg" alt="logo"></a>
        <div class="col-6 col-sm-3 col-md-3 text-end justify-content-end icons-headlines d-flex p-4" href="#">
          <font-awesome-icon icon="fa-regular fa-heart " role="button" @click="$router.push('/')"/>
          <font-awesome-icon icon="fa-solid fa-user " role="button" @click="$router.push('/')"/>
          <div class="shopping-cart" role="button">
            <font-awesome-icon icon="fa-solid fa-cart-shopping "  class="shopping-cart-icon" @click="$router.push('/')"/>
            <div class="shopping-counter"> {{ shoppingСounter }}</div>
          </div>
        </div>
      </div>
      <div class="row nav-buttom-line ">
          <ul class="col-12 d-flex flex-nowrap bg-light justify-content-sm-center">
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
      <nav  class="mobile-nav">
        <ul class="nav mobile-nav-list ">
          <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-user " class="icon" @click="$router.push('/')"/>
              <a class="nav-link p-0 " role="button" @click="$router.push('/aa')" >Войти</a>
          </li>
          <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-user "  class="icon" @click="$router.push('/')"/>
            <a class="nav-link p-0 " role="button" @click="$router.push('/')" >Регистрация</a>
          </li>
          <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-user "  class="icon" @click="$router.push('/')"/>
            <a class="nav-link p-0 " role="button" @click="$router.push('/')" >Магазины</a>
          </li>
          <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-user "  class="icon" @click="$router.push('/')"/>
            <a class="nav-link p-0 " role="button" @click="$router.push('/')" >Акции</a>
          </li>
          <li class="nav-item">
              <font-awesome-icon icon="fa-solid fa-user "  class="icon" @click="$router.push('/')"/>
            <a class="nav-link p-0 " role="button" @click="$router.push('/')" >Доставка и оплата</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Квадроциклы</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Катера</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Гидроциклы</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Лодки</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Вездеходы</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Снегоходы</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Двигатели</a>
          </li>
          <li class="nav-item nav-bottom-line__items">
            <div class="icon"></div>
            <a class="nav-link p-0" href="#" @click="$router.push('/')">Запчасти</a>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>
<script>
import toggleMixin from '@/mixins/toggleMixin'
export default {
  mixins: [toggleMixin],
  data () {
    return {
      shoppingСounter: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
}
.nav-buttom-line {
  overflow-x: auto;
  white-space: nowrap;
}
.mobile-nav-back {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
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
  height: 67px;
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
}
.shopping-counter {
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
.shopping-cart-icon {
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
}
.mobile-nav-list {
    display: flex;
    flex-direction: column;
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
