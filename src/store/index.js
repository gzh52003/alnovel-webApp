import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.js'
import bookcity from './bookcity.js'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    //默认显示的tabbar
    isShowTabbar: true,
    auth:null
  },
  mutations: {
    showTabbar(state, payload) {
      // console.log("我是store中的showTabbar",payload);
      state.isShowTabbar = payload
    },
     // 获取用户信息
     getUserInfo(state) {
      const uInfo = localStorage.getItem("userInfo");
      console.log(uInfo);
      state.auth = uInfo;
      // console.log(this.auth);
    },
  },
<<<<<<< HEAD
  actions: {
  },
  modules: {
    common,
    bookcity
  }
})
=======
  actions: {},
  modules: {}
})
>>>>>>> 5e706c1e30532776a56a967c98bb8e76a431ad90
