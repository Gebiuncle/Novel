<template>
	<transition name="slideBottom">
	<div class="novelDetail">
		<HeaderTop :title="title" :backIcon="backIcon"></HeaderTop>
		<div class="book-info">
			<div class="info-top">
				<img src="http://cdn.q8oils.cc/3f5788fd158a3240e69a89dbc3fe4032@1e_120w_160h_1c_0i_1o_100Q_1x.jpg" alt="">
				<div>
					<p class="title">名称</p>
					<p class="type"><span class="author">阿冷</span><em>|</em><span>言情类</span><em>|</em><span>34万字</span></p>
					<p class="status">完结</p>
				</div>
			</div>
			<div class="book-opt">
				<button>加入收藏</button>
				<button>开始阅读</button>
			</div>
		</div>
		<div class="book-progress">
			<div><p>人气</p><span>9890</span></div>
			<div><p>读者留存率</p><span>60%</span></div>
			<div><p>日更字数/天</p><span>3000</span></div>
		</div>
		<p class="book-doc">读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者留存率读者</p>
		<div class="book-catalog">
			<span>目录</span>
			<span>番外八[完结]<i class="fa fa-angle-right"></i></span>
		</div>
		<div class="book-discuss">
			<h4>热门书评</h4>
			<ul>
				<li class="discuss-list">
					<img src="http://cdn.q8oils.cc/3f5788fd158a3240e69a89dbc3fe4032@1e_120w_120h_1c_0i_1o_100Q_1x.jpg" alt="">
				</li>
			</ul>
		</div>
	</div>
	</transition>
</template>
<script> 
	import HeaderTop from '@/components/HeaderTop'
	const COMPONENT_NAME = 'novelDetail'
	export default {
		name: COMPONENT_NAME,
		data() {
			return {
				title: '书籍详情',
				backIcon: true
			}
		},
		components: {
			HeaderTop
		}
	}
</script>
<style lang="stylus">
.slideBottom-leave-active, .slideBottom-enter-active
	transition all 0.3s
.slideBottom-enter, .slideBottom-leave-to
	transform translate3d(0, 100%, 0)

#hascllect
	border-color #ccc
	color #ccc
.novelDetail
	padding-top 1.306667rem
	margin-bottom: 1.4rem;
	box-sizing border-box
	overflow hidden
	position fixed
	top 0
	left 0
	width 100%
	height 100%
	background #fff
	.book-info
		border-bottom 0.013333rem solid #ccc
		padding 0.4rem
		.info-top
			display flex
			img 
				width 1.733333rem
			div
				flex 1
				margin-left 0.266667rem
				display flex
				flex-direction column
				justify-content space-around
				color #999
				font-size 0.373333rem
			.title
				font-size 0.426667rem
				color #333
			.type 
				.author
					color #ff6882
				em 
					font-style normal
					padding 0 0.266667rem
		.book-opt
			padding-top 0.4rem
			overflow hidden
			button
				display inline-block
				float left
				margin-right 5.3%
				width 44.7%
				padding 0
				box-sizing border-box
				line-height 1.066667rem
				border 0.013333rem solid #ff6882
				background-color #fff
				color #ff6882
				border-radius 0.133333rem
				font-size 0.48rem
				&:last-child
					margin-right 0
					margin-left 5.3%
					background-color #ff6882
					color #fff
	.book-progress
		height 1.6rem
		display flex
		align-items center
		justify-content space-between	
		border-bottom 0.013333rem solid #ccc
		div
			width 33.3%
			text-align center
			color #333
			font-size 0.373333rem
			p 
				color #999
				font-size 0.32rem
				margin-bottom 0.266667rem
	.book-doc
		font-size 0.32rem
		line-height 0.666667rem
		padding 0.4rem 0
		margin 0 .4rem
		border-bottom 0.013333rem solid #ccc
	.book-catalog
		height 1.333333rem
		padding 0 0.4rem
		display flex
		align-items center
		justify-content space-between
		border-bottom 0.013333rem solid #ccc
		span:last-child
			color #999
			i 
				padding-left 0.266667rem
				font-size 0.426667rem
</style>