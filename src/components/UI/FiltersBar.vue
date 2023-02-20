<template >
  <div
    v-for="filterGroup of filtersGroup"
    :key="filterGroup.id"
  >
    <dropdown-item
      v-if="filterGroup.type === 'checkers'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)"
      @update="updateFilter"
    ></dropdown-item>
    <dropdown-slider
      v-if="filterGroup.type === 'slider'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)"
      @update="updateFilter"
      >
    </dropdown-slider>
    <dropdown-selector
      v-if="filterGroup.type === 'select'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)"
      @update="updateFilter"
      >
    </dropdown-selector>
  </div>
  <button class="filters-bar__btn" @click="updateProducts">выбрать</button>
</template>
<script>
import DropdownItem from '@/components/UI/DropdownItem.vue'
import DropdownSelector from '@/components/UI/DropdownSelector.vue'
import DropdownSlider from '@/components/UI/DropdownSlider.vue'

export default {
  components: {
    DropdownItem, DropdownSlider, DropdownSelector
  },
  props: {
    filtersGroup: {
      type: Object
    },
    filters: {
      type: Array
    }
  },
  data () {
    return {
      currentFilters: []
    }
  },
  methods: {
    getFiltersByGroup (groupId) {
      return this.filters.filter(filter => filter.filterGroup === groupId)
    },
    updateProducts () {
      document.querySelectorAll('.filters-bar__btn').forEach(btn => btn.classList.remove('active-btn'))
      this.$emit('updateproducts')
    },
    updateFilter (filter) {
      document.querySelectorAll('.filters-bar__btn').forEach(btn => btn.classList.add('active-btn'))
      this.$emit('update', filter)
    }
  }
}
</script>
<style lang="scss" scoped>
.active-btn {
  background: #1C62CD !important;
  color: white !important;
}
.filters-bar__btn {
  width: 252px;
  height: 50px;
  background: #F0F0F4;
  font-family: 'SF Pro Display';
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12em;
  color: #BDBEC2;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
}
</style>
