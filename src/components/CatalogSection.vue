<template>
    <div class="container">
      <h1 class="category-header">{{ category.name }}</h1>
      <div class="popular-filters-container">
        <input type="checkbox" name="checkbox" id="filter1" class="popular-filters-container__checkbox"/>
        <label for="filter1" class="popular-filters-container__filter">Полноприводные</label>
        <input type="checkbox" name="checkbox" id="filter2" class="popular-filters-container__checkbox"/>
        <label for="filter2" class="popular-filters-container__filter">от 5000</label>
        <input type="checkbox" name="checkbox" id="filter3" class="popular-filters-container__checkbox"/>
        <label for="filter3" class="popular-filters-container__filter">ещё</label>
      </div>
      <div class="row">
        <div class="filters col-3">
          <filters-bar
            :filtersGroup="filtersGroup"
            :filters="filters"
          ></filters-bar>
        </div>
        <div class="products col-9">
          <product-card
            v-for="product of products"
            :key="product.id"
            :product="product"
            >
          </product-card>
        </div>
      </div>
    </div>
</template>
<script>
import ProductCard from '@/components/UI/ProductCard.vue'
import FiltersBar from '@/components/UI/FiltersBar.vue'
export default {
  components: {
    ProductCard, FiltersBar
  },
  props: {
    category: {
      type: Object,
      required: true
    },
    products: {
      type: Array,
      required: true
    },
    filtersGroup: {
      type: Array,
      required: true
    },
    filters: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.popular-filters-container{
  margin-bottom: 50px;
}
.popular-filters-container__checkbox {
  display: none;
}
.popular-filters-container__filter {
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #2F3035;
  padding: 4px 22px;
  border-radius: 3px;
  background: #F0F0F4;
  margin-right: 8px;
  cursor: pointer;
}
.popular-filters-container__checkbox:checked + .popular-filters-container__filter {
  background-color: #c0b9b9;
}
.products{
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0;
}
</style>
