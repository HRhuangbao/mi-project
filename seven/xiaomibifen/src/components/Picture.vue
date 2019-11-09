<template>
  <!-- 图片展览模块 -->
  <div class="Pbig">
    <div class="Pb-left">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/32b5d24417b673008f386592c4d17046.jpg?thumb=1&w=358&h=508"
        alt
      />
    </div>
    <div class="Pb-right">
      <div class="Pb-right-top">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1480d862e1f5a41e5adae8c030eef511.jpg?thumb=1&w=358&h=252"
          alt
        />
      </div>
      <div class="Pb-right-bottom">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9b502cb29e747ce8da5a0237e4cb912b.jpg?thumb=1&w=358&h=252"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/Picture.scss";
export default {};
</script>

<style lang="scss" scoped>
.Pbig {
  display: flex;
  width: 100%;
  justify-content: space-around;
  .Pb-left {
    img {
      width: 4.9722rem;
      height: 7.0552rem;
    }
  }
  .Pb-right {
    margin-left: 0.02rem;
    display: flex;
    flex-direction: column;
    .Pb-right-top {
      height: 3.572rem;

      img {
        width: 4.9722rem;
        height: 3.477rem;
      }
    }
    .Pb-right-bottom {
      height: 3.477rem;

      img {
        width: 4.9722rem;
        height: 3.477rem;
      }
    }
  }
}
</style>