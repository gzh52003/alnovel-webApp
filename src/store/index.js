import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.js'
import bookcity from './bookcity.js'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
    bookcity
  }
})
