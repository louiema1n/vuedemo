<template>
  <Form ref="userFrom" :model="userFrom" :label-width="80" action="/zzz">
    <FormItem label="姓名" prop="name">
      <Input v-model="userFrom.name"></Input>
    </FormItem>
    <FormItem label="年龄" prop="age">
      <Input v-model="userFrom.age"></Input>
    </FormItem>
    <FormItem label="地址">
      <Select v-model="userFrom.address">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('userFrom')">Submit</Button>
      <Button type="ghost" @click="clearForm('userFrom')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
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
    methods: {
      handleSubmit (name) {
        alert(this.$refs[name].serialize())
      },
      clearForm (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
