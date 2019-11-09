<template>
  <!-- 商品展览模块 -->
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
      <div class="Cm-goods_one">
        <div class="Cm-Goods-sp-left">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
        <div class="Cm-Goods-sp-right">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
      </div>
      <div class="Cm-goods_two">
        <div class="Cm-Goods-sp-left">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
        <div class="Cm-Goods-sp-right">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
      </div>
      <div class="Cm-goods_three">
        <div class="Cm-Goods-sp-left">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
        <div class="Cm-Goods-sp-right">
          <div class="Cm-Goods-sp-left-top">
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/918eafcf051967f9d212a649fad7de28.jpg?thumb=1&w=344&h=280"
              alt
            />
          </div>
          <div class="Cm-Goods-sp-left-bottom">
            <h3>Redmi Note 8 Por</h3>
            <p>6400万全场景四摄</p>
            <p>
              <span>¥1299</span>
              <span>&nbsp;起</span>
            </p>
            <div>立刻购买</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Cm-more">更多小米产品></div>
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
      margin-top: 10px;
      width: 100%;
      height: 6.7729rem;
      display: flex;
      justify-content: space-between;
      padding: 0px 0.16666rem;
      box-sizing: border-box;
      .Cm-Goods-sp-left,
      .Cm-Goods-sp-right {
        width: 4.7778rem;
        height: 6.7729rem;
        .Cm-Goods-sp-left-top {
          display: flex;
          flex-direction: column;
          img {
            width: 4.7778rem;
            height: 3.889rem;
          }
        }
        .Cm-Goods-sp-left-bottom {
          width: 4.7778rem;
          height: 2.8839rem;
          padding: 0.27777rem 0.37499rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.403rem;
          line-height: 0.45rem;

          h3 {
            font-weight: normal;
          }
          p:nth-of-type(1) {
            margin-top: 0.1rem;
            font-size: 0.3rem;
            color: rgba(0, 0, 0, 0.54);
            line-height: 0.4rem;
          }
          p:nth-of-type(2) {
            margin-top: 0.1rem;
            span:nth-of-type(1) {
              color: #ea625b;
            }
            span:nth-of-type(2) {
              color: #ea625b;
              font-size: 0.3rem;
            }
          }
          div {
            background: #ea625b;
            font-size: 0.2rem;
            color: #ffffff;
            width: 2.7774rem;
            height: 0.8192rem;
            text-align: center;
            line-height: 0.8192rem;
            border-radius: 4% / 16%;
          }
        }
      }
    }
    .Cm-goods_one {
      margin: 0px;
    }
  }

  .Cm-more {
    width: 100%;
    line-height: 1.355rem;
    text-align: center;
    font-size: 0.38rem;
    color: rgba(0, 0, 0, 0.6);
    height: 1.375rem;
  }
}
</style>