<template>
  <div class="layout">
    <Layout>
      <!-- 导航及背景 -->
      <router-view></router-view>
      <div>
        <!-- 按钮组 -->
        <ButtonGroup :style="{padding: '0 0 5px 0'}">
          <Button @click="add" type="primary" icon="plus"></Button>
          <Button @click="upd" type="warning" icon="edit"></Button>
          <Button @click="del" type="error" icon="trash-b"></Button>
        </ButtonGroup>
        <!-- 搜索框 -->
        <AutoComplete
          v-model="value"
          icon="ios-search"
          :clearable="true"
          :data="searchData"
          :filter-method="searchMethod"
          @on-select="handleSearch"
          placeholder="请输入姓名查询"
          style="width:200px; float: right">
        </AutoComplete>
      </div>
      <!-- 表格 -->
      <Table border :columns="columns" :data="data" ref="tab" @on-row-click="handleSelectRow">
      </Table>
      <!-- 分页 -->
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page
            :total="total"
            :current="current"
            :page-size="size"
            :page-size-opts="[1,5,10,100]"
            @on-change="selectPage"
            @on-page-size-change="selectSize"
            show-elevator
            show-total
            show-sizer></Page>
        </div>
      </div>
      <!-- 表格操作共用组件 -->
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
        data: [],
        value: '',
        searchData: [],
        total: 0,
        current: 1,
        size: 5,
      }
    },
    beforecreate() {
      this.$Loading.start();
    },
    created() {
    },
    mounted() {
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
      //这个是钩子函数
      //如果initData函数要执行，必须先执行钩子函数
      //这个钩子函数完成了对cratView函数的调用
      //应该注意的是，使用mounted 并不能保证钩子函数中的 this.$el 在 document 中。为此还应该引入Vue.nextTick/vm.$nextTick
      this.$nextTick(function () {
        this.initData('/user/all', this.current, this.size);
      })
      this.$Loading.finish();
    },
    components: {
      'tableOpr': TableOpr
    },
    methods: {
      add() {
        // 跳转至新增界面
        this.$router.push('/user/add');
      },
      del() {
        // 获取选择的行数据
        let selectionData = this.$refs.tab.getSelection();
        // 删除数据
        this.$refs.tableOprUtil.deleteSelection(this.data, selectionData, '/user/del/');
      },
      upd() {
        // 获取选择的行数据
        let selectionData = this.$refs.tab.getSelection();
        if (selectionData.length == 1) {
          // 修改数据
          this.$router.push({name: 'updUser', params: selectionData[0]});
        } else {
          this.$Message.error('请选择需要修改的1行数据！');
        }
      },
      handleSelectRow(row, index) {
        // 设置选中行
        this.$refs.tab.toggleSelect(index);
      },
      searchMethod(value, option) {
        // return value;
        return option.indexOf(value) !== -1;
      },
      handleSearch(value) {
        if (value == '') {
          this.initData('/user/all', this.current, this.size);
        } else {
          this.data = this.$refs.tableOprUtil.filterData(this.data, value);
        }
      },
      selectPage(pageNum) {
        this.initData('/user/all', pageNum, this.size);
        this.current = pageNum;
      },
      selectSize(size) {
        this.initData('/user/all', this.current, size);
        this.size = size;
      },
      initData(url, pageNum, size) {
          this.$http.get(url + '?pageNum=' + pageNum + '&size=' + size).then(response => {
            this.data = response.data.rows;
            this.searchData = this.$refs.tableOprUtil.initSearchData(this.data);
            this.total = response.data.total;
          }).catch(function (error) {
            this.$Loading.error();
            this.$Notice.warning({
              title: error,
            });
          });
        },
    }
  };
</script>
