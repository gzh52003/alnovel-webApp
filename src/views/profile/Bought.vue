<template>
  <div>
    <h1>
      <van-toast class="tips"></van-toast>
    </h1>
    <div class="noBought">
      <div class="IDshow" v-show="auth()">
        <img src="profile/empty-bought-book.png" alt />
        <p>未购买过书籍</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  data() {
    return {};
  },
  methods: {
    auth() {
      return this.$store.state.auth;
    },
    noIDshow() {
      if (!this.auth()) {
        Toast({ message: "身份验证失败", className: "tips" });
      }
    },
  },
  created() {
    this.noIDshow();
    this.$store.commit("getUserInfo");
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
};
</script>

<style scoped lang="scss">
.tips {
  width: 100px;
  height: 100px;
}
.noBought {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
}
.IDshow {
  width: 138px;
  height: 138px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
  p {
    text-align: center;
    font-size: 16px;
    color: #999;
  }
}
</style>