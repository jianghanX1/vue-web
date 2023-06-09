// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Button, Select, Input, Message } from 'element-ui'
import './registerServiceWorker'

Vue.prototype.$axios = axios
Vue.prototype.$message = Message
Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
