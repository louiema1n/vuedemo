// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';

// 引入路由
import router from "./router.js";

// 引入axios
import axios from 'axios';

Vue.use(iView);

Vue.config.productionTip = false;

// 设置请求的默认host
axios.defaults.baseURL = "http://localhost:8081/";
// 给axios绑定给vue成为一个属性
Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
