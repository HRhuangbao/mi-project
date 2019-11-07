<template>
  <!-- 通用模版1 -->
  <div id="tow">
    <div v-for="(a,index) in this.stores" :key="index
    ">
      <img :src="a.url" alt />
      <img :src="a.url2" alt />
      <img :src="a.url3" alt />
      <img :src="a.url4" alt />
      <img :src="a.url5" alt />
      <img :src="a.url6" alt />
    </div>
  </div>
</template>
<script>
import store from "../store";

export default {
  data() {
    return {
      chan: store.data.pipei,
      stores: store.data.shuju
    };
  },
  methods: {},
  computed: {}
};
window.console.log(store.data.pipei);
</script>
<style lang='scss' scoped>
img {
  width: 100%;
  display: flex;
}
</style>