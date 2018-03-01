<template>
  <div class="layout">
    <Layout>
      <!-- 面包屑 -->
      <Breadcrumb :style="{margin: '12px 0'}">
        <BreadcrumbItem >表格</BreadcrumbItem>
        <BreadcrumbItem to="/table">项目表</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{background: '#fff', minHeight: '70vh', padding: '10px'}">
        <ButtonGroup :style="{padding: '0 0 5px 0'}">
          <Button @click="handleSelectAll(true)" type="primary" icon="plus"></Button>
          <Button @click="handleSelectAll(false)" type="warning" icon="edit"></Button>
          <Button @click="del" type="error" icon="trash-b"></Button>
        </ButtonGroup>
        <Table border :columns="columns" :data="data" ref="tab" @on-row-click="handleSelectRow"></Table>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [],
        data: []
      }
    },
    mounted(){
    },
    created() {
      this.$http.get('/tab/all').then(response => {
        var da = response.data;
        var columns = [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            type: 'index',
            width: 80,
            align: 'center',
            title: '编号'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ];
        this.columns = columns;
        this.data = JSON.parse(JSON.stringify(da));
      });
    },
    methods: {
      del() {
        // 获取选择的行数据
        let zz = this.$refs.tab.getSelection();
        if (zz.length > 0) {
          for (let i = 0; i < zz.length; i++) {
            let id = zz[i].id;
            this.$http.delete('/tab/del/' + id).then(response => {
              this.$Message.info(response.data);
              // 在当前data中移除该条数据
              this.data.splice(this.data.findIndex(function (element) {return element.id == id}), 1);
            });
          }

        } else {
          this.$Message.error('请选择需要删除的行。');
        }
      },
      handleSelectRow(row, index) {
        // 设置选中行
        this.$refs.tab.toggleSelect(index);
      },
    }
  };
</script>
