<template>
  <!-- 分类的页面 -->
  <div class="Tab">
    <HeaderTwo />
    <NavigationBar />
  </div>
</template>
<script>
import HeaderTwo from "../components/HeaderTwo.vue";
//头部的第二个模块
import NavigationBar from "../components/NavigationBar.vue";
// 左边导航栏的模块
export default {
  name: "Tab",
  components: {
    HeaderTwo,
    NavigationBar
  }
};
</script>
