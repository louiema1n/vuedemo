<!-- 样式 -->
<style scoped>
  .layout{
    /*border: 1px solid #d7dde4;*/
    background: #f5f7f9;
    position: relative;
    /*border-radius: 4px;*/
    overflow: hidden;
  }
  .layout-logo{
    height: 64px;
    float: left;
    padding-left: 3%;
  }
  .layout-logo a{
    font-size: large;
  }
  .layout-nav{
    width: auto;
    margin: 0 auto;
    float: right;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }

</style>

<!-- 模板 -->
<template>
  <!--<div id="app">-->
    <!--<img src="./assets/logo.png">-->
    <!--<HelloWorld/>-->
  <!--</div>-->

  <div class="layout">
    <Layout>
      <!-- 头部 -->
      <Header :style="{position: 'fixed', width: '100%', right: 0, padding: '0', background: '#f5f7f9', zIndex: '1000'}">
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo">
            <!--<img src="https://file.iviewui.com/dist/03635a3c88122ad605117128f3fda0ca.png" height="100%"/>-->
            <a href="https://www.iviewui.com" style=" vertical-align: middle"><Icon type="ios-flame"></Icon> 欢迎使用XXX系统</a>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="home"></Icon>
              首页
            </MenuItem>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
              </template>
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </Submenu>
          </div>
        </Menu>
      </Header>
      <!-- 中间部分 -->
      <Layout :style="{padding: '64px 0 0 0'}">
        <!-- 侧面导航栏 -->
        <Sider hide-trigger :style="{background: '#fff', position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
          <Menu active-name="0" theme="light" width="auto" :accordion="true">
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <MenuItem name="0">
              <router-link to="/main" tag="li">
                <Icon type="home"></Icon> 主页
              </router-link>
            </MenuItem>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                表格
              </template>
              <MenuItem name="1-1">
                <router-link to="/table" tag="li">
                  <Icon type="ios-navigate"></Icon> 表格1
                </router-link>
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 12px 0 212px'}">
          <Content :style="{background: '#fff', minHeight: '70vh'}">
            <!-- 路由出口 -->
            <!-- 路由匹配到的组件将渲染在这里 -->
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
      <!-- 底部信息 -->
      <Footer class="layout-footer-center" >2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>

<!-- 脚本 -->
<script>
import Main from './components/Main'

export default {
  name: 'App',
  components: {
    Main
  }
}


</script>


