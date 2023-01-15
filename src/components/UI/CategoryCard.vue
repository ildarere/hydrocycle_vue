<template>
    <div class="category" role="button" @click="$router.push(`/${category.name}`)">
        <div class="category_left-section">
            <h3 class="category_title">{{ category.name }}</h3>
            <p class="category_more m-0">подробнее<font-awesome-icon icon="fa-solid fa-chevron-right" class="category_more_icon"/></p>
        </div>
        <div class="category_right-section">
            <img :src="require(`@/assets/categories/${category.img}`)" alt="" class="category_img">
        </div>
    </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.category {
    border: 1px solid #CDCDCD;
    width: 370px;
    height: 130px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 20px 10px 20px;
    position: relative;
    &:hover {
        box-shadow: 3px 3px 20px 0px #32323240;
    }
    &:hover > .category_left-section > .category_title {
        color: #1C62CD;
    }
}
.category_img {
    height: 90px;
}
.category_title {
    font-family: 'Barlow', sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    margin-right: 13px;
}
.category_left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.category_right-section {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.category_more {
    font-family: 'SF Pro Display';
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: #C4C4C4;
}
.category_more_icon {
    width: 6px;
    height: 9px;
    margin-left: 3px;
}
@media screen and (max-width: 375px) {
    .category_img {
        height: 80px;
        position: absolute;
        right: 13px;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
