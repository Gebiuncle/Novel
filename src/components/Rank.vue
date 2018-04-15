<template>
	<div class="rank" ref="rank">
		<HeaderTop title="排行榜" :backIcon="backIcon"></HeaderTop>
		<keep-alive>
		<scroll ref="scroll" :data="allData" class="rankCon">
			<div>
				<div class="rankItem">
					<h3><span>男生</span></h3>	
					<ul>
						<li class="item" @click="selectItem(item)" v-for="item in male"><img :src="'http://statics.zhuishushenqi.com/'+item.cover" alt=""><span>{{ item.title }}</span></li>
					</ul>
				</div>
				<div class="rankItem">
					<h3><span>女生</span></h3>	
					<ul>
						<li class="item" @click="selectItem(item)" v-for="item in female"><img :src="'http://statics.zhuishushenqi.com/'+item.cover" alt=""><span>{{ item.title }}</span></li>
					</ul>
				</div>
			</div>
			<loading v-show="!allData.length"></loading>
		</scroll>
		</keep-alive>
		<router-view></router-view>
	</div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
export default {
	data() {
		return {
			backIcon: false,
			male: [],
			female: []
		}
	},
	computed: {
		allData() {
			return this.male.concat(this.female)
		}
	},
	created() {
		this.getRank()
	},
	mounted() {
		this.handlePlaylist(this.allData)
	},
	watch: {
    allData(newVal) {
      this.handlePlaylist(newVal)
    }
  },
	methods: {
		getRank() {
			this.$http.get('api/ranking/gender', {
        params: {}
      })
      .then(res => {
        if(res.data.ok = true){
	        this.male = res.data.male
	        this.female = res.data.female   
	      }
      })
		},
		handlePlaylist(allData){
			const bottom = allData.length > 0 ? '1.2rem' : ''

      this.$refs.rank.style.paddingBottom = bottom
      this.$refs.scroll.refresh()
		},
		selectItem(item) {
			this.$router.push({
				name: 'rankList',
				params: {
					rankid: item._id
				}
			})
		}
	},
	components: {
		HeaderTop: HeaderTop,
		Scroll: Scroll,
		Loading
	}
}
</script>
<style lang="stylus">
.rank 
	padding-top 1.306667rem
	box-sizing border-box
	height 100%
	overflow hidden
	.rankCon
		box-sizing border-box
		height 100%
		overflow hidden
		.rankItem
			margin-bottom 0.56rem
			h3
				height 1.333333rem
				line-height 1.333333rem
				span 
					padding-left: 0.266667rem
					font-size 0.48rem
					border-left: 0.053333rem solid #ff6882
			.item
				border-bottom 0.013333rem solid #ccc
				height 1.333333rem 
				display	flex
				align-items center
				img 
					width 0.8rem
					height 0.8rem
					border 0.013333rem solid #eee
					border-radius 50%
					vertical-align middle
				span 
					padding-left 0.266667rem
					color #333
					font-size 0.373333rem
</style>