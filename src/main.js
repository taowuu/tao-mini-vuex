import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import store from './tao-store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
