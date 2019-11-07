<template>
  <div id="maindiv" :style="{height:(screenHeight-80)+'px'}">
    <keep-alive>
      <component :is="flags"></component>
    </keep-alive>
    <!-- </div> -->
    <footer class="footer"></footer>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // screenWidth: document.documentElement.clientWidth, // 屏幕宽度
      screenHeight: document.documentElement.clientHeight, // 屏幕高度,
      flags: ""
    };
  },
  watch: {
    // 'screenWidth': function (val) { // 监听屏幕宽度变化
    //   var oIframe = document.getElementById('maindiv')
    //   oIframe.style.width = (Number(val)) + 'px' // '120'是页面布局调整，可去除
    // },
    screenHeight: function(val) {
      // 监听屏幕高度变化
      var oIframe = document.getElementById("maindiv");
      // alert(this.$store.getters.screenHeight)
      oIframe.style.height = Number(val) - 40 + "px";
    }
  },
  mounted() {
    var _this = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      // _this.screenWidth = document.documentElement.clientWidth // 窗口宽度
      _this.screenHeight = document.documentElement.clientHeight; // 窗口高度
    };
  }
};
</script>