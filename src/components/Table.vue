<template>
  <div class="layout">
    <Layout>
      <!-- 面包屑 -->
      <Breadcrumb :style="{margin: '12px 0'}">
        <BreadcrumbItem >表格</BreadcrumbItem>
        <BreadcrumbItem to="/table">表格1</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{background: '#fff', minHeight: '70vh'}">
        <Table border :columns="columns" :data="data"></Table>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      this.$http.get('/item/all').then(response => {
        var da = response.data.data;
      });
      return {
        columns: [
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data: da
      }
    },
    created() {

    },
    methods: {

    }
  };
</script>
