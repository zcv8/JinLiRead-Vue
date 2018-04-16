import Vue from 'vue'
import Router from 'vue-router'
import LoginHeader from '@/components/LoginHeader'
import ArticleCreate from '@/components/ArticleCreate'
import Home from '@/components/Home'
import NoHeader from "@/components/NoHeader"
import Article from "@/components/Article"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: LoginHeader,
        content: Home
      }
    },
    {
      path: '/article/create',
      name: 'articleCreate',
      meta: { requireAuth: true }, //需要登录权限才能访问
      components: {
        header: NoHeader,
        content: ArticleCreate
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      components: {
        header: NoHeader,
        content: Article
      }
    }
  ]
})
