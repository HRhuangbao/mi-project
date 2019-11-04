import Vue from 'vue'
import App from './App.vue'
import "./font_1488951_9gh06duguol/iconfont.css";
import router from './routers'
Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
