<template>
	<div class="search-box">
		<div class="inputCon">
			<i class="fa fa-search"></i>
			<input type="text" placeholder="白夜追凶" v-model="val" @keyup="turnkey" @keyup.enter="searchVal">
			<i class="fa fa-times" v-show="val" @click="clearVal"></i>
		</div>
		<span @click="backFun">取消</span>
	</div>
</template>
<script>
export default {
	data() {
		return {
			val: '',
			bool: true,
			iskey: false
		}
	},
	props:{
		newval: {
			type: String,
			default: ''
		}
	},
	watch:{
		val(newval) {
			if(this.iskey){
				console.log(1)
				this.autoComplete(newval.trim())
			}
		},
		newval(newval){
			alert()
			this.iskey = false
			this.val = newval
		}
	},
	methods: {
		turnkey(){
			this.iskey = true
		},
		clearVal() {
			this.val = '' 
			this.$emit('getautoCompleteList', [])
		},
		autoComplete(newval) {
			if(newval == ''){
				this.$emit('getautoCompleteList', [])
				return
			}
			
			if(this.bool){
				this.bool = false
				this.$http.get('api/book/auto-complete', {
	        params: {query: this.val}
	      }).then(res => {
        	if(res.data.ok = true){
        		this.bool = true
        		this.$emit('getautoCompleteList', res.data.keywords)
        	}
        })
			}	
		},
		searchVal(){
			if(this.val.trim())
				this.$emit('searchVal', this.val.trim())
		},
		backFun() {
			this.$router.push({
				name: 'index',
				params: {
					
				}
			})
		}
	}
}
</script>
<style lang="stylus">
.search-box
	height: 1.28rem
	display: flex
	align-items: center
	justify-content: space-between
	background-color: #ff6882
	color #fff
	padding: 0 0.266667rem	
	.inputCon
		flex 1
		display flex
		align-items: center
		background-color #fff
		height: 0.8rem
		line-height: 0.8rem
		padding: 0 0.266667rem
		box-sizing: border-box
		border-radius: 0.4rem 
		i 
			font-size 0.32rem
			color #999
		input 
			flex 1
			border none
			background-color #fff
			padding 0 0.266667rem
			font-size 0.373333rem
			color #666
	span 
		padding-left 0.266667rem
		font-size 0.373333rem
</style>