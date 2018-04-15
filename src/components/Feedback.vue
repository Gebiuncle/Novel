<template>
	<div class="feedback">
		<HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>

	</div>
</template>
<script>
	import HeaderTop from '@/components/HeaderTop'
	export default{
		data() {
			return {
				title: '意见反馈',
				backIcon: true
			}
		},
		components: {
			HeaderTop
		}
	}
</script>
<style lang="stylus">
.feedback
	padding 1.306667rem 0.266667rem
	
</style>