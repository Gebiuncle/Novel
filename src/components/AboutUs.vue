<template>
	<div class="aboutUs">
		<HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>
		<p>关于我们</p>
	</div>
</template>
<script>
	import HeaderTop from '@/components/HeaderTop'
	export default{
		data() {
			return {
				title: '关于我们',
				backIcon: true
			}
		},
		components: {
			HeaderTop
		}
	}
</script>
<style lang="stylus">
.aboutUs
	padding 1.306667rem 0.266667rem
	p 
		color #333
		font-size 0.426667rem
		line-height 0.8rem
</style>