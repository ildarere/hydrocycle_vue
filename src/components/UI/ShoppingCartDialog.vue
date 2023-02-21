<template >
  <div class="back" @click="$emit('close')">
    <div class="dialog" @click.stop>
      <button @click="$emit('close')" class="btn-null close-btn"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
      <div class="product">
        <img :src="require(`@/assets/products/${product.img}`)" :alt="product.name" class="product_img">
        <p class="product_name">{{ product.name }}</p>
        <div class="product_count">
          <font-awesome-icon icon="fa-solid fa-minus" @click="minusCount" role="button"/>
          <input type="number" name="" id="" class="counter" :placeholder="count">
          <font-awesome-icon icon="fa-solid fa-plus" @click="plusCount" role="button"/>
        </div>
      </div>
      <button class="cart-add-btn" @click="$emit('addincart', product.id, count)">Добавить в корзину</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    minusCount () {
      if (this.count > 1) {
        this.count--
      }
    },
    plusCount () {
      if (this.count < this.product.count) {
        this.count++
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.product_count {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.product_img {
  max-width: 100px;
}
.close-btn {
  align-self: end;
}
.counter {
  width: 25px;
  border: none;
  text-align: center;
  margin: 0;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}
.cart-add-btn {
  width: 252px;
  height: 50px;
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12em;
  background: #1C62CD ;
  color: white ;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  align-self: center;
}
.product_name {
  font-family: 'SF Pro Display';
  text-align: center;
  padding: 0 20px;
  margin: 0;
}
.btn-null {
  background: none;
  border: none;
}
.back {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  width: 600px;
  height: 300px;
  background: white;
  border-radius: 3px;
  z-index: 100;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
