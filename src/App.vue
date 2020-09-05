<template>
  <div id="app">
    <main-tabbar v-show="isShowTabBar"></main-tabbar>
    <router-view />
  </div>
</template>
<script>
import MainTabbar from "./components/MainTabbar";

import Vue from "vue";
import {
  Image,
  Grid,
  GridItem,
  Button,
  Icon,
  Toast,
  Tab,
  Tabs,
  Col,
  Row,
  Card,
} from "vant";

Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Col);
Vue.use(Row);
Vue.use(Card);
export default {
  components: {
    MainTabbar,
  },
  computed: {
    isShowTabBar() {
      return this.$store.state.isShowTabbar;
    },
  },
};
</script>
<style lang="scss">

@import url("../src/assets/css/normalize.css");
@import url("../src/assets/css/base.css");
@import url("../src/assets/css/reset.css");

#app {
  height: 100%;
  width: 100%;
}
</style>
