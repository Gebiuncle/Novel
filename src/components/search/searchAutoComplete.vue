<template>
	<div class="history-box" v-show="searchList.length && boolshow">
		<div class="historyList" v-for="item in searchList" @click="selectItem(item)">
			<i class="fa fa-search"></i>
			<p>{{ item }}</p>
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
		boolshow: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		selectItem(item) {
			this.$emit('searchAutoComplete', item)
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