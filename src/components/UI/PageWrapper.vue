<template>
<div class="container">
    <div
    v-for="(pageNumber) in totalPages"
    :key="pageNumber"
    class="page"
    :class="{'current-page': pageNumber === currentPage}"
    @click="$emit('changepage', pageNumber)"
    >
    {{ pageNumber }}
    </div>
</div>
</template>
<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
}
.page {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Barlow';
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #C4C4C4;
    cursor: pointer;
}
.current-page {
    color: #1C62CD;
    border: 2px solid #1C62CD;
    font-weight: 600;
}
</style>
