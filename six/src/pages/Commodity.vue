<template>
  <!-- 首页内的第二个routers 即控制切换 《推荐 手机 智能》 -->
  <div id="Commodity">
    <cheader />
    <tabBar />
    <router-view />
  </div>
</template>
<script>
import cheader from "../components/header";
//头部模块
import tabBar from "../components/tabBar";
//尾部模块

export default {
  name: "Commodity",
  components: {
    cheader,
    tabBar
  }
};
</script>
 