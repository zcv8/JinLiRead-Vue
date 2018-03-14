import Vue from 'vue'
import Router from 'vue-router'
import LoginHeader from '@/components/LoginHeader'
import ArticleCreate from '@/components/ArticleCreate'
import Home from '@/components/Home'
import NoHeader from "@/components/NoHeader"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
      	header : LoginHeader,
      	content: Home
      }
    },
    {
      path:'/article/create',
      name:'articleCreate',
      components:{
        header:NoHeader,
        content:ArticleCreate
      }
    }
  ]
})
