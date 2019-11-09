<template>
  <div class="Login">
    <div class="header">
      <em id="custom_display_1" class="milogo">
        <svg width="1.55rem" height="1.55rem" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="3" ry="3" style="fill:#ff6700" />
          <rect x="10" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
          <rect x="33.75" y="15" width="4.2" height="18" style="fill:#FFFFFF" />
          <rect x="11.25" y="15" width="15" height="4.1" style="fill:#FFFFFF" />
          <rect x="26.2" y="20.55" width="4.2" height="12.5" style="fill:#FFFFFF" />
          <rect x="20.6" y="15" width="9.8" height="9.8" rx="4.4" ry="4.4" style="fill:#FFFFFF" />
          <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" style="fill:#ff6700" />
          <rect x="18" y="19.1" width="4" height="2.2" style="fill:#ff6700" />
          <rect x="24.2" y="23" width="1.94" height="10" style="fill:#ff6700" />
          <rect x="18.1" y="22.8" width="4.2" height="10.2" style="fill:#FFFFFF" />
        </svg>
      </em>
      <h4>小米账号登陆</h4>
    </div>
    <div class="middle">
      <div class="inpu">
        <input class="stylle" type="text" v-model="usename" placeholder="邮箱/手机号码/小米ID" />
      </div>
      <hr />
      <div class="inpu">
        <input class="stylle" type="text" v-model="password" placeholder="密码" />
      </div>
      <hr />
      <div class="bteen">
        <input @click="logins()" type="button" :value="lin()[0]" />
      </div>
      <div class="bteenn">
        <input @click="zhucedenglu()" type="button" :value="lin()[1]" />
      </div>
    </div>
    <div class="bottom">
      <van-divider>其他方式登陆</van-divider>
      <ul class="bj">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="bottomme">
        <ul>
          <li>
            <a href="#/Behavior/LogIn">简体</a>|
          </li>
          <li>
            <a href="#/Behavior/LogIn">繁体</a>|
          </li>
          <li>
            <a href="#/Behavior/LogIn">English</a>|
          </li>
          <li>
            <a href="#/Behavior/LogIn">常见问题</a>
          </li>
        </ul>
        <p>隐私政策</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import Vue from "vue";
import { Divider } from "vant";
Vue.use(Divider);
export default {
  data() {
    return {
      login: true,
      nub: true,
      usename: "",
      password: ""
    };
  },
  methods: {
    zhucedenglu() {
      this.nub = !this.nub;
    },
    lin() {
      if (this.nub == true) {
        store.login(["登陆", "手机短信登陆/注册"]);
        return store.data.login;
      } else {
        store.login(["注册", "用户名密码登陆"]);
        return store.data.login;
      }
    },
    logins() {
      if (this.nub == true) {
        window.console.log("登陆");
        window.console.log(this.usename, this.password);
      } else {
        window.console.log("注册");
        window.console.log(this.usename, this.password);
      }
    }
  },
  watch: {}
};
</script>








<style lang="scss" scoped>
.Login {
  padding: 0rem 0.625rem;
  .header {
    box-sizing: border-box;
    padding-top: 0.9375rem;
    padding-bottom: 0.3125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 4rem;
    h4 {
      font-weight: normal;
      margin-top: 0.2rem;
      font-size: 0.57rem;
      line-height: 0.57rem;
    }
  }
  .middle {
    .inpu {
      margin: 0.3rem 0rem;
    }
    .bteen {
      input {
        margin-top: 0.75rem;
        width: 8.75rem;
        height: 1.40625rem;
        background: #ff6700;
        border-radius: 6px;
        border: 0px solid #ff6700;
        font-size: 0.4375rem;
        color: #fff;
      }
    }
    .bteenn {
      input {
        margin-top: 0.75rem;
        width: 8.75rem;
        height: 1.40625rem;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #d3d3d3;
        font-size: 0.4375rem;
        color: black;
      }
    }
  }
  .bottom {
    margin-top: 1.25rem;
    .bj {
      display: flex;
      justify-content: center;
      li {
        width: 0.7rem;
        height: 0.65rem;
        margin: 0px 0.4rem;
        border-radius: 50%;
      }
      li:nth-of-type(1) {
        background: url("../assets/19.png") center 0 #ed9090;
        background-position: 72px 0px;
      }
      li:nth-of-type(2) {
        background: url("../assets/19.png") center 0 #6bb6ea;
        background-position: 157px 2px;
      }
      li:nth-of-type(3) {
        background: url("../assets/19.png") center 0 #00be00;
        background-position: 130px 2px;
      }
    }
    .bottomme {
      width: 100%;
      margin-top: 0.7rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      ul {
        width: 100%;
        display: flex;
        justify-content: center;
        display: flex;
        font-size: 0.2925rem;

        li {
          a {
            padding: 0.3125rem;
            color: black;
          }
        }
      }
      p {
        font-size: 0.35rem;
        margin-top: 0.3rem;
      }
    }
  }
}
</style>