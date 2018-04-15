<template>
  <div class="login" :style="bgImg">
    <div class="loginCon">
      <div class="userName">
        <i class="fa fa-user" aria-hidden="true"></i>
        <input type="text" v-model="userName" placeholder="用户名" @keyup="validate">
      </div>
      <div class="userName">
        <i class="fa fa-lock" aria-hidden="true"></i>
        <input type="password" v-model="password" placeholder="密码" @keyup="validate">
      </div>
    </div>
    <div class="loginBtn"><button :class="{active}" @click="loginFun">登录</button></div>
  </div>
</template>

<script>
import bgImg from 'static/image/login-bg.png'
import Cookies from 'js-cookie'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      bgImg: {
        'background-image': 'url('+bgImg+')',
        'background-size': 'cover'
      },
      active: false
    }
  },
  created() {
    
  },
  methods: {
    validate(){
      if(this.userName && this.password){
        this.active = true
      }else {
        this.active = false
      }
    },
    loginFun() {
      if(!this.userName || !this.password)
        return
      else if(this.userName && this.password){
        Cookies.set('userName', this.userName, { expires: 7})
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.login
  height 100%
  width 100%
  float left
  background-size cover
  .loginCon
    border 1px solid #fff
    margin 68% 0.666667rem 0
    height 2.666667rem
    div
      height 1.306667rem
      line-height 1.306667rem
      border-bottom 1px solid #fff
      display flex
      align-items center
      padding 0 0.533333rem
      font-size 0.48rem
      color #fff
      i
        width 0.533333rem
        padding-right 0.266667rem
      input
        height 1.28rem
        line-height 1.28rem
        flex 1
        border none
        background none
        color #fff
        font-size 0.48rem
      input::-webkit-input-placeholder
          color #fff
      &:last-child
        border none 
  .loginBtn
    margin 0.533333rem 0.666667rem
    button
      height 1.066667rem
      display block
      width 100%
      color #fff
      font-size 0.533333rem
      background #fb96a8
      border none
    .active
      background #ff6882
</style>