<template >
  <form action="" class="serching-form w-100">
    <input type="text" class="serching-field" :placeholder="placeholder" v-model="value">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="magnifying-glass d-md-none" role="button"/>
    <button class="serching-btn d-none d-md-block" @click.prevent="$emit('search', value)">искать</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: 'Введите номер'
    }
  }
}
</script>
<style lang="scss" scoped>
.magnifying-glass {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  height: 24px;
}
.serching-form {
    display: flex;
    flex-direction: row;
    position: relative;
}
.serching-field {
    flex: 1 0;
    height: 50px;
    border: 0;
    background: #F0F0F4;
    font-family: 'SF Pro Display';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    padding-left: 20px;
    border-radius: 3px;
}
.serching-btn {
    background: #1C62CD;
    color: white;
    padding: 16px 40px;
    font-family: 'SF Pro Display';
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.12em;
    border: 0;
    text-transform: uppercase;
    border-radius: 3px;
}
</style>
