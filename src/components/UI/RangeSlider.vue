<template >
      <div class='containero'>
          <div class='slider-track'></div>
          <input type='range' :min="min" :max="max" v-model="bottomPriceFilter.value" step="500" id='slider-1' @input='slideOne' @change="$emit('update', bottomPriceFilter)">
          <input type='range' :min="min" :max="max" v-model="topPriceFilter.value" step="500" id='slider-2' @input='slideTwo' @change="$emit('update', topPriceFilter)">
      </div>
      <div class='values'>
        <div>
          от <span class="price">{{ bottomPriceFilter.value.toLocaleString() }}</span>
        </div>
        <div>
          до <span class="price">{{ topPriceFilter.value.toLocaleString() }}</span>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      minGap: 0,
      topPriceFilter: {},
      bottomPriceFilter: {}
    }
  },
  props: {
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    filters: {
      type: Array
    }
  },
  methods: {
    slideOne () {
      const sliderOne = document.getElementById('slider-1')
      const sliderTwo = document.getElementById('slider-2')
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= this.minGap) {
        sliderOne.value = parseInt(sliderTwo.value) - this.minGap
      }
      this.fillColor()
    },
    slideTwo () {
      const sliderOne = document.getElementById('slider-1')
      const sliderTwo = document.getElementById('slider-2')
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= this.minGap) {
        sliderTwo.value = parseInt(sliderOne.value) + this.minGap
      }
      this.fillColor()
    },
    fillColor () {
      const sliderOne = document.getElementById('slider-1')
      const sliderTwo = document.getElementById('slider-2')
      const sliderTrack = document.querySelector('.slider-track')
      const percent1 = (sliderOne.value / this.max) * 100
      const percent2 = (sliderTwo.value / this.max) * 100
      sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`
    }
  },
  mounted () {
    this.slideOne()
    this.slideTwo()
  },
  created () {
    this.topPriceFilter = this.filters.find(filter => filter.filter === 'priceTop')
    this.bottomPriceFilter = this.filters.find(filter => filter.filter === 'priceBottom')
  }
}
</script>
<style lang="scss" scoped>
.price {
  font-family: 'Barlow';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-decoration: underline;
  margin-left: 10px;
  width: 55px;
  display: block;
}
.containero{
    position: relative;
    width: 100%;
    height: 50px;
}
input[type="range"]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 1px;
    width: 100%;
    outline: none;
    position: absolute;
    margin: 25px 0 25px 0;
    top: 0;
    bottom: 0;
    background-color: transparent;
    pointer-events: none;
}
.slider-track{
    width: 100%;
    height: 3px;
    position: absolute;
    margin: 25px 0 25px 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
}
input[type="range"]::-webkit-slider-runnable-track{
    -webkit-appearance: none;
    height: 5px;
}
input[type="range"]::-moz-range-track{
    -moz-appearance: none;
    height: 5px;
}
input[type="range"]::-ms-track{
    appearance: none;
    height: 5px;
}
input[type="range"]::-webkit-slider-thumb{
    -webkit-appearance: none;
    height: 8px;
    width: 8px;
    background-color: #3264fe;
    cursor: pointer;
    pointer-events: auto;
    border-radius: 50%;
}
input[type="range"]::-moz-range-thumb{
    -webkit-appearance: none;
    height: 8px;
    width: 8px;
    background-color: #3264fe;
    cursor: pointer;
    pointer-events: auto;
    border-radius: 50%;
}
input[type="range"]::-ms-thumb{
  -webkit-appearance: none;
    height: 8px;
    width: 8px;
    background-color: #3264fe;
    cursor: pointer;
    pointer-events: auto;
    border-radius: 50%;
}
.values{
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    & div{
      display: flex;
      align-items: center;
    }
}

</style>
