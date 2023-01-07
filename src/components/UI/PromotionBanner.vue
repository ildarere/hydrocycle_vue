!<template >
    <div class="banner">
        <div class="banner-top">
            <div class="promotion-alert">акция</div>
            <div class="price-container">
                <div class="new-price">190 000 <font-awesome-icon icon="fa-solid fa-ruble-sign" class="ruble" /></div>
                <div class="old-price">225 000 <font-awesome-icon icon="fa-solid fa-ruble-sign" class="ruble"/></div>
            </div>
        </div>
        <div class="banner-center">
            <img src="@/assets/promotion/motor.png" alt="motor" class="product-img">
            <p class="product-name">Лодочный мотор Suzuki DF9.9BRS</p>
        </div>
        <div class="banner-bottom">
            <p class="promotion-date">Акция действует до <span>31.08.2020</span></p>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
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
    font-family: Barlow;
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
