<template>
    <div class="container p-0 categories-container">
        <category-card-vue
          class="category-card"
          v-for="category in categories" :key="category.id"
          :category="category"
          >
        </category-card-vue>
    </div>
</template>
<script>
import CategoryCardVue from '@/components/UI/CategoryCard.vue'
export default {
  components: {
    CategoryCardVue
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.categories-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 80px;
}
</style>
