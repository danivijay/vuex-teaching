import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.min.css'
import { store } from './store/store'

Vue.use(BootstrapVue);

new Vue({
  store: store,
  el: '#app',
  render: h => h(App)
})
