<template >
  <label  class="searching-switcher">
    <input type="radio" name="radio" id="searching-switcher"/>
  <slot></slot></label>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
input {
}
.searching-switcher {
    display: inline-block;
    margin: 0 2px;
    padding: 12px 26px;
    border-radius: 5px;
    font-family: 'SF Pro Display';
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
}
.searching-switcher{
}
</style>
