!<template >
    <div class="container">
      <div class="sw-container">
        <searching-switcher-vue
          v-for="placeholder, option in options"
          :key="option.value"
          class="searching-switcher"
          @click="setPlaceholder(placeholder)"
          @change="setActive"
          role="button"> {{ option }}</searching-switcher-vue>
      </div>
        <div class="row mt">
          <searching-bar-vue :placeholder="placeholder"></searching-bar-vue>
        </div>
    </div>
</template>
<script>
import SearchingSwitcherVue from '@/components/UI/SearchingSwitcher.vue'
import SearchingBarVue from '@/components/UI/SearchingBar.vue'
export default {
  components: {
    SearchingSwitcherVue, SearchingBarVue
  },
  data () {
    return {
      placeholder: 'Введите номер',
      options: {
        'Поиск по номеру': 'Введите номер',
        'Поиск по марке': 'Введите марку',
        'Поиск по названию товара': 'Введите название товара'
      }
    }
  },
  methods: {
    setPlaceholder (placeholder) {
      this.placeholder = placeholder
    },
    setActive (event) {
      // console.log(event.target)
      event.target.parentElement.classList.toggle('active')
    }
  },
  mounted () {
    // this.setActive()
  }
}
</script>
<style lang="scss" scoped>
.sw-container {
  overflow-x: auto;
  white-space: nowrap;
}
.mt {
  margin-top: 24px;
}
.active{
  background-color: #F0F0F4;
  font-weight: bold;
}
.container {
  padding: 0;
  margin-bottom: 100px;
}
</style>
