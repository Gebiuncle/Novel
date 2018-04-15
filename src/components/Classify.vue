<template>
  <div class="classify">
		<div class="header">
		  <div><span v-for="item in taglist" :class="{header_active: item.activeClass}" @click="setTag(item)">{{ item.name }}</span></div>
		</div>
		
		<div class="classifyTopCon" :class="{isshow: !item.activeClass}" v-for="item in taglist" v-if="item.activeClass">
			<scroll ref="scroll" :data="item.catsdata">
			<div ref="classifyCon">
		  	<span v-for="(list, index) in item.catsdata" :class="{classify_on: list.classify_on}" @click="getCatlist(list, index)">{{ list.name }}</span>
		  </div>
		  </scroll>
		</div>
		
		<scroll :data="booksList" :pullup="true" @scrollToEnd="scrollToEnd" ref="bookscroll" class="bookCon">
			<div ref="bookCon">
				<div class="bookList" @click="selectItem(item)" v-for="item in booksList">
					<div class="left"><img :src="'http://statics.zhuishushenqi.com'+item.cover" alt=""></div>
					<div class="right">
						<h3 class="name">{{ item.title }}</h3>
						<p class="author">{{ item.author }} | {{ item.minorCate }}</p>
						<p class="desc">{{ item.shortIntro }}</p>
					</div>
				</div>
				<loading v-show="hasMore"></loading>
			</div>
			<!-- <loading v-show="!booksList.length"></loading> -->
		</scroll>
		<router-view/>
	</div>
</template>

<script>
// https://blog.csdn.net/zifeiyu130/article/details/78950244
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
export default{
  name: 'classify',
  data() {
  	return {
  		taglist: [
	  		{
	  			id: 0,
	  			name: '男生',
	  			gender: 'male',
	  			activeClass: true,
	  			catsdata: []
	  		},
	  		{
	  			id: 1,
	  			name: '女生',
	  			gender: 'female',
	  			activeClass: false,
	  			catsdata: []
	  		}
  		],
  		virtual: [],
  		booksList:[],
  		gender: 'male',
  		major: '',
  		start: 0,
  		hasMore: true
		}
  },
  created() {
  	this.getCat()
  },
  watch: {
  	virtual(newVal) {
  		setTimeout(() => {
  				this.setSlidewidth(newVal)
  			}, 20)
  	},
  	booksList(newVal){
  		this.handlePlaylist(newVal)
  	}
  },
  methods: {
  	setSlidewidth(newVal){
  		let width = 0
  		let childrens

			childrens = this.$refs.classifyCon[0].children

			childrens = [...childrens]
			// console.log(childrens)

  		for(let i = 0; i<childrens.length; i++) {
  			width += childrens[i].clientWidth
  		}

      this.$refs.classifyCon[0].style.width = width + 'px'
      this.$refs.classifyCon[0].style.overflow = 'scroll'
      this.$refs.scroll[0].refresh()
  	},
  	handlePlaylist(newVal){
			const bottom = newVal.length > 0 ? '3.4rem' : ''

			// console.log(this.$refs.bookCon)
      this.$refs.bookCon.style.paddingBottom = bottom
      this.$refs.bookscroll.refresh()
		},
  	setTag(item) {
  		if(!item.activeClass){
  			this.start = 0
  			this.hasMore = true
  			this.booksList = []
  			this.major = item.catsdata[0].name
  			this.getbookList(item.gender, this.major, this.start)
  		}

  		this.taglist.map(function(v, i) {
  			i==item.id ? v.activeClass=true : v.activeClass=false
  		})

  		setTimeout(() => {
  			this.setSlidewidth()
  		}, 20)
  	},
  	getCatlist(item, itemindex) {
  		let click = true
  		if(item.classify_on == true){
			  click = false 
			}

  	 	this.taglist.map((v, i) => {
  	 		if(v.activeClass){
			  	v.catsdata.map((value, index) => {
			  		setTimeout(() => {
			  			value.name===item.name ? value.classify_on=true : value.classify_on=false	
			  		},200)
			  						  		  	
			  	})
			  }
		  })

		  if(click){
		  	this.start = 0
		  	this.hasMore = true
		  	this.booksList = []
		  	this.getbookList(this.gender, item.name, 0)
		  }
  	},
  	getCat() {
  		this.$http.get('api/cats/lv2/statistics', {
        params: {}
      })
      .then(res => {
        if(res.data.ok = true){
        	var self = this
	        this.taglist.map(function(v, i) {
		  			if(i==0){
		  				self.virtual = res.data.male
		  				v.catsdata = res.data.male
		  				
		  			} 
		  			if(i==1){
		  				self.virtual = res.data.female
		  				v.catsdata = res.data.female
		  				
		  			} 
		  			v.catsdata.map(function(value, index) {
		  				index==0 ? self.$set(value, 'classify_on', true) : self.$set(value, 'classify_on', false)

		  				if(i==0 && index==0){
		  					self.start = 0
		  					self.hasMore = true
		  					self.major = value.name
		  					self.getbookList(self.gender, self.major, self.start)
		  				}
		  			})
		  			
		  		})
	      }
      })
  	},
  	scrollToEnd() {
  		if(!this.hasMore){
  			return
  		}

  		this.start = this.start + 10
  		this.getbookList(this.gender, this.major, this.start)
  	},
  	getbookList(gender, major, start) {
  		// this.booksList = []
  		this.$http.get('api/book/by-categories', {
        params: {
        	gender: gender,
        	type: 'hot',
        	major: major,
        	minor: '',
        	start: start,
        	limit: 10
        }
      })
      .then(res => {
        if(res.data.ok = true){
        	if(res.data.books.length == 0 || res.data.books.length == res.data.total){
        		this.hasMore = false
        	}
        	this.booksList = this.booksList.concat(res.data.books)
        }
      })
  	},
  	selectItem(item) {
			this.$router.push({
				name: 'novelDetail',
				params: {
					id: item._id
				}
			})
		}
  },
  components: {
  	Scroll,
  	Loading
  }
}
</script>
<style lang="stylus" scoped>
.classify
	height 100%
	overflow hidden
.header
	// position fixed
	// top 0
	// left 0
	// z-index 10
	width 100%
	height 1.306667rem
	display flex
	align-items center
	justify-content center
	background-color #fff
	div
		height 0.666667rem
		line-height 0.666667rem
		border 0.013333rem solid #ff6882
		border-radius 0.066667rem
		color #ff6882
		font-size 0.373333rem
		span
			padding 0 0.4rem
			display inline-block
		.header_active
			color #fff 
			background-color #ff6882
.classifyTopCon
	// position fixed
	// top 1.306667rem
	// left 0
	// z-index 10
	width 100%
	border-top 0.013333rem solid #ccc
	border-bottom 0.013333rem solid #ccc
	height 1.066667rem
	line-height 1.066667rem
	overflow hidden
	background-color #fff
	span
		color #333
		font-size 0.373333rem
		display inline-block
		float left
		padding 0 0.533333rem
	.classify_on
		color #ff6882
		border-bottom 0.026667rem solid #ff6882
		
.bookCon
	// padding-top 2.4rem
	height 100%
	box-sizing border-box
	overflow hidden
	background-color #efefef
	.bookList
		padding 0.266667rem
		background-color #fff
		margin-bottom 0.266667rem
		display flex
		align-items center
		.left 
			margin-right 0.266667rem
			img 
				width 1.893333rem
				height 2.666667rem
		.right
			height 2.666667rem
			flex 1
			display flex
			flex-direction column
			align-items left
			justify-content space-around
			font-size 0.373333rem
			h3
				color #333
			p
				color #999
			.desc
				line-height 0.48rem
				height .48rem
		    white-space nowrap
		    text-overflow ellipsis
		    overflow hidden
.isshow
	display none
</style>