<template>
  <Form ref="userFrom" :model="userFrom" :label-width="80" action="/zzz">
    <FormItem label="姓名" prop="name">
      <Input v-model="userFrom.name"></Input>
    </FormItem>
    <FormItem label="年龄" prop="age">
      <Input v-model="userFrom.age"></Input>
    </FormItem>
    <FormItem label="地址" prop="address">
      <Select v-model="userFrom.address">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="submitForm()">Submit</Button>
      <Button type="ghost" @click="clearForm('userFrom')" style="margin-left: 8px">Reset</Button>
    </FormItem>
    <tableOpr ref="tableOprUtil"></tableOpr>
  </Form>
</template>
<script>
  import tableOpr from '../utils/TableOpr';
  export default {
    data () {
      return {
        userFrom: {
          name: '',
          age: '',
          address: ''
        },
      }
    },
    components: {
      tableOpr: tableOpr
    },
    methods: {
      submitForm () {
        // alert(JSON.stringify(this.userFrom));
        this.$refs.tableOprUtil.submitData(this.userFrom, '/user/add');
      },
      clearForm (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
