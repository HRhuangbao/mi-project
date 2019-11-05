<template>
  <div class="Commodity">
    <div class="Cm-picture">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1425a62849f50bb2f2f56ea920fb0c49.jpg?thumb=1&w=720&h=280"
        alt
      />
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440"
        alt
      />
    </div>
    <div class="Cm-goods">
      <div class="Cm-goods_one"></div>
      <div class="Cm-goods_two"></div>
      <div class="Cm-goods_three"></div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.Commodity {
  .Cm-picture {
    width: 100%;
    img:nth-of-type(1) {
      width: 100%;
      height: 3.889rem;
    }
    img:nth-of-type(2) {
      width: 100%;
      margin-top: 0.002rem;
      height: 6.111rem;
    }
  }
  .Cm-goods {
    .Cm-goods_one,
    .Cm-goods_two,
    .Cm-goods_three {
      background: yellow;
      margin-top: 10px;
      width: 100%;
      height: 6.7729rem;
    }
    .Cm-goods_one {
      margin: 0px;
    }
  }
}
</style>