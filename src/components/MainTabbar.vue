<!--  -->
<template>
  <van-tabbar v-model="active" class="main-tabbar">
    <van-tabbar-item
      v-for="item in tabList"
      :key="item.text"
      class="main-tabbar-item"
      :icon="item.icon"
      router
      :to="item.path"
    >{{ item.text }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "MainTabbar",
  data() {
    return {
      active: 0,
      tabList: [
        {
          path: "/shelf",
          text: "书架",
          icon: "newspaper-o",
        },
        {
          path: "/books",
          text: "书城",
          icon: "bookmark-o",
        },
        {
          path: "/category",
          text: "分类",
          icon: "apps-o",
        },
        {
          path: "/profile",
          text: "我的",
          icon: "user-o",
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>
<style  lang="scss" scoped>
.main-tabbar {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;

  .main-tabbar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
}
</style>