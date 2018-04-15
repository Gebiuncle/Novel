<template>
	<div class="index">
		<div class="topSearch">
			<i class="fa fa-microphone"></i>
			<div class="search" @click="goSearch">
				<i class="fa fa-search"></i><span>白夜追凶</span>
			</div>
			<i class="fa fa-book"></i>
		</div>

		<div v-if="spread.length" class="slider-wrapper" ref="sliderWrapper">
	    <slider>
	      <div v-for="item in spread">
	        <img class="needsclick" :src="item.img">
	      </div>
	    </slider>
	  </div>

		<scroll ref="scroll" :data="recommend" class="recommend">
		<div ref="recommend">
			<p class="title">热门推荐</p>
			<div class="item" v-for="(item, index) in recommend">
				<img :src="item.book.cover" alt="">
				<div>
					<p class="book-name"><span>{{ item.book.title }}</span><em>{{ item.book.author }}</em></p>
					<p class="follower"><i class="fa fa-fire" aria-hidden="true"></i>{{ item.book.latelyFollower }}</p>
				</div>
			</div>
			<loading v-show="!recommend.length"></loading>
		</div>
		</scroll>
	</div>
</template>

<script>
import Slider from '@/components/slider/slider'
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
export default{
	name: 'index',
	data() {
		return {
			spread: [
				{
					img: 'http://statics.zhuishushenqi.com/recommendPage/152344192408040',
					link: "5a040197ca262a8808ab13b7",
					title: "你的爱，我不稀罕"
				},
				{
					img: 'http://statics.zhuishushenqi.com/recommendPage/151849571972550',
					link: "58c22cc09d980c254c263b1d",
					title: "教我如何不想他"
				},
				{
					img: 'http://statics.zhuishushenqi.com/recommendPage/151849573299788',
					link: "56ce9d48363f92a00727392b",
					title: "重生之公主尊贵"
				},
				{
					img: 'http://statics.zhuishushenqi.com/recommendPage/151849574708642',
					link: "574febe4022225483f665d95",
					title: "匣心记"
				}
			],
			recommend: [],
			recommendID: '5912825ba1dbf3ad33ee7ffe'
		}
	},
	created(){
    this.getRecommend(this.recommendID)
  },
  watch: {
  	recommend(newVal) {
  		//this.handlePlaylist(newVal)
  	}
  },
  methods: {
  	getRecommend(id) {
  		this.$http.get('api/recommendPage/node/books/all/'+id+'',{
        params: {}
      })
      .then(res => {
        if(res.data.ok = true){ 
	        this.recommend = res.data.data
	      }
      })
  	},
  	goSearch(){
  		this.$router.push({
				name: 'search',
				params: {
					
				}
			})
  	}
  },
  components: {
  	Scroll,
  	Slider,
  	Loading
  }
}
</script>
<style lang="stylus">	
.index 
	width 100%
	height 100%
	.topSearch
		height: 1.28rem
		display: flex
		align-items: center
		justify-content: space-between
		background-color: #ff6882
		color #fff
		padding: 0 0.266667rem
		i 
			font-size: 0.533333rem
		.search
			background-color: #fff 
			height: 0.8rem
			line-height: 0.8rem
			width: 76%
			padding: 0 0.266667rem
			box-sizing: border-box
			border-radius: 0.4rem 
			color: #ff6882
			i 
				font-size: 0.426667rem
			span
				padding-left 0.266667rem
				color: #333
	.slider-wrapper
		width: 100%
		  position: relative
		  left: 0
		  top: 0
		  overflow: hidden
		.needsclick
			height 3.466667rem
	.recommend
		padding-top .266667rem
		overflow hidden 
		height 12.0rem
		// width 100%
		// position absolute
		// top 0
		// left 0
		// z-index 0
		box-sizing border-box
		.title
			text-align center
			font-size 0.426667rem
			color #ff6882
		.item 
			display flex
			align-items center
			height 2.533333rem
			padding 0 0.266667rem
			border-bottom 0.013333rem solid #ccc
			.ranking 
				width 1.733333rem
				text-align center
				color #333
				font-size 0.48rem
			img 
				width 1.866667rem
				height 2.266667rem
			div 
				height 2.533333rem
				flex 1
				display flex
				flex-direction column
				justify-content center
			.book-name
				color #333
				padding-left 0.533333rem
				span
					font-size 0.426667rem
				em 
					font-size 0.32rem
					font-style normal
					padding-left 0.266667rem
			.follower
				padding-left 0.533333rem
				margin-top 0.4rem
				color #999
				font-size 0.373333rem
				i 
					padding-right 0.133333rem
</style>