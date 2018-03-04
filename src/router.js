// 路由
import Vue from "vue";
import VueRouter from "vue-router";

// 引入公共组件
import Content from './components/common/Content.vue'

// 引入组件
import userTable from './components/table/UserTable.vue'
import userAdd from './components/table/UserAdd.vue'
import itemTable from './components/table/ItemTable.vue'
import Main from './components/Main.vue'

// 告诉 vue 使用 vueRouter
Vue.use(VueRouter);

// 定义路由数组
const routes = [
  {path: "/", component: Main},
  {path: "/main", component: Main},
  {
    path: "/tab", component: Content,
    children:[
      { path: 'user', component: userTable},
      { path: 'item', component: itemTable,
      //   children:[
      //     { path: 'add', component: Content}
      //     // { path: 'item', component: itemTable},
      // ]
      }
    ]
  },
  { path: '/user', component: Content,
    children:[
      { path: 'add', component: userAdd},
      { path: 'upd', name: 'updUser', component: userAdd},
      // { path: 'item', component: itemTable},
      ]
  }

];

// 创建router实例
const router = new VueRouter({
  routes
});

export default router;
