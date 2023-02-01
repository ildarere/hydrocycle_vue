<template >
    <div class="container">
        <div class="banner">
            <img src="@/assets/promotion/vehicle1.png" alt="" class="banner_img order-2 order-xl-1">
            <img src="@/assets/promotion/vehicle2.png" alt="" class="banner_img order-4 order-xl-1 me-xl-5">
            <h3 class="banner_text order-1 order-xl-1 "><span class="banner_text_sale">Скидки <br></span> на все {{ sale.name }} до <br class="d-md-none"> {{sale.discount}}%</h3>
            <div class="show-all order-3 order-xl-1" role="button">посмотреть все</div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    sale: Object
  }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 0;
}
.banner {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: #1C62CD;
    padding: 10px 0;
    margin-bottom: 70px;
}
.banner_img {
    height: 115px;
}
.banner_text {
    font-family: 'SF Pro Display';
    font-size: 36px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    width: 310px;
    & .banner_text_sale {
        text-transform: uppercase;
    }
}
.show-all {
    width: 285px;
    height: 60px;
    background-color: white;
    font-family: 'SF Pro Display';
    font-size: 24px;
    font-weight: 500;
    line-height: 50px;
    letter-spacing: 0em;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 1024px) {
   .show-all {
    margin: 0 5px;
   }
    .banner_text {
        // font-size: 18px;
        // line-height: 18px;
        text-align: center;
        width: 100%;
        & .banner_text_sale {
        text-transform: none;
            & br {
                display: none;
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .banner_text {
        font-size: 18px;
        line-height: 18px;
        flex: 1 1 100%;
    }
    .show-all {
        width: 130px;
        height: 35px;
        font-size: 14px;
        line-height: 50px;
    }
    .banner_img {
        height: 50px;
    }
}
</style>
