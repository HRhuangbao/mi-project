<template>
  <!-- 我的页面模块 -->
  <div id="Mine">
    <div class="header">
      <div class="header-top">
        <img src="../assets/1.png" alt />
        <p>
          <router-link class="bao" to="/Home/Commodity/ContentOne">登陆/</router-link>
          <router-link class="bao" to="/Home/Commodity/ContentOne">注册</router-link>
        </p>
      </div>
      <div class="header-middle">
        <span>我的订单</span>
        <router-link class="bao" to="/Home/Commodity/ContentOne">全部订单></router-link>
      </div>
      <div class="header-bottom">
        <div class="header-bottom-littlebox">
          <img src="../assets/3.png" alt />
          <span>代付款</span>
        </div>
        <div class="header-bottom-littlebox">
          <img src="../assets/4.png" alt />
          <span>待收货</span>
        </div>
        <div class="header-bottom-littlebox">
          <img src="../assets/5.png" alt />
          <span>退换修</span>
        </div>
      </div>
    </div>

    <div class="centent">
      <div class="fenge"></div>
      <div class="centent-t">
        <div class="centent-t-top divtwo">
          <div class="tp">
            <img src="../assets/11.png" alt />
          </div>
          <div>
            <p>会员中心</p>
            <p>></p>
          </div>
        </div>
        <hr />
        <div class="centent-t-bottom divtwo">
          <div class="tp">
            <img src="../assets/12.png" alt />
          </div>
          <div>
            <p>我的优惠</p>
            <p>></p>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="centent-t">
        <div class="centent-t-top divtwo">
          <div class="tp">
            <img src="../assets/13.png" alt />
          </div>
          <div>
            <p>服务中心</p>
            <p>></p>
          </div>
        </div>
        <hr />
        <div class="centent-t-bottom divtwo">
          <div class="tp">
            <img src="../assets/14.png" alt />
          </div>
          <div>
            <p>小米之家</p>
            <p>></p>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="centent-t">
        <div class="centent-t-top divtwo">
          <div class="tp">
            <img src="../assets/15.png" alt />
          </div>
          <div>
            <p>我的F码</p>
            <p>></p>
          </div>
        </div>
        <hr />
        <div class="centent-t-bottom divtwo">
          <div class="tp">
            <img src="../assets/16.png" alt />
          </div>
          <div>
            <p>礼物码兑换</p>
            <p>></p>
          </div>
        </div>
      </div>
      <div class="fenge"></div>
      <div class="centent-t">
        <div class="centent-t-top divtwo">
          <div class="tp">
            <img src="../assets/18.png" alt />
          </div>
          <div>
            <p>设置</p>
            <p>></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#Mine {
  width: 100%;
  overflow: scroll;
  padding-bottom: 1.62rem;
  .header {
    width: 100%;
    .header-top {
      width: 100%;
      height: 2.2215rem;
      background: url(../assets/2.png) center 0 #f37d0f;
      background-size: auto 100%;
      display: flex;
      align-items: center;

      img {
        width: 1.32rem;
        height: 1.32rem;
        margin: 0.5rem;
        border-radius: 50%;
        border: 3px solid hsla(0, 0%, 100%, 0.4);
      }
      p {
        margin: 0px;
        padding: 0px;
        line-height: 0.35rem;

        .bao {
          color: #ffffff;
          font-size: 0.35rem;
          line-height: 0.35rem;
        }
      }
    }
    .header-middle {
      width: 100%;
      height: 1.1109rem;
      background: #ffffff;
      font-size: 0.385rem;
      line-height: 0.385rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 0.39rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      box-sizing: border-box;
      .bao {
        margin-right: 0.39rem;
      }
    }
    .header-bottom {
      display: flex;
      height: 2.3427rem;
      .header-bottom-littlebox {
        flex: 1;
        height: 2.3427rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          width: 0.7rem;
        }
        span {
          margin-top: 0.2rem;
          font-size: 0.3025rem;
        }
      }
    }
  }
  .centent {
    width: 100%;
    .fenge {
      width: 100%;
      height: 0.275rem;
      background: #f5f5f5;
    }
    .centent-t {
      hr {
        box-sizing: border-box;
        width: 8.44443rem;
        position: relative;
        margin-left: 1.55556rem;
        border: 1px solid #f5f5f5;
      }
      .divtwo {
        height: 1.44437rem;
        display: flex;
        .tp {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 1.55556rem;
          img {
            width: 0.66rem;
          }
        }
        div {
          width: 8.44443rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.385rem;
          align-items: center;
          p:nth-of-type(2) {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
