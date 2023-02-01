<template>
    <footer class=" footer bg-light">
        <div class="container pt-43">
            <div class="row h-100 d-flex align-items-start bg-light flex-wrap m-0 mb-4">
                <div class="col-12 col-lg-4 d-flex flex-wrap flex-column flex-lg-row align-items-center align-items-lg-start bg-light mb-4 mb-lg-0 ">
                    <p class="subscribe-text text-center text-md-start">Подпишитесь на нашу рассылку и узнавайте о акция быстрее</p>
                    <div class="d-flex flex-no-wrap">
                        <input type="text" class="form-control rounded-0 subscribe-input border-0 text-muted" placeholder="Введите ваш e-mail:">
                        <button type="button" class="btn btn-primary rounded-0 subscribe-btn text-uppercase">Отправить</button>
                    </div>
                </div>
                <div class="col-12 col-md-4 col-lg-2 text-center text-lg-start bg-light link-list" @click="toggleisShowInf()">
                    <p class="list-header m-0">Информация</p>
                    <ul class="inf-list p-0" v-if="isShowInf || !isMobile">
                        <li role="button">О компании</li>
                        <li role="button">Контакты</li>
                        <li role="button">Акции</li>
                        <li role="button">Магазины</li>
                    </ul>
                </div>
                <div class="col-12 col-md-4 col-lg-3 text-center text-lg-start bg-light mb-5 mb-md-0 " @click="toggleisisShowShop()">
                    <p class="list-header m-0">Интернет-магазин</p>
                    <ul class="inf-list p-0 " v-if="isShowShop || !isMobile">
                        <li role="button" >Доставка и самовывоз</li>
                        <li role="button" >Оплата</li>
                        <li role="button" >Возврат-обмен</li>
                        <li role="button" >Новости</li>
                    </ul>
                </div>
                <div class="col-12 col-md-4 col-lg-3 d-flex justify-content-md-between icons justify-content-center align-self-center mb-5 mb-md-0 ">
                    <font-awesome-icon role="button" icon="fa-brands fa-instagram" />
                    <font-awesome-icon role="button" icon="fa-brands fa-vk" />
                    <font-awesome-icon role="button" icon="fa-brands fa-facebook" />
                    <font-awesome-icon role="button" icon="fa-brands fa-square-youtube" />
                </div>
            </div>
            <div class="add-inf-container">
                <p class="add-inf me-5" role="button">Договор оферты</p>
                <p class="add-inf" role="button">Политика обработки персональных данных</p>
            </div>
        </div>
    </footer>
</template>
<script>
import widthTrackingMixin from '@/mixins/widthTrackingMixin'
export default {
  mixins: [widthTrackingMixin],
  data () {
    return {
      isShowInf: false,
      isShowShop: false
    }
  },
  methods: {
    toggleisShowInf () {
      this.isShowInf ? this.isShowInf = false : this.isShowInf = true
    },
    toggleisisShowShop () {
      this.isShowShop ? this.isShowShop = false : this.isShowShop = true
    }
  }
}
</script>
<style lang="scss" scoped>
.pt-43 {
    padding: 0;
    padding-top: 43px;
}
.add-inf-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 22px;
    .add-inf {
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0em;
    }
}
.list-header {
    font-weight: 700;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-size: 14px;
    line-height: 23.44px;

}
.icons > * {
    height: 30px;
    margin:0 15px;
}

.footer {
    height: 230px;
}
.subscribe-input {
    height: 35px;
    width: 185px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #C4C4C4;
}
.subscribe-btn {
    height: 35px;
    width: 110px;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.12em;
}
.subscribe-text {
    max-width: 225px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 34px;
}
.inf-list > li {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-size: 14px;
    line-height: 23.44px;
    & > li:first-child:hover + li:not(:first-child) {
        display: block;
    }
}
@media screen and (max-width: 1024px) {

}
@media screen and (max-width: 767px) {

.list-header {
    color: #7F7F7F;
    display: flex;
    align-items: center;
    border-top: 2px solid #F0F0F4;
    border-bottom: 2px solid #F0F0F4;
    height: 50px;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        right: 0;
        width: 8px;
        height: 8px;
        border-top: 1px solid #C4C4C4 !important;
        border-right: 1px solid #C4C4C4 !important;
        transform: rotate(135deg);
        display: block;
        cursor: pointer;
    }
    &:hover {
        border-bottom: 0;
    }
}
.footer {
    background-color:transparent;
}
.add-inf-container {
    flex-direction: column;
}
}
</style>
