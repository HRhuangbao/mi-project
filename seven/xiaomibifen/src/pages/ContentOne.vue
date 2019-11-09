<template>
  <!-- 首页内的第二个routers 的第一个页面 推荐-->
  <div id="OneContent">
    <Swipe />
    <Grid />
    <Picture />
    <Commodity />
    <Commodity />
  </div>
</template>
<script>
import Swipe from "../components/Swipe";
//轮播图
import Grid from "../components/Grid";
//宫格
import Picture from "../components/Picture";
//三图
import Commodity from "../components/Commodity";
//商品展览
export default {
  name: "OneContent",

  components: {
    Swipe,
    Grid,
    Picture,
    Commodity
  }
};
</script>
<style scoped>
#OneContent {
  padding-top: 1.91rem;
  padding-bottom: 1.62rem;
}
</style>