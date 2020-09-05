import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //默认显示的tabbar
    isShowTabbar: true,
  },
  mutations: {
    showTabbar(state, payload) {
      // console.log("我是store中的showTabbar",payload);
      state.isShowTabbar = payload
    }
  },
  actions: {},
  modules: {}
})