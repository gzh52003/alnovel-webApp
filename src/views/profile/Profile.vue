<!--  -->
<template>
  <div>
    <!-- 我的登录注册 -->
    <div class="myprofile-header">
      <div class="myportrait">
        <img src="profile/defaultprofile.png" alt="默认头像" />
      </div>
      <div class="mg-top">
        <span class="login" @click="login">登录</span>
        <span class="mg-5">/</span>
        <span class="reg" @click="reg">注册</span>
      </div>
    </div>
    <!-- 我的列表 -->
    <div class="myprofile-item">
      <div class="myprofile-info" v-for="(item,idx) in list" :key="idx">
        <span class="item-title">{{item.title}}</span>
        <span class="item-intro">{{item.intro}}</span>
        <span class="item-icon">
          <van-icon :name="item.icon" :color="iconColor" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { List, Icon } from "vant";
Vue.use(List);
Vue.use(Icon);

export default {
  name: "Profile",
  data() {
    return {
      iconColor: "#999",
      list: [
        {
          title: "我的会员",
          intro: "开通会员",
          icon: "arrow",
        },
        {
          title: "书豆",
          intro: "充值",
          icon: "arrow",
        },
        {
          title: "消费充值记录",
          intro: "",
          icon: "arrow",
        },
        {
          title: "购买过的书",
          intro: "",
          icon: "arrow",
        },
        {
          title: "意见反馈",
          intro: "ID:8000000",
          icon: "arrow",
        },
      ],
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    reg() {
      this.$router.push("/reg");
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.myprofile-header {
  display: flex;
  margin: 14px auto 16px;
  width: 288px;
  height: 124px;
  // background: pink;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  // justify-content: center;
}
.myportrait {
  width: 60px;
  height: 60px;
  margin: 32px 16px;
  img {
    width: 100%;
    height: 100%;
  }
}
.mg-top {
  margin-top: 48px;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  .mg-5{
    margin: 5px;
  }
}

.myprofile-item {
  width: 320px;
  height: 315px;
  // background: pink;
  .myprofile-info {
    display: flex;
    padding: 0 16px;
    line-height: 63px;
    height: 63px;
    background: #fff;
    position: relative;
    &::after {
      content: "";
      height: 1px;
      background: #eee;
      position: absolute;
      transform: scaleY(0.5);
      bottom: 0;
      left: 16px;
      right: 16px;
    }
    .item-title {
      width: 144px;
      font-size: 16px;
      color: #333;
    }
    .item-intro {
      width: 120px;
      text-align: right;
      font-size: 14px;
      color: #999;
    }
    .item-icon {
      display: flex;
      margin: auto;
    }
  }
}
</style>