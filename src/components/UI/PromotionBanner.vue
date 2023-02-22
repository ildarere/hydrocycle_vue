<template >
    <div class="banner" role="button" @click="$router.push('/')" >
        <div class="banner-top">
            <div class="promotion-alert">акция</div>
            <div class="price-container">
                <div class="new-price">{{ product.finalPrice.toLocaleString() }} <font-awesome-icon icon="fa-solid fa-ruble-sign" class="ruble" /></div>
                <div class="old-price">{{ product.price.toLocaleString() }} <font-awesome-icon icon="fa-solid fa-ruble-sign" class="ruble"/></div>
            </div>
        </div>
        <div class="banner-center">
            <img :src="require(`@/assets/products/${product.img}`)" :alt="product.name" class="product-img">
            <p class="product-name">{{ product.name }}</p>
        </div>
        <div class="banner-bottom">
            <p class="promotion-date">Акция действует до <span>{{ product.saleEndDate.toLocaleDateString() }}</span></p>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
    height: 400px;
    width: 265px;
    background-color: white;
    border: 1px solid #CDCDCD;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.banner-top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.promotion-alert {
    width: 90px;
    height: 30px;
    background-color: #1C62CD;
    color: white;
    text-transform: uppercase;
    font-family: 'ProximaNova';
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.1em;
    display: flex;
    justify-content: center;
    align-items: center;
}
.price-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

}
.new-price {
    font-family: 'Barlow';
    font-size: 27px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    color: #1C62CD;
    margin-right: 8px;
    & > .ruble {
        height: 22px;
    }
}
.old-price {
    font-family: 'Barlow';
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #C4C4C4;
    position: relative;
    margin-right: 4px;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: -3px;
        width: 55px;
        height: 2px;
        background-color: #C4C4C4;
        border: .5px solid #C4C4C4;
        transform: rotate(-15deg);
    }
    & > .ruble {
        height: 13px;
    }
}
.banner-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > .product-img {
        height: 176px;
        max-width: 260px;
    }
}
.product-name {
    font-family: 'SF Pro Display';
    font-size: 22px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    max-width: 232px;
    text-align: center;
}
.banner-bottom {
    background: #F0F0F4;
    height: 99px;
    width: 264px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.promotion-date {
    font-family: 'SF Pro Display';
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > span {
        font-family: 'Barlow';
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        color: #1C62CD;
    }
}
</style>
