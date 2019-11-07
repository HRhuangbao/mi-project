<template>
  <!-- 尾部模块 -->
  <div id="bottom">
    <ul class="BTM-ul">
      <router-link class="router" id="colo" to="/Home/Commodity/ContentOne">
        <li @click="fun($event)" class="BTM-u-li1 orange">
          <i class="iconfont icon-shouye-"></i>
          <span class="BTM-u-li1-span">首页</span>
        </li>
      </router-link>

      <router-link class="router" id="colo" to="/Home/Tab">
        <li @click="fun($event)" class="BTM-u-li1">
          <i class="iconfont icon-cate"></i>
          <span class="BTM-u-li1-span">分类</span>
        </li>
      </router-link>

      <router-link class="router" id="colo" to="/Home/ShoppingCart">
        <li @click="fun($event)" class="BTM-u-li1">
          <i class="iconfont icon-gouwuche"></i>
          <span class="BTM-u-li1-span">购物车</span>
        </li>
      </router-link>

      <router-link class="router" id="colo" to="/Home/four">
        <li @click="fun($event)" class="BTM-u-li1">
          <i class="iconfont icon-wode-"></i>
          <span class="BTM-u-li1-span">我的</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script >
import "../assets/bottom.scss";

export default {
  data() {
    return {};
  },
  methods: {
    fun(e) {
      e.currentTarget.parentElement.parentElement.firstElementChild.firstElementChild.style.color =
        "#999";
      e.currentTarget.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.style.color =
        "#999";
      e.currentTarget.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.style.color =
        "#999";
      e.currentTarget.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.style.color =
        "#999";
      e.currentTarget.parentElement.firstElementChild.style.color =
        "rgb(255, 98, 0)";
    }
  }
};
</script>