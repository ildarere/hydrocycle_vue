<template >
<select class="select-sort w-auto"  >
<option v-for="option of sortFilters"
:key="option.value"
:value="option.value"
class="option"
>{{ option.name }}</option>
</select>
</template>
<script>
export default {
  props: {
    sortFilters: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.select-sort {
  width: 180px;
  height: 35px;
  border: 1.5px solid #D7D9DF;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 15px;
  color: #2F3035;
}
</style>
