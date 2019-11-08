<template>
  <!-- 侧栏导航模块 -->
  <div class="NavigationBar">
    <div class="NavigationBar-middle">
      <div class="NavigationBar-middle_left">
        <ul>
          <li>
            <b>
              <a href="#one">新品</a>
            </b>
          </li>
          <li>
            <a href="#two">众筹</a>
          </li>
          <li>
            <a href="#three">小米手机</a>
          </li>
          <li>Redmi手</li>
          <li>黑纱游戏</li>
          <li>手机配件</li>
          <li>电视</li>
          <li>大家电</li>
          <li>电脑</li>
          <li>小爱智能</li>
          <li>路由器</li>
          <li>生活电器</li>
          <li>厨房电器</li>
          <li>智能穿戴</li>
          <li>智能家居</li>
          <li>车载出现</li>
          <li>个护健康</li>
          <li>数码配件</li>
          <li>日用百货</li>
          <li>有品精选</li>
          <li>服务</li>
          <li>米粉卡</li>
          <li>零售店</li>
        </ul>
      </div>
      <div class="NavigationBar-middle_right">
        <div id="one">
          <img
            src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d6da58632d47ef4098eea9e40478bdd.jpg?thumb=1&w=500&h=200"
            alt
          />
        </div>
        <div id="two"></div>
        <div id="three"></div>
        <div id="four"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.NavigationBar {
  overflow: hidden;
  .NavigationBar-middle {
    // height: 100px;
    display: flex;
    margin-top: 1.5625rem;
    .NavigationBar-middle_left {
      height: 14.6rem;
      width: 2.1109rem;
      overflow: scroll;
      border-right: 1px #f2f2f2 solid;
      box-sizing: border-box;
      ul {
        li {
          height: 1.43562rem;
          font-size: 0.36rem;
          line-height: 1.43562rem;
          text-align: center;
          color: #3c3c3c;
          a {
            color: #3c3c3c;
            text-decoration: none;
          }
        }
      }
    }
    .NavigationBar-middle_right {
      height: 14.6rem;
      width: 7.9rem;
      overflow: hidden;
      overflow: scroll;

      #one {
        width: 100%;
        img {
          width: 100%;
          padding: 0.5rem;
          box-sizing: border-box;
          padding-top: 0rem;
        }
      }
      #two {
        width: 100px;
        background: red;
      }
      #three {
        width: 100px;
        background: blue;
      }
    }
  }
}
</style>