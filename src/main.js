import Vue from 'vue'
import App from './App'
import './assets/index.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})