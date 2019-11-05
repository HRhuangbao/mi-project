<template>
  <div id="OneContent">
    <Swipe />
    <Grid />
    <Picture />
    <Commodity />
  </div>
</template>
<script>
import Swipe from "./Swipe";
import Grid from "./Grid";
import Picture from "./Picture";
import Commodity from "./Commodity";
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