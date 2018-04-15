<template>
	<div class="fixTop" :title="title" :backIcon="backIcon">
		<i class="fa" :class="{'fa-angle-left': backIcon}" @click="backFun"></i>
		<span>{{ title }}</span>
		<i></i>
	</div>
</template>
<script>
export default {
	data() {
		return {
			
		}
	},
	props: {
		title: {
			type: String,
			default: '标题'
		},
		backIcon: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		backFun() {
			this.$router.go(-1)
		}
	}
}
</script>
<style lang="stylus">
	.fixTop
		position fixed
		top 0
		left 0
		z-index 10
		width 100%
		box-sizing border-box
		padding 0 0.32rem
		height 1.306667rem
		display flex
		align-items center 
		justify-content space-between
		background-color #ff6882
		i 
			width 0.24rem
			font-size 0.76rem
			color #fff
		span
			font-size 0.48rem
			color #fff
</style>