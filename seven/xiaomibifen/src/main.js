import Vue from 'vue';
import App from './App.vue';
import "./font_1488951_9gh06duguol/iconfont.css";
import router from './routers';
import 'amfe-flexible';


import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  el: '#app',
  store, // 在根实例中传入store
  components: { App },
  template: '<App/>'
}).$mount('#app')

