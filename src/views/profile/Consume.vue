<template>
  <div class="consume">
    <div class="noIDshow" v-if="!auth()">
      <img src="profile/noID.png" alt />
      <p>身份验证失败</p>
    </div>
    <div class="IDshow" v-else>
      <img src="profile/bean-ticket.png" alt />
      <p>暂无消费充值记录</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    auth() {
      return this.$store.state.auth;
    },
  },
  created() {
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
.consume {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
}
.noIDshow,
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