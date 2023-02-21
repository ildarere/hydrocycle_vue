<template >
  <div class="popular-filters">
  <div class="popular-filters-container">
    <div v-for="filter of popularFilters.slice(0, 3)" :key="filter.id" class="">
      <input type="checkbox" name="checkbox" :id="filter.name + filter.id" class="popular-filters-container__checkbox" v-model="filter.value" @change="update(filter)" />
      <label :for="filter.name + filter.id" class="popular-filters-container__filter">{{ filter.name }}</label>
    </div>
  </div>
  <div class="popular-filters-container" v-if="popularFilters.length > 3">
    <input v-show="!isShow" @click="showToggle" type="checkbox" name="checkbox" id="add" class="popular-filters-container__checkbox"/>
    <label v-show="!isShow" for="add" class="popular-filters-container__filter">ещё</label>
    <div class="popular-filters-container" v-show="isShow">
      <div v-for="filter of popularFilters.slice(3)" :key="filter.id" class="">
        <input type="checkbox" name="checkbox" :id="filter.name + filter.id" class="popular-filters-container__checkbox" v-model="filter.value" @change="update(filter)"/>
        <label :for="filter.name + filter.id" class="popular-filters-container__filter">{{ filter.name }}</label>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import showToggleMixin from '@/mixins/showToggleMixin'
export default {
  mixins: [showToggleMixin],
  props: {
    popularFilters: {
      type: Array,
      required: true
    }
  },
  methods: {
    update (filter) {
      this.$emit('update', filter)
      this.$emit('updateproducts')
    }
  }
}
</script>
<style lang="scss" scoped>
.popular-filters {
  display: flex;
  gap: 10px;
}
.popular-filters-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
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
  white-space: nowrap;
}
.popular-filters-container__checkbox:checked + .popular-filters-container__filter {
  background-color: #c0b9b9;
}
.popular-filters-container__checkbox {
  display: none;
}
</style>
