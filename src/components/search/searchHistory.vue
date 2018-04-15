<template>
	<div class="history-box" v-show="history.length">
		<h5>历史搜索</h5>
		<div class="historyList" v-for="item in history">
			<i class="fa fa-clock-o"></i>
			<p>{{ item.title }}</p>
			<i class="fa fa-times"></i>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			history: [
				// {title: '纸短情长啊'},
				// {title: '纸短情长啊'},
				// {title: '纸短情长啊'}
			]
		}
	}
}
</script>
<style lang="stylus">
.history-box
	color #999
	h5
		font-weight normal
		font-size 0.426667rem
		line-height 1.333333rem
		padding-left 0.266667rem
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