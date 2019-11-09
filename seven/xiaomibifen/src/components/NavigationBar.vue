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
          <li>
            <a href="#three">Redmi手</a>
          </li>
          <li>
            <a href="#four">黑纱游戏</a>
          </li>
          <li>
            <a>手机配件</a>
          </li>
          <li>
            <a href="#five">电视</a>
          </li>
          <li>大家电</li>
          <li>
            <a href="#six">电脑</a>
          </li>
          <li @click="fangfa()">小爱智能</li>
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

        <div id="two" class="styleone">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 2rem' }">众筹</van-divider>
          <div class="shangpin">
            <div v-for="(r,index) in tab" :key="index" class="neirong">
              <img :src="r.url" alt />
              <p v-text="r.name"></p>
            </div>
          </div>
        </div>

        <div id="three" class="styleone">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 2rem' }">手机</van-divider>
          <div class="shangpin">
            <div v-for="(r,index) in tab" :key="index" class="neirong">
              <img :src="r.url" alt />
              <p v-text="r.name"></p>
            </div>
          </div>
        </div>
        <div id="four" class="styleone">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 2rem' }">黑纱游戏</van-divider>
          <div class="shangpin">
            <div v-for="(r,index) in tab" :key="index" class="neirong">
              <img :src="r.url" alt />
              <p v-text="r.name"></p>
            </div>
          </div>
        </div>
        <div id="five" class="styleone">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 2rem' }">电视</van-divider>
          <div class="shangpin">
            <div v-for="(r,index) in tab" :key="index" class="neirong">
              <img :src="r.url" alt />
              <p v-text="r.name"></p>
            </div>
          </div>
        </div>
        <div id="six" class="styleone">
          <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 2rem' }">电脑</van-divider>
          <div class="shangpin">
            <div v-for="(r,index) in tab" :key="index" class="neirong">
              <img :src="r.url" alt />
              <p v-text="r.name"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Divider } from "vant";
import axios from "axios";
import store from "../store";
Vue.use(Divider);
export default {
  data() {
    return {
      tab: [{ name: 2 }, { bao: 2 }]
    };
  },
  methods: {
    fangfa() {
      this.tab = store.data.tab.data;
      window.console.log(this.tab[2].name);
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/xiaomi")
      .then(function(res) {
        store.tab(res);
      })
      .catch(function(res) {
        window.console.log(res);
      });
    setTimeout(() => {
      this.fangfa();
    }, 200);
  }
};
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
          padding-bottom: 0rem;
        }
      }

      .styleone {
        .shangpin {
          display: flex;
          flex-wrap: wrap;
          .neirong {
            margin: 0.1rem 0.1rem;
            width: 2.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img {
              width: 1.3875rem;
            }
            p {
              font-size: 0.35rem;
              width: 2.3rem;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>