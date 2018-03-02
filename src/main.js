import 'babel-polyfill'
import attachFastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'common/stylus/index.styl'
// 消除click移动浏览器300ms延迟

attachFastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template:'<APP />',
  // components:{App},
  render: h => h(App)
})
