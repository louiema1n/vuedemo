<template>
  <div class="layout">
    <Layout>
      <Breadcrumb :style="{margin: '12px 0'}">
        <!--<BreadcrumbItem to="/">Home</BreadcrumbItem>-->
        <BreadcrumbItem to="/">主页</BreadcrumbItem>
        <BreadcrumbItem>{{$route.params.flag}}</BreadcrumbItem>
        <!--<BreadcrumbItem>{{$route.params.II}}</BreadcrumbItem>-->
      </Breadcrumb>
      <Content :style="{background: '#fff', minHeight: '70vh', padding: '10px'}">
        <!--<router-link to="/commonTable">zz</router-link>-->
        <router-view></router-view>
        <!--<ButtonGroup :style="{padding: '0 0 5px 0'}">-->
          <!--<Button @click="handleSelectAll(true)" type="primary" icon="plus"></Button>-->
          <!--<Button @click="handleSelectAll(false)" type="warning" icon="edit"></Button>-->
          <!--<Button @click="del" type="error" icon="trash-b"></Button>-->
        <!--</ButtonGroup>-->
        <!--<Table border :columns="columns" :data="data" ref="tab" @on-row-click="handleSelectRow"></Table>-->
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      this.$router.push({path: 'commonTable'});
      next();
    },
    created() {
      // this.$router.push({path: 'commonTable'});
    }
  };
</script>
