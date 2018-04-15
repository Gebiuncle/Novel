<template>
	<div ref="wrapper">
		<slot></slot>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	props: {
		data: {
      type: Array,
      default: null
    },
    click: {
    	type: Boolean,
    	default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 1
    },
    pullup: {
      type: Boolean,
      default: false
    },
    beforeScroll: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },

	},
	mounted() {
		setTimeout(() => {
			this.initScroll()
		}, 20)
	},
	methods: {
		initScroll() {
			if (!this.$refs.wrapper) {
				return
			}

			this.scroll = new BScroll(this.$refs.wrapper, {
        scrollX: true,
				probeType: this.probeType,
				click: this.click
			})

			if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
         	me.$emit('scroll', pos)
        })
      }

      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          console.log(this.scroll.y, this.scroll.maxScrollY)
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
          }
        })
      }

      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
		},
		enable() {
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
		refresh() {
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    }
	},
	watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>