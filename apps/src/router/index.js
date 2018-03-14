import Vue from 'vue'
import Router from 'vue-router'
import LoginHeader from '@/components/LoginHeader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
      	header : LoginHeader,
      	content: {
      		template:"<h1>Hello World</h1>"
      	}
      }
    }
  ]
})
