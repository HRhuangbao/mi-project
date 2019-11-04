<template>
  <div id="app">
    <!-- <one />
    <tow />-->
    <router-view />
    <bottom />
  </div>
</template>

<script>
import "./assets/bao.scss";
import "./assets/bottom.scss";
// import one from "./components/one.vue";
// import tow from "./components/tow.vue";
import bottom from "./components/bottom.vue";

export default {
  name: "app",
  components: {
    // one,
    // tow,
    bottom
  }
};
</script>

<style>
/* sd */
</style>
