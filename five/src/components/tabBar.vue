<template>
  <!-- 首页top导航栏 -->
  <van-tabs
    class="bao"
    @click="baobao(activeName)"
    background="#f2f2f2"
    height="500px"
    v-model="activeName"
  >
    <van-tab class="bao" name="1" title="推荐" to="/Home/Commodity/ContentOne"></van-tab>
    <van-tab title="手机" name="2" to="/Home/Commodity/ContentTwo"></van-tab>
    <van-tab title="智能" name="3" to="/Home/Commodity/ContentThree"></van-tab>
    <van-tab title="电视" name="4" to="/Home/Commodity/ContentFour"></van-tab>
    <van-tab title="笔记本" name="5" to="/Home/Commodity/ContentFive"></van-tab>
    <van-tab title="家电" name="6" to="/Home/Commodity/ContentSix"></van-tab>
    <van-tab title="生活周边" name="7" to="/Home/Commodity/ContentSeven"></van-tab>
  </van-tabs>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import store from "../store";

Vue.use(Tab).use(Tabs);
import "../assets/tabBar.scss";
export default {
  data() {
    return {
      bao: "",
      activeName: "a"
    };
  },
  methods: {
    baobao(nub) {
      if (nub == 2) {
        store.mo([
          {
            name: `小米手机`,
            url: `//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7242a6f64a85451435401a9c91ab6c5c.jpg?thumb=1&w=720&h=743`,
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d14ef6575c3f5f1ed66753ffe13ee702.jpg?thumb=1&w=720&h=91"
          }
        ]);
      } else if (nub == 3) {
        store.mo([
          {
            name: `智能`,
            url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e16f6bddca5b7b37bc2dbf46c344670.jpg?thumb=1&w=720&h=293",
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/190ae9f1b4d278e51cba41155e35e58c.jpg?thumb=1&w=720&h=465"
          }
        ]);
      } else if (nub == 4) {
        store.mo([
          {
            name: `电视`,
            url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d345aab7dc500f09c846b02c7ed64ea0.jpg?thumb=1&w=720&h=80",
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d73e394235a931e8091fab5fcac42b1f.jpg?thumb=1&w=720&h=269",
            url3:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d681848c12a6c6d0345943b36fb0956.jpg?thumb=1&w=720&h=309",
            url4:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e39b1b2ef8b0b26da4d543735066749c.jpg?thumb=1&w=720&h=112",
            url5:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eb7eb5ff4b36d9aa5cbbd53db1771ec0.jpg?thumb=1&w=720&h=76"
          }
        ]);
      } else if (nub == 5) {
        store.mo([
          {
            name: `笔记本`,
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/278791a0f76b933d2bf41523e720d4ef.jpg?thumb=1&w=720&h=104",
            url3:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4fc852d403774c4fb3cb77672640215.jpg?thumb=1&w=720&h=634",
            url4:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/91bf54bfbd1cb8af56eac93bc57fb83a.png?thumb=1&w=720&h=112",
            url5:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74a8aefb10541d70fa8f687b23f3400f.jpg?w=1080&h=200&bg=272950",
            url6:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f1fbc243e7371494a0d267c9327e7175.jpg?w=1080&h=285&bg=260168"
          }
        ]);
      } else if (nub == 6) {
        store.mo([
          {
            name: `家电`,
            url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a2fa060dc56a5457ad3f0c256581f11.jpg?thumb=1&w=720&h=82",
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3951d8ede9b9bd05a1a4612ed4a52dfa.jpg?thumb=1&w=720&h=247",
            url3:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f79b7656805a61a87a3bbd7d09c5dce3.jpg?thumb=1&w=720&h=514"
          }
        ]);
      } else if (nub == 7) {
        store.mo([
          {
            name: `生活周边`,
            url:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1dd8e7e35f6a14fbd1fc460f1648ceb0.jpg?thumb=1&w=720&h=334",
            url2:
              "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4353e3061221e656dbcb6792b2647d0.jpg?thumb=1&w=720&h=412"
          }
        ]);
      }
    }
  }
};
</script>
