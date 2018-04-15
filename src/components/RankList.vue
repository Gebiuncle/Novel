<template>
 <transition name="slide">
	<div class="rankList" ref="rankList">
		<HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>
		<scroll ref="scroll" :data="rankList" class="rankbody">
			<div>
				<div class="item" @click="selectItem(item)" v-for="(item, index) in rankList">
					<span class="ranking">{{ index+1 }}</span>
					<img :src="'http://statics.zhuishushenqi.com'+item.cover" alt="">
					<div>
						<p class="book-name"><span>{{ item.title }}</span><em>{{ item.author }}</em></p>
						<p class="follower"><i class="fa fa-fire" aria-hidden="true"></i>{{ item.latelyFollower }}</p>
					</div>
				</div>
				<loading v-show="!rankList.length"></loading>
			</div>
		</scroll>
	</div>
 </transition>
</template>

<script>
	import HeaderTop from '@/components/HeaderTop'
	import Scroll from '@/components/scroll/scroll'
	import loading from '@/components/loading/loading'
	export default{
		name: 'rankList',
		data() {
			return {
				backIcon: true,
				title: '',
				rankList: []
			}
		},
		created() {
			this.getRankList(this.$route.params.rankid)
		},
		watch: {
	    rankList(newVal) {
	      this.handlePlaylist(newVal)
	    }
	  },
		methods: {
			getRankList(id){
				this.$http.get('api/ranking/'+id+'',{
	        params: {}
	      })
	      .then(res => {
	        if(res.data.ok = true){
		        this.title = res.data.ranking.title 
		        this.rankList = res.data.ranking.books.slice(0, 100)
		      }
	      })
			},
			handlePlaylist(newVal){
	      this.$refs.scroll.refresh()
			},
			selectItem(item){
				this.$router.push({
					name: 'novelDetail',
					params: {
						id: item._id
					}
				})
			}
		},
		components: {
			HeaderTop,
			Scroll,
			loading
		}
	}
</script>
<style lang="stylus">
.slide-enter-active, .slide-leave-active
  transition: all 0.3s

.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
.rankList
	padding-top 1.306667rem
	box-sizing border-box
	overflow hidden
	position fixed
	top 0
	left 0
	z-index 11
	width 100%
	height 100%
	background #fff
	.rankbody
		height 100%
		overflow hidden
		// padding 0.533333rem 0
		box-sizing border-box
		.item 
			display flex
			align-items center
			height 2.533333rem
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
				border-bottom 0.013333rem solid #ccc
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
			&:first-child .ranking, &:nth-child(2) .ranking, &:nth-child(3) .ranking
				color #ff6882
</style>