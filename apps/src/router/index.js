import Vue from 'vue'
import Router from 'vue-router'
import LoginHeader from '@/components/LoginHeader'
import ArticleCreate from '@/components/ArticleCreate'
import Home from '@/components/Home'
import NoHeader from '@/components/NoHeader'
import Article from '@/components/Article'
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'

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
      path:'/profile',
      name: 'profile',
      components: {
        header: LoginHeader,
        content: Profile
      }
    },
    {
      path:'/settings',
      name: 'settings',
      components: {
        header: LoginHeader,
        content: Settings
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
