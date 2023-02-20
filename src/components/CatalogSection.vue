<template>
    <div class="container">
      <h1 class="category-header">{{ category.name }}</h1>
      <div class="d-flex justify-content-between align-items-center flex-wrap mb-5 gap-3">
        <popular-filters
          :popularFilters="popularFilters"
          @update="updateFilter"
          @updateproducts="updateProducts"
        ></popular-filters>
        <div class="">
          <select-sort :sortFilters="sortFilters" @change="$emit('sort', $event.target.value)" class="me-2"></select-sort>
          <button v-if="isMedium" @click="showToggle" class="btn-null"> <font-awesome-icon icon="fa-solid fa-filter" /></button>
        </div>
      </div>
      <div class="catalog-section">
        <transition name="filters">
          <div class="back" v-show="isShow && isMedium" @click="showToggle">
              <div class="filters" @click.stop>
                <button @click="showToggle" class="btn-null close-btn"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                <filters-bar
                  :filtersGroup="filtersGroup"
                  :filters="filters"
                  @update="updateFilter"
                  @updateproducts="updateProducts(); showToggle()"
                ></filters-bar>
              </div>
          </div>
        </transition>
        <div class="filters filters-medium"  v-if="!isMobile">
          <filters-bar
            :filtersGroup="filtersGroup"
            :filters="filters"
            @update="updateFilter"
            @updateproducts="updateProducts()"
          ></filters-bar>
        </div>
        <div class="p-0 catalog">
          <div class="products">
            <product-card
            v-for="product of products"
            :key="product.id"
            :product="product"
            :isLiked="likedProducts.includes(product.id) ? true : false"
            @likeToggle="$emit('likeToggle', product.id)"
            >
          </product-card>
          </div>
          <page-wrapper
            :currentPage="currentPage"
            :totalPages="totalPages"
            @changepage="changePage">
          </page-wrapper>
        </div>
      </div>
    </div>
</template>
<script>
import ProductCard from '@/components/UI/ProductCard.vue'
import FiltersBar from '@/components/UI/FiltersBar.vue'
import PageWrapper from '@/components/UI/PageWrapper.vue'
import showToggleMixin from '@/mixins/showToggleMixin'
import widthTrackingMixin from '@/mixins/widthTrackingMixin'
import SelectSort from '@/components/UI/SelectSort.vue'
import PopularFilters from '@/components/UI/PopularFilters.vue'
export default {
  components: {
    ProductCard, FiltersBar, PageWrapper, SelectSort, PopularFilters
  },
  mixins: [showToggleMixin, widthTrackingMixin],
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
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    likedProducts: {
      type: Array
    },
    sortFilters: {
      type: Array,
      required: true
    },
    popularFilters: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateFilter (filter) {
      this.$emit('update', filter)
    },
    updateProducts () {
      this.$emit('updateproducts')
    },
    changePage (pageNumber) {
      this.$emit('changepage', pageNumber)
    }
  }
}
</script>
<style lang="scss" scoped>

.btn-null {
  border: none;
  background: none;
}
.close-btn {
  margin-bottom: 20px;
  height: 30px;
  right: 0;
}
.catalog-section {
  display: flex;
}
.catalog {
  display: flex;
  flex-direction: column;
  flex: 4;
}
.filters {
  display: block;
  flex: 1;
  width: 300px;
}
.back {
  top: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  z-index: 100;
}
.filters-enter-active,
.filters-leave-active {
  transition: opacity 0.5s ease;
}

.filters-enter-from,
.filters-leave-to {
  opacity: 0;
}
.container {
  margin-bottom: 70px;
}
.products{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 0;
  margin-bottom: 70px;
}
@media screen and (max-width: 1024px) {
  .filters-medium {
    display: none;
  }
  .filters {
    position: fixed;
    background-color: white;
    z-index: 1000;
    width: 300px;
    height: 100vh;
    top: 0;
    left: 0;
    padding-top: 15%;
    padding-left: 10px;
    overflow-y: scroll;
  }
}
</style>
