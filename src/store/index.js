import Vue from 'vue'
import Vuex from 'vuex'
import common from './common.js'
import bookcity from './bookcity.js'
import bookCategory from "./bookCategory"
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    //默认显示的tabbar
    isShowTabbar: true,
    auth: null,
    username: '',
    usernameBeans: 0,
  },
  mutations: {
    showTabbar(state, payload) {
      // console.log("我是store中的showTabbar",payload);
      state.isShowTabbar = payload
    },
    // 获取用户信息
    getUserInfo(state) {
      // let uInfo = localStorage.getItem("userInfo");
      let uInfo;
      uInfo = localStorage.getItem("userInfo")
      try {
        uInfo = JSON.parse(uInfo)
      } catch (err) {
        uInfo = {}
      }
      if (uInfo) {
        const username = uInfo.username;
        state.username = username
        console.log(username);
      }
      // const uInfo = localStorage.getItem("userInfo");
      // console.log(uInfo);
      state.auth = uInfo;
      // console.log(this.auth);
    },
    putBeans(state, beans) {
      state.usernameBeans += beans
    }
  },
  actions: {},
  modules: {
    common,
    bookcity,
    bookCategory
  }
})