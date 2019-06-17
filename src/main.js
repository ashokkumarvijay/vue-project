// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import Vuex from 'vuex'
import store from './store/store.js'
Vue.use(VueRouter)
Vue.use(Vuex)

export const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
