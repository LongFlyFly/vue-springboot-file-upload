import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import SlideVerify from 'vue-monoplasty-slide-verify'
import VCharts from 'v-charts';

Vue.use(VCharts);
// axios.defaults.baseURL = 'XXXXX.COM'
Vue.use(SlideVerify)
Vue.use(require('vue-wechat-title'))
Vue.config.productionTip = false
// Vue.prototype.$http = axios;





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


