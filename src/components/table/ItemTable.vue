<template>
  <div class="layout">
    <Layout>
      <router-view></router-view>
        <ButtonGroup :style="{padding: '0 0 5px 0'}">
          <Button @click="handleSelectAll(true)" type="primary" icon="plus"></Button>
          <Button @click="handleSelectAll(false)" type="warning" icon="edit"></Button>
          <Button @click="del" type="error" icon="trash-b"></Button>
        </ButtonGroup>
        <Table border :columns="columns" :data="data" ref="tab" @on-row-click="handleSelectRow"></Table>
      <!-- 引入工具类公共组件 -->
      <tableOpr ref="tableOprUtil"></tableOpr>
    </Layout>
  </div>
</template>
<script>
  import TableOpr from "../utils/TableOpr.vue";
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
      this.$http.get('/item/all').then(response => {
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
            title: '名称',
            key: 'name'
          },
          {
            title: '说明',
            key: 'remark'
          }
        ];
        this.columns = columns;
        this.data = JSON.parse(JSON.stringify(da));
      });
    },
    components: {
      'tableOpr': TableOpr
    },
    methods: {
      del() {
        // 获取选择的行数据
        let selectionData = this.$refs.tab.getSelection();
        // 删除数据
        this.$refs.tableOprUtil.deleteSelection(this.data, selectionData, '/item/del/');
      },
      handleSelectRow(row, index) {
        // 设置选中行
        this.$refs.tab.toggleSelect(index);
      },
    }
  };
</script>
