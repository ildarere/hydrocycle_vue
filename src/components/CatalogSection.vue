<template>
    <div class="container">
      <h1 class="category-header">{{ category.name }}</h1>
      <div class="popular-filters-container">
        <input type="checkbox" name="checkbox" id="filter1"/>
        <label for="filter1" class="filter">Полноприводные</label>
        <input type="checkbox" name="checkbox" id="filter2"/>
        <label for="filter2" class="filter">от 5000</label>
        <input type="checkbox" name="checkbox" id="filter3"/>
        <label for="filter3" class="filter">ещё</label>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
input {
  display: none;
}
.filter {
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
</style>
