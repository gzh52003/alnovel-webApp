<template>
  <h1>
    <van-toast class="tips"></van-toast>
  </h1>
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
    noIDshow() {
      Toast({ message: "身份验证失败", className: "tips" });
    },
  },
  created() {
    this.noIDshow();
  },
};
</script>

<style scoped lang="scss">
.tips{
  width: 100px;
  height: 100px;
}
</style>