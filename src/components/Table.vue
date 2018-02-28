<template>
  <div class="layout">
    <Layout>
      <!-- 面包屑 -->
      <Breadcrumb :style="{margin: '12px 0'}">
        <BreadcrumbItem >表格</BreadcrumbItem>
        <BreadcrumbItem to="/table">表格1</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{background: '#fff', minHeight: '70vh'}">
        <Table border :columns="columns" :data="data1"></Table>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [],
        data1: []
      }
    },
    mounted(){
      this.$http.get('/tab/all').then(response => {
      var da = response.data;
      var columns = [
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
      ];
      this.columns = columns;
      this.data1 = JSON.parse(JSON.stringify(da));
    });
    },
    created() {
      // this.init();
    },
    methods: {

    }
  };
</script>
