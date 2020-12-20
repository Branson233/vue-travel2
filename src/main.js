import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'

// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

import "./assets/styles/iconfont.css"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)


Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
