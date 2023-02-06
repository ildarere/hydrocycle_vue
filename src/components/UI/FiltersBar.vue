<template >
  <div
    v-for="filterGroup of filtersGroup"
    :key="filterGroup.id"
  >
    <dropdown-item
      v-if="filterGroup.type === 'checkers'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)"
      @change="logfilter"
    ></dropdown-item>
    <dropdown-slider
      v-if="filterGroup.type === 'slider'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)">
    </dropdown-slider>
    <dropdown-selector
      v-if="filterGroup.type === 'select'"
      :filterGroup="filterGroup"
      :filters="getFiltersByGroup(filterGroup.id)">
    </dropdown-selector>
  </div>
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
    logfilter (filter) {
      this.currentFilters.push(filter)
      console.log(this.currentFilters)
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
