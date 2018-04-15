<template>
	<div class="userCenter">
		<HeaderTop title="个人中心"></HeaderTop>
		<div class="userInfo">
			<img src="http://cdn.q8oils.cc/3f5788fd158a3240e69a89dbc3fe4032@1e_200w_200h_1c_0i_1o_100Q_1x.jpg" alt="">
			<div>
				<span>{{ getuserName }}</span>
				<i class="fa fa-circle"> 在线</i>
			</div>
		</div>
		<div class="userItem">
			<router-link tag="div" class="item" to="/history">
				<i class="fa fa-history"></i><span>浏览记录<i class="fa fa-angle-right"></i></span>
			</router-link>
			<router-link tag="div" class="item" to="/feedback">
				<i class="fa fa-commenting-o"></i><span>意见反馈<i class="fa fa-angle-right"></i></span>
			</router-link>
			<router-link tag="div" class="item" to="/aboutus">
				<i class="fa fa-question-circle-o"></i><span>关于我们<i class="fa fa-angle-right"></i></span>
			</router-link>
		</div>
		<div class="loginout" @click="loginOut">退出登录</div>
		<router-view/> 
	</div>
</template>
<script>
import HeaderTop from '@/components/HeaderTop'
import Cookies from 'js-cookie'
export default {
	data() {
		return {
			
		}
	},
	computed: {
		getuserName() {
			if (Cookies.get('userName')){
				return Cookies.get('userName')
			}
		}
	},
	methods: {
		loginOut() {
			Cookies.remove('userName')
			this.$router.push({
        name: 'login'
      })
		}
	},
	components: {
		HeaderTop: HeaderTop 
	}
}
</script>
<style lang="stylus">
.userCenter
	padding-top 1.306667rem
	box-sizing border-box
	background-color #EEEFF1
	height 100%
	.userInfo
		height 2.4rem
		background-color #fff
		display flex
		align-items center
		margin-bottom 0.266667rem
		img 
			width 1.6rem
			border-radius 50%
			margin 0 0.266667rem 0 0.4rem
		div
			height 1.6rem
			display flex
			flex-direction column
			justify-content space-around
			span
				color #333
				font-size 0.426667rem
			i
				color #ff6882
	.userItem
		background-color #fff
		margin-bottom 0.266667rem
		.item
			height 1.12rem
			display flex
			align-items center
			justify-content space-between
			font-size 0.426667rem
			i
				color #8F8E93
				&:first-of-type
					margin 0 0.32rem
			span 
				flex 1
				height 1.12rem
				display flex
				align-items center
				justify-content space-between
				border-bottom 0.013333rem solid #EEEEF0
	.loginout
		background-color #fff
		height 1.146667rem
		line-height 1.146667rem
		font-size 0.48rem
		color #ff6882
		text-align center
</style>