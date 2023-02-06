<template>
<div class="container">
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" @click="$router.push(`/`)">Главная</a></li>
        <li class="breadcrumb-item"><a href="#" @click.prevent="$router.push({path:`/catalog/${category.nameEn}`, query: {category: category.id}})">{{ category.name }}</a></li>
        <li class="breadcrumb-item" v-if="product"><a href="#" >{{ product.name }}</a></li>
    </ol>
    </nav>
</div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    },
    product: {
      type: Object,
      required: false
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
    padding: 0;
    margin-bottom: 40px;
}
.breadcrumb-item + .breadcrumb-item::before {
    content: '' !important;
    position: absolute;
    top:50%;
    left: -10px;
    width: 8px;
    height: 8px;
    border-top: 1px solid #C4C4C4 !important;
    border-right: 1px solid #C4C4C4 !important;
    padding: 0;
    transform: rotate(45deg) translateY(-25%) translateX(-25%);
    display: block;
}
.breadcrumb-item {
    position: relative;
    margin-left: 20px;
}
.breadcrumb-item:first-child{
    margin-left: 0;
}
.breadcrumb-item a{
    text-decoration: none;
    font-family: 'SF Pro Display';
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #C4C4C4 !important;
}
</style>
