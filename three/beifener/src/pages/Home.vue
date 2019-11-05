<template>
  <div id="Home">
    <router-view />
    <bottom />
  </div>
</template>
<script>
import bottom from "../components/bottom";
export default {
  name: "Home",
  components: {
    bottom
  }
};
</script>

<style scoped>
</style>