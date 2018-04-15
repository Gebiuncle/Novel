<template>
	<div class="history-box" v-show="searchList.length && listshow">
		<div class="historyList" v-for="item in searchListArray">
			<p>{{ item.title }}</p>
			<i class="fa fa-times"></i>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			
		}
	},
	props: {
		searchList: {
			type: Array,
			default: []
		},
		listshow: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		searchListArray(){
			return this.searchList.slice(0, 30)
		}
	}
}
</script>
<style lang="stylus">
.history-box
	color #999
	.historyList
		border-bottom 1px solid #ccc
		height 1.066667rem
		display flex
		align-items center
		justify-content space-between
		padding 0 0.266667rem
		i
			font-size 0.426667rem
			color #ddd
		p 
			flex 1
			padding 0 0.266667rem
</style>