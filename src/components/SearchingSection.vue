<template >
    <div class="container">
      <div class="sw-container" @click="setPlaceholder">
        <input type="radio" name="radio" id="searching-switcher1"  checked="checked" value="Введите номер" class="input-sw"/>
        <label for="searching-switcher1" class="searching-switcher">Поиск по номеру</label>
        <input type="radio" name="radio" id="searching-switcher2" value="Введите марку" class="input-sw"/>
        <label for="searching-switcher2" class="searching-switcher">Поиск по марке</label>
        <input type="radio" name="radio" id="searching-switcher3" value="Введите название товара" class="input-sw"/>
        <label for="searching-switcher3" class="searching-switcher">Поиск по названию товара</label>
      </div>
        <div class="row mt">
          <form action="" class="serching-form w-100">
            <input :type="type" class="serching-field" :placeholder="placeholder" v-model="searchReq">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="magnifying-glass d-md-none" role="button"/>
            <button class="serching-btn d-none d-md-block" @click.prevent="$router.push({path:`/catalog/search`, query: {value: searchReq, type: searchVal[placeholder]}})">искать</button>
          </form>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      searchReq: '',
      type: 'number',
      searchVal: {
        'Введите номер': 'number',
        'Введите марку': 'mark',
        'Введите название товара': 'name'
      },
      placeholder: 'Введите номер'
    }
  },
  methods: {
    setPlaceholder (event) {
      this.placeholder = event.target.value
      if (this.searchVal[this.placeholder] === 'number') {
        this.type = 'number'
      } else {
        this.type = 'text'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input-sw {
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
