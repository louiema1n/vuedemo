<template>

</template>
<script>
  export default {
    methods: {
      /**
       * @description 删除选择的数据
       * @author louiemain
       * @date Created on 2018-03-02 13:25
       * @param sourceData 源数据
       * @param selectionData 选择的需要删除的数据
       * @param url url地址
       * @return
       */
      deleteSelection(sourceData, selectionData, url) {
        if (selectionData.length > 0) {
          for (let i = 0; i < selectionData.length; i++) {
            let id = selectionData[i].id;
            this.$http.delete(url + id).then(response => {
              this.$Message.info(response.data);
              // 在当前data中移除该条数据
              sourceData.splice(sourceData.findIndex(function (element) {return element.id == id}), 1);
            });
          }

        } else {
          this.$Message.error('请选择需要删除的行。');
        }
      },
      /**
       * @description 提交数据
       * @author louiemain
       * @date Created on 2018/3/2 22:27
       * @param data 需要提交的数据
       * @param url 提交的地址
       * @return
       */
      submitData(data, url) {
        this.$http.post(url, data).then(response => {
          this.$Message.info(response.data);
          this.$router.push('/tab/user');
        })
      },
    },
  };
</script>
