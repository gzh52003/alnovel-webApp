<template>
  <div id="app">
    <main-tabbar></main-tabbar>
    <router-view />
  </div>
</template>
<script>
import MainTabbar from "./components/MainTabbar";

import Vue from "vue";
import { Image, Grid, GridItem, Button, Icon, Toast } from "vant";

Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Toast);

export default {
  components: {
    MainTabbar,
  },
};
</script>
<style lang="scss">
</style>
