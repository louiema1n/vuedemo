<template>
  <Breadcrumb :style="{margin: '12px 0'}">
    <!--<BreadcrumbItem to="/">Home</BreadcrumbItem>-->
    <BreadcrumbItem to="/">主页</BreadcrumbItem>
    <BreadcrumbItem>{{$route.params.first}}</BreadcrumbItem>
    <BreadcrumbItem>{{$route.params.second}}</BreadcrumbItem>
  </Breadcrumb>
</template>
<script>
  export default {

  }
</script>
