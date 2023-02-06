export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showToggle () {
      this.isShow === true ? this.isShow = false : this.isShow = true
    }
  }

}
