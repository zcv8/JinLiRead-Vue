// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//Webpack 注册并使用 Bootstrap4.0 
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
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
import './assets/js/common.js'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
