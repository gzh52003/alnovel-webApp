<!--  -->
<template>
  <div>
    <!-- 我的登录注册 -->
    <div class="myprofile-header">
      <div class="myportrait">
        <img
          :src="!auth()===true ? 'profile/defaultprofile.png':'profile/defaultLoginAvatar.png'"
          alt="默认未登录头像"
        />
        <!-- <img src="profile/defaultLoginAvatar.png" alt="默认登录头像" /> -->
      </div>
      <div class="mg-top" v-if="!auth()">
        <span class="login" @click="login()">登录</span>
        <span class="mg-5">/</span>
        <span class="reg" @click="reg()">注册</span>
      </div>
      <div class="userInfo" v-else>
        <h2 class="username">
          欢迎书友,
          <span>{{$store.state.username}}</span>
        </h2>
        <div class="userbonus">
          书豆
          <div style="color:#23b383">
            <em>{{$store.state.usernameBeans}}</em>
          </div>
          <div class="dot"></div>豆劵
          <div style="color:#23b383">
            <em>0</em>
          </div>张
        </div>
      </div>
    </div>
    <!-- 我的列表 -->
    <div class="myprofile-item">
      <div
        class="myprofile-info"
        v-for="(item,idx) in list"
        :key="idx"
        @click="profileDetail(item.path)"
      >
        <span class="item-title">{{item.title}}</span>
        <span class="item-intro">{{item.intro}}</span>
        <span class="item-icon">
          <van-icon :name="item.icon" :color="iconColor" />
        </span>
      </div>
    </div>
    <!-- 退出 -->
    <div class="logout" @click="logout()" v-show="auth()">退出</div>
  </div>
</template>

<script>
import Vue from "vue";
import { List, Icon, Dialog, Toast } from "vant";
Vue.use(List);
Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Toast);

export default {
  name: "Profile",
  data() {
    return {
      // auth: null,
      username: "",
      iconColor: "#999",
      userbeans: false,
      list: [
        {
          title: "我的会员",
          intro: "开通会员",
          icon: "arrow",
          path: "/myVip",
        },
        {
          title: "书豆",
          intro: "充值",
          icon: "arrow",
          path: "/topUp",
        },
        {
          title: "消费充值记录",
          intro: "",
          icon: "arrow",
          path: "/consume",
        },
        {
          title: "购买过的书",
          intro: "",
          icon: "arrow",
          path: "/bought",
        },
        {
          title: "意见反馈",
          intro: "ID:8000000",
          icon: "arrow",
          path: "/feedback",
        },
      ],
    };
  },
  methods: {
    // 跳转登录
    login() {
      this.$router.push("/login");
    },
    // 跳转注册
    reg() {
      this.$router.push("/reg");
    },
    // 跳转列表
    profileDetail(mypath) {
      this.$router.push(mypath);
    },
    // 跳转登出
    logout() {
      Dialog.confirm({
        // title: "标题",
        message: "确定要退出吗",
      })
        .then(() => {
          localStorage.removeItem("userInfo");
          // this.userInfo = null;
          this.$store.commit("getUserInfo");
        })
        .catch(() => {
          // on cancel
        });
      // this.$router.push("/login");
    },
    // // 获取用户信息
    // getUserInfo() {
    //   const uInfo = localStorage.getItem("userInfo");
    //   console.log(uInfo);
    //   this.auth = uInfo;
    //   console.log(this.auth);
    // },
    auth() {
      return this.$store.state.auth;
    },
  },
  created() {
    // this.getUserInfo();
    this.$store.commit("getUserInfo");
    this.username;
    // if (this.auth()) {
    //   Toast("登录成功");
    // }
  },

  // 判断登录是否成功显示成功的提示
  beforeRouteEnter(to, from, next) {
    if (from.path === "/login") {
      const uInfo = localStorage.getItem("userInfo");
      if (uInfo) {
        Toast("登录成功");
      }
    }
    next();
  },

  // watch: {
  //   $route(to, from) {
  //     console.log(to, from);
  //     if (from.path === "/login") {
  //       this.$store.commit("getUserInfo");
  //       const uInfo = localStorage.getItem("userInfo");
  //       if (uInfo) {
  //         Toast("登录成功");
  //       }
  //     }
  //   },
  // },
};
</script>
<style  lang="scss" scoped>
.myprofile-header {
  display: flex;
  margin: 14px auto 16px;
  width: 343px;
  height: 124px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
}
.myportrait {
  width: 60px;
  height: 60px;
  margin: 32px 16px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
  }
}
.mg-top {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
  font-weight: 600;
  .mg-5 {
    margin: 7px;
    font-size: 22px;
  }
}
.userInfo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  .username {
    margin-bottom: 5px;
    font-size: 18px;
    color: #000;
    font-weight: 600;
    span {
      color: rgb(143, 77, 77);
    }
  }
  .userbonus {
    display: flex;
    // position: relative;
    em {
      margin: 0 5px;
    }
  }
  .dot {
    &::after {
      content: "";
      display: block;
      width: 3px;
      height: 3px;
      background: #ccc;
      position: relative;
      top: 50%;
      margin: 0 8px;
    }
  }
}

.myprofile-item {
  width: 100%;
  height: 315px;
  .myprofile-info {
    display: flex;
    justify-content: space-between;
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
      width: 199px;
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
.logout {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>