<template>
  <div class="filter">
      <div type="button"  @click="showToggle" class="filter__button">
          <font-awesome-icon icon="fa-solid fa-chevron-up" :class="{ rotate: !isShow }" class="arr-icon" />
          <span class="filter__name">{{ filterGroup.name }}</span>
      </div>
      <div class="dropdown" v-show="isShow" >
        <range-slider :min='0' :max='2000000' :filters="filters" @update="updateFilter"></range-slider>
      </div>
  </div>
</template>
<script>
import showToggleMixin from '@/mixins/showToggleMixin'
import RangeSlider from '@/components/UI/RangeSlider.vue'

export default {
  components: {
    RangeSlider
  },
  mixins: [showToggleMixin],
  props: {
    filterGroup: {
      type: Object
    },
    filters: {
      type: Array
    }
  },
  methods: {
    updateFilter (filter) {
      this.$emit('update', filter)
    }
  }
}
</script>
<style lang="scss" scoped>
.dropdown {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.checkbox {
  font-family: 'SF Pro Display';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
}
.checkbox__input {
  margin-right: 10px;
  border-radius: 0;
}
.rotate {
  transform: rotate(180deg);
}
.arr-icon {
  color: #C4C4C4;
  height: 12px;
}
.filter {
  margin-bottom: 30px;
}
.filter__button {
  margin-bottom: 15px;
}
.filter__name {
  margin-left: 15px;
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
}
</style>
