// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Webpack 注册并使用 Bootstrap4.0 
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
Vue.use(BootstrapVue)
Vue.use(VueResource)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue/dist/bootstrap-vue.js'
//Webpack 使用Jquery
import $ from './assets/js/jquery-vendor.js'
//引入自定义的样式和脚本
import './assets/css/bootstrap.extend.css'
import './assets/css/ionicons.min.css'
import './assets/css/open-iconic-bootstrap.css'
//使用VueSimplemde组件
import VueSimplemde from 'vue-simplemde'
Vue.use(VueSimplemde)

//Vue实例的属性
Vue.config.productionTip = false
Vue.prototype.WebApi = 'http://vue-api.lovemoqing.com'

//设置vue-resource对json请求的支持，防止出现 Options类型的请求
Vue.http.options.emulateJSON = true;

//对请求的拦截，在请求之前和响应之前做一些操作
Vue.http.interceptors.push(function (request) {
  //实现跨站Cookie
  request.credentials = true;
  return function (response) {
    var body = response.body;
    if (body.Cookie != undefined && body.Cookie != "") {
      document.cookie = body.Cookie;
    }
    if (body.ErrCode == "INVALID_SESSION") {
      alert("未登录");
      return;
      //this.$router.push({path: "/login"});
    }
  };
});

//还可以有对路由的拦截，在路由跳转的时候验证访问路由的权限
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (document.cookie.indexOf("AUTHORIZATIONKEY=") > -1) { // 判断当前的token是否存在
      next();
    }
    else {
      next({
        path: '/',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});


/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
