<template>
  <Form ref="userFrom" :model="userFrom" :label-width="80">
    <Input v-model="userFrom.id" :style="{display: 'none'}"/>
    <div :style="{marginBottom: '12px'}"></div>
    <FormItem label="姓名" prop="name">
      <Input v-model="userFrom.name" autofocus/>
    </FormItem>
    <FormItem label="年龄" prop="age">
      <Input v-model="userFrom.age"/>
    </FormItem>
    <FormItem label="地址" prop="address">
      <Select v-model="userFrom.address">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submitForm()">提交</Button>
      <Button type="ghost" @click="clearForm('userFrom')">重置</Button>
      <router-link to="/tab/user" tag="Button" style="margin-left: 8px">取消</router-link>
    </FormItem>
    <tableOpr ref="tableOprUtil"></tableOpr>
  </Form>
</template>
<script>
  import tableOpr from '../utils/TableOpr';
  export default {
    data () {
      return {
        userFrom: this.$route.params.id == null ? {
          id: '',
          name: '',
          age: '',
          address: ''
        } : this.$route.params,
      }
    },
    components: {
      tableOpr: tableOpr
    },
    methods: {
      submitForm () {
        if (this.$route.params.id == null) {
          // 新增
          this.$refs.tableOprUtil.submitData(this.userFrom, '/user/add');
        } else {
          // 修改
          this.$refs.tableOprUtil.submitData(this.userFrom, '/user/upd');
        }
      },
      clearForm (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
