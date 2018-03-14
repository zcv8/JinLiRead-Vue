/*
 * VUE路由系统的定义
 */

const router = new VueRouter({
  routes: [
  	{
  		path:"/",
  		components:{
  			header:loginHeader,
  			content:{ template:"<h1>Hello World</h1>"}
  		}
  	}
  ]
});