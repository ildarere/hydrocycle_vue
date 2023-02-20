export default {
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      isMedium: false,
      isMobile: false
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.window.width <= 1024 ? this.isMedium = true : this.isMedium = false
      this.window.width < 768 ? this.isMobile = true : this.isMobile = false
    }
  }
}
