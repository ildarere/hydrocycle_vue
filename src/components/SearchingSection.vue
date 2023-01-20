!<template >
    <div class="container">
      <div class="sw-container" @click="setPlaceholder">
        <input type="radio" name="radio" id="searching-switcher1"  checked="checked" value="Введите номер"/>
        <label for="searching-switcher1" class="searching-switcher"  >Поиск по номеру</label>
        <input type="radio" name="radio" id="searching-switcher2" value="Введите марку"/>
        <label for="searching-switcher2" class="searching-switcher" >Поиск по марке</label>
        <input type="radio" name="radio" id="searching-switcher3" value="Введите название товара"/>
        <label for="searching-switcher3" class="searching-switcher">Поиск по названию товара</label>
      </div>
        <div class="row mt">
          <searching-bar-vue :placeholder="placeholder"></searching-bar-vue>
        </div>
    </div>
</template>
<script>
import SearchingBarVue from '@/components/UI/SearchingBar.vue'
export default {
  components: {
    SearchingBarVue
  },
  data () {
    return {
      placeholder: 'Введите номер'
    }
  },
  methods: {
    setPlaceholder (event) {
      this.placeholder = event.target.value
    }
  }
}
</script>
<style lang="scss" scoped>
input {
  display: none;
}
input:checked + .searching-switcher {
  background-color: #F0F0F4;
  font-weight: bold;
}
.sw-container {
  overflow-x: auto;
  white-space: nowrap;
}
.mt {
  margin-top: 24px;
}
.container {
  padding: 0;
  margin-bottom: 100px;
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
    cursor: pointer;
}
</style>
