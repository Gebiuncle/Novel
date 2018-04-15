<template>
	<div class="hotwords" v-show="ishow">
		<h5>热门搜索</h5>
		<div class="historyList">
			<span @click="selectItem(item)" v-for="item in hotwords">{{ item.word }}</span>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			hotwords: []
		}
	},
	props: {
		ishow: {
			type: Boolean,
			default: true
		}
	},
	created() {
		this.getHotwords()
	},
	methods: {
		selectItem(item) {
			this.$emit('searchHot', item)
		},
		getHotwords() {
			this.$http.get('api/book/search-hotwords', {
	        params: {}
	    }).then(res => {
	      if(res.data.ok = true){
	        this.hotwords = res.data.searchHotWords.slice(0, 15)
	     	}
	    })
		}
	}
}
</script>
<style lang="stylus">
.hotwords
	color #333
	padding 0 0.266667rem
	h5
		font-weight normal
		font-size 0.373333rem
		line-height 1.333333rem
		color #666
	.historyList 
		overflow hidden
		span
			float left
			padding 0.2rem 0.5rem
			font-size 0.426667rem
			border 0.013333rem solid #999
			border-radius 0.4rem
			margin-right 0.266667rem
			margin-bottom 0.266667rem
	
</style>