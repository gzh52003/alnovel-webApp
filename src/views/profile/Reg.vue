<template>
  <div id="login">
    <div class="titleWrap">
      <van-icon name="arrow-left" class="leftIcon" @click="goback"></van-icon>
      <p>{{title}}</p>
    </div>
    <div class="formWrap">
      <div class="inputWrap">
        <input type="text" placeholder="请输入手机号" v-model="userPhone" />
      </div>
      <div class="inputWrap">
        <input placeholder="请输入验证码" v-model="userPsd" />
        <button class="getCode" :style="userPhone.length===11?'opacity: 1':''">获取验证码</button>
      </div>
      <div class="CheckBoxWrap">
        <van-checkbox v-model="checked" class="checkbox" icon-size="12"></van-checkbox>同意
        <a href="javascript:;" class="hightlight">《阿里文学说用户服务协议》</a>和
        <a href="javascript:;" class="hightlight">《隐私服务协议》</a>
      </div>
      <div class="btnWrap">
        <button
          class="btnReg"
          :style="(checked===true && userPhone && userPsd)? 'opacity: 1;' :''"
          @click="btnReg()"
        >下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, Divider, Icon, Toast } from "vant";
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Toast);

export default {
  data() {
    return {
      userPhone: "",
      userPsd: "",
      checked: "",
      title: "",
    };
  },
  methods: {
    goback() {
      this.$router.replace("/login");
    },
    async btnReg() {
      if (this.checked && this.userPhone.trim() !== "" && this.userPsd !== "") {
        // if (this.userPhone.trim() === "" && this.userPsd === "") {
        //   Toast("请输入手机号和验证码");
        //   return false;
        // }
        const { data } = await this.$request.post("muser", {
          username: this.userPhone,
          password: this.userPsd,
        });
        console.log(data);
        if (data.msg === "添加成功") {
          Toast("注册成功");
          this.$router.push("/login");
        }
      }
    },
  },
  created() {
    // const reg = this.$router.params.reg
    // console.log(this.$router.query);
    console.log(document.title);
    this.title = document.title;
  },
  // beforeRouteEnter(to, from, next) {
  //   console.log(to, from);
  //   if (to.meta.title !== from.meta.title) {
  //     console.log(to.query.reg);
  //     const reg = to.query.reg;
  //     this.reg = reg;
  //   }
  //   next();
  // },
  // watch: {
  //   $route(to) {
  //     if (to.path !== "/reg") {
  //       // this.reg();
  //       console.log(this.$router.query);
  //     }
  //   },
  // },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
};
</script>

<style lang="scss" scoped>
#login {
  padding: 20px;
}
.titleWrap {
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 30px;
  .leftIcon {
    margin-right: 120px;
    font-size: 24px;
  }
  p {
    font-size: 16px;
    line-height: 16px;
    margin: 0;
    padding: 0;
  }
}

.inputWrap {
  margin-bottom: 12px;
  width: 100%;
  position: relative;
  input {
    box-sizing: border-box;
    border: 0;
    width: 100%;
    height: 44px;
    background: #f7f7fa;
    font-size: 14px;
    color: #1d1e1f;
    padding: 12px 13px;
    border-radius: 4px;
  }
  .getCode {
    border: 0;
    outline: none;
    background: #23b383;
    height: 33px;
    opacity: 0.3;
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    padding: 0 10px;
  }
  .eye {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    bottom: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.psdLogin {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  a {
    color: #a1a1b3;
  }
}

.CheckBoxWrap {
  display: flex;
  align-items: center;
  height: 28px;
  font-size: 12px;
  margin-bottom: 10px;
  .checkbox {
    margin: 0 5px;
  }
  .hightlight {
    font-size: 12px;
    color: #38b383;
  }
}

.btnWrap {
  width: 100%;
  height: 100%;
  .btnReg {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    color: #fff;
    background: #23b383;
    border: 0;
    outline: none;
    opacity: 0.4;
    border-radius: 8px;
  }
  .active {
    opacity: 1;
  }
}
</style>