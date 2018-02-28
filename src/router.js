// 路由
import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Table from './components/Table.vue'
import Main from './components/Main.vue'

// 告诉 vue 使用 vueRouter
Vue.use(VueRouter);

// 定义路由数组
const routes = [
  {path: "/",component: Main},
  {path: "/main",component: Main},
  {path: "/table",component: Table},
]

// 创建router实例
const router = new VueRouter({
  routes
});

export default router;
