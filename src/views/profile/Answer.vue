<template>
  <div class="answer">
    <van-nav-bar left-text="" left-arrow @click-left="onClickLeft"/>
    <div class="container">
      <h1 class="title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/feedback");
    },
    getQuery() {
      const { id, quest } = this.$route.query;
      this.title = quest;
      console.log(this.$route.query,id, quest);
      // this.$request.get(`/answer/${id}`);
    },
  },
  created() {
    this.getQuery();
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
.answer {
  padding: 0 16px;
}
::v-deep .van-icon {
  color: var(--color-text);
}
::v-deep .van-nav-bar__text {
  color: var(--color-text);
}
::v-deep  .van-nav-bar__left{
  padding: 0;
}
.container {
  .title {
    font-size: 20px;
    color: #000;
  }
}

</style>