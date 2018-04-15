<template>
	<div class="home">
		<div class="tab">
			<router-link tag="div" class="tab-item" to="/home/index">
				<i class="fa fa-home"></i>
		      	<span class="tab-link">首页</span>
		    </router-link>
			<router-link tag="div" class="tab-item" to="/home/classify">
				<i class="fa fa-th-large"></i>
		      	<span class="tab-link">分类</span>
		    </router-link>
		    <router-link tag="div" class="tab-item" to="/home/rank">
				<i class="fa fa-trophy"></i>
		      	<span class="tab-link">榜单</span>
		    </router-link>
		    <router-link tag="div" class="tab-item" to="/home/userCenter">
				<i class="fa fa-user"></i>
		      	<span class="tab-link">我</span>
		    </router-link>
		</div>
		<keep-alive>
		<router-view/> 
		</keep-alive>
	</div>
</template>

<script>
export default{
	name: 'home',
	data() {
		return {

		}
	}
}
</script>
<style lang="stylus">
.home
	height 100%
	width 100%
	.tab
		background-color rgba(53, 53, 53, .9)
		height 1.2rem
		position fixed
		bottom 0
		left 0
		z-index 10
		width 100%
		display flex
		align-items center
		justify-content space-evenly
		.tab-item
			width 25%
			color #ccc
			height 1.2rem
			display flex
			justify-content center
			flex-direction column
			align-items center
			i
				display block
				font-size 0.56rem
				margin-bottom 0.066667rem
			span 
				font-size 0.32rem
		.router-link-active
			color #fff
</style>