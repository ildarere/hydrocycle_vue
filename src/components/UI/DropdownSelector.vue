<template>
    <div class="filter">
        <span class="filter__name">{{ filterGroup.name }}</span>
        <select class="form-select w-auto" aria-label="Default select" v-model="filter.value" @change="$emit('update', filter)">
          <option v-for="option of filterGroup.expectedValue"
            :key="option.value"
            :value="option.value"
            class="option"
          >{{ option.name }}</option>
        </select>
    </div>
</template>
<script>
export default {
  data () {
    return {
      filter: {}
    }
  },
  props: {
    filterGroup: {
      type: Object
    },
    filters: {
      type: Array
    }
  },
  created () {
    this.filter = this.filters[0]
  }
}
</script>
<style lang="scss" scoped>
.option:checked {
  background-color: #6B7EAC0D;
}
.form-select {
  border: none;
  border-radius: 0;
  box-shadow: none !important;
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  padding: 0 30px 0 5px !important;
}
.filter {
  position: relative;
  margin-bottom: 30px;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      background: #C4C4C4;
    }
}
.filter__button {
    margin-bottom: 15px;
}
.filter__name {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    margin-left: 27px;
}
</style>
