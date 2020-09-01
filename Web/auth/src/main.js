// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'// 它的作用是能把json格式的直接转成data所需的格式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.qs = qs
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    domain: 'http://74.208.43.28:8888',
    userInfo: {
      identity: null
    }
  },
  mutations: {
    updateUserInfo (state, newUserInfo) {
      state.userInfo = newUserInfo
    }
  }
})

Vue.prototype.setCookie = (cname, value, expiredays) => {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = cname + '=' + escape(value) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
}

function getCookie (name) {
  var arr = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  if (arr === document.cookie.match(reg)) {
    return (arr[2])
  } else {
    return null
  }
}
Vue.prototype.getCookie = getCookie

Vue.prototype.delCookie = (name) => {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

/* eslint-disable no-new */
new Vue({
  data: {},
  el: '#app',
  render: h => h(App),
  router,
  store,
  watch: {
    '$route': 'checkLogin'
  },
  created () {
    this.checkLogin()
  },
  components: { App },
  template: '<App/>'
})
