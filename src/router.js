// 路由
import Vue from "vue";
import VueRouter from "vue-router";

// 引入公共组件
// import Breadcrumb from './components/common/Breadcrumb.vue'
import Content from './components/common/Content.vue'
import CommonTable from './components/common/commonTable.vue'

// 引入组件
// import userTable from './components/UserTable.vue'
// import itemTable from './components/ItemTable.vue'
import Main from './components/Main.vue'

// 告诉 vue 使用 vueRouter
Vue.use(VueRouter);

// 定义路由数组
const routes = [
  {path: "/",component: Main},
  {path: "/main",component: Main},
  // {path: "/tab/user",component: userTable,
  //   children: [
  //     {
  //       // 当 /user/:id/profile 匹配成功，
  //       // UserProfile 会被渲染在 User 的 <router-view> 中
  //       path: '/breadcrumb/:first/:second',
  //       component: Breadcrumb
  //     },
  //   ]
  // },
  // {path: "/itemTable",component: itemTable},

  // 面包屑
  {path: "/content/:flag",component: Content,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'commonTable',
        component: CommonTable
      },
    ]
  },

]

// 创建router实例
const router = new VueRouter({
  routes
});

export default router;
