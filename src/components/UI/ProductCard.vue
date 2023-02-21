<template >
    <div class="product-card">
        <div class="sale" v-if="product.isSale">sale</div>
        <button class="fav-button" @click="$emit('likeToggle', product.id)">
            <font-awesome-icon icon="fa-solid fa-heart " role="button" class="fav-product_like-icon" v-if="isLiked"/>
            <font-awesome-icon icon="fa-regular fa-heart " role="button" class="fav-product_unlike-icon" v-else/>
        </button>
        <img :src="require(`@/assets/products/${product.img}`)" :alt="product.name" class="product-card_img">
        <p class="product-card_name">{{ product.name }}</p>
        <p class="product-card_price" v-if="product.count > 0">{{ product.finalPrice.toLocaleString() }} <font-awesome-icon icon="fa-solid fa-ruble-sign" class="ruble"/></p>
        <div v-else>
            <p class="none-product" >нет в наличии</p>
            <p class="alert">Сообщить о поступлении</p>
        </div>
        <div class="buy-btn" v-if="product.count > 0" @click="$emit('showcart', product.id)">
            <font-awesome-icon icon="fa-solid fa-cart-shopping " class="buy-btn_cart" />
        </div>
        <div class="view-product">посмотреть товар</div>
    </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    },
    isLiked: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.sale {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 25px;
    background: #1C62CD;
    font-family: 'SF Pro Display';
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: white;
}
.none-product {
    font-family: 'SF Pro Display';
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    margin: 0;
    margin-bottom: 12px;
    text-align: center;
}
.alert {
    font-family: 'SF Pro Display';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    color: #1C62CD;
    padding: 0;
    text-decoration: underline;
    white-space: nowrap;
}
.product-card {
    width: 270px;
    height: 400px;
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #CDCDCD;
    position: relative;
    border-radius: 3px;
    &:hover .view-product {
        display: flex;
        color: #2F3035;
    }
    &:hover {
        color: #1C62CD;
        box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
        cursor: pointer;
    }
}
.fav-button {
    align-self: flex-end;
    border: none;
    background: none;
    margin-bottom: 15px;
}
.fav-product_like-icon {
    height: 20px;
    color: #1C62CD;
}
.fav-product_unlike-icon {
    height: 20px;
}
.product-card_img {
    height: 200px;
    margin-bottom: 14px;
    max-width: 268px;
}
.product-card_name {
    font-family: 'SF Pro Display';
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
}
.product-card_price {
    font-family: 'Barlow';
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
}
.ruble {
    height: 25px;
}
.buy-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60px;
    height: 40px;
    background: #1C62CD;
    border-radius: 10px 0px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.buy-btn_cart {
    height: 20px;
    color: white;
}
.view-product {
    position: absolute;
    top: 25%;
    width: 230px;
    height: 60px;
    background: #FFFFFF;
    opacity: 0.9;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SF Pro Display';
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    display: none;
}
</style>
