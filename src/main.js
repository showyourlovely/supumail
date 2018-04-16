// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入动画库
import 'animate.css'

// 引入重置样式表
import './css/reset.css'

// 引入axios并添加到原型方法上
import axios from 'axios'
Vue.prototype.$http = axios

// 引入font-awesome
import '../static/font-awesome-4.7.0/css/font-awesome.min.css'

// 引入store，vuex
import store from './store'


import 'mint-ui/lib/style.css'
import { Cell,Button } from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Button.name, Button );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
