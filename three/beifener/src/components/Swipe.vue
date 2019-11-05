<template>
  <van-swipe>
    <van-swipe-item>
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5799199942d22b5626fb154a96848441.jpg?thumb=1&w=720&h=360"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd81ecae235f04eb15bf171defeafaa.jpg?thumb=1&w=720&h=360"
        alt
      />
    </van-swipe-item>
    <van-swipe-item>
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b8afebacb8a69eda2b6d324dcc4a252.jpg?thumb=1&w=720&h=360"
        alt
      />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
export default {
  methods: {}
};
</script>
<style scoped>
img {
  height: 5rem;
  width: 320px;
}
</style>