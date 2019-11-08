<template>
  <!-- 第一个routers 的第一个分页 -->
  <div id="Home">
    <router-view />
    <bottom />
  </div>
</template>
<script>
import bottom from "../components/bottom";
//尾部
export default {
  name: "Home",
  components: {
    bottom
  }
};
</script>

<style scoped>
</style>