<template>
  <Breadcrumb :style="{margin: '12px 0'}">
    <!--<BreadcrumbItem to="/">Home</BreadcrumbItem>-->
    <BreadcrumbItem>{{$route.params.flag}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
  export default {

  }
</script>
