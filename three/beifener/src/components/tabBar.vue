<template>
  <van-tabs class="bao" background="#f2f2f2" height="500px" v-model="activeName">
    <van-tab class="bao" title="推荐" to="/Home/Commodity/OneContent"></van-tab>
    <van-tab title="手机" to="/Home/Commodity/six"></van-tab>
    <van-tab title="智能" to="/Home/Commodity/six"></van-tab>
    <van-tab title="电视" to="/Home/Commodity/six"></van-tab>
    <van-tab title="笔记本" to="/Home/Commodity/six"></van-tab>
    <van-tab title="家电" to="/Home/Commodity/six"></van-tab>
    <van-tab title="生活周边" to="/Home/Commodity/six"></van-tab>
  </van-tabs>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
import "../assets/tabBar.scss";
export default {
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>
