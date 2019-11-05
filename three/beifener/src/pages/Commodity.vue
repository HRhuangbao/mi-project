<template>
  <div id="Commodity">
    <cheader />
    <tabBar />
    <router-view />
  </div>
</template>
<script>
import cheader from "../components/header";
import tabBar from "../components/tabBar";

export default {
  name: "Commodity",
  components: {
    cheader,
    tabBar
  }
};
</script>
 