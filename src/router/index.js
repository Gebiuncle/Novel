import Vue from 'vue'
import Router from 'vue-router'
import Cookies from 'js-cookie'

import Login from '@/components/Login'
import Home from '@/components/Home'

import Index from '@/components/Index'
import Classify from '@/components/Classify'
import Rank from '@/components/Rank'
import UserCenter from '@/components/UserCenter'

import NovelDetail from '@/components/NovelDetail'
import RankList from '@/components/RankList'
import Search from '@/components/Search'

import History from '@/components/History'
import Feedback from '@/components/Feedback'
import AboutUs from '@/components/AboutUs'


Vue.use(Router)

export const router =  new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: '',
      redirect: '/home/index'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'classify',
          name: 'classify',
          component: Classify,
          children: [
            {path: 'novelDetail/:id', name: 'novelDetail', component: NovelDetail}
          ]
        },
        {
          path: 'rank',
          name: 'rank',
          component: Rank,
          children: [
            {path: 'rankList/:rankid', name: 'rankList', component: RankList}
          ]
        },
        {
          path: 'userCenter',
          name: 'userCenter',
          component: UserCenter
        }
      ]
    },
    { 
      path: '/history', 
      name: 'history', 
      component: History
    },
    { 
      path: '/feedback', 
      name: 'feedback', 
      component: Feedback
    },
    { 
      path: '/aboutUs', 
      name: 'aboutUs', 
      component: AboutUs
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(!Cookies.get('userName') && to.name !== 'login'){
    next({
      name: 'login'
    })
  }else if(Cookies.get('userName')  && to.name === 'login'){
      next({
        name: 'home'
      })
  }else {
    next()
  }


})

router.afterEach((to) => {
    window.scrollTo(0, 0);
});