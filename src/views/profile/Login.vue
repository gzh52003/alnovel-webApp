<template>
  <div id="login">
    <div class="titleWrap">
      <img src="profile/loginLogo.png" alt="书旗小说" class="logo" />
      <p class="link">
        <a href="javascript:;" @click="gotoReg()">注册</a>
        /
        <a href="javascript:;" @click="gotofindPsd()">找回</a>
      </p>
    </div>
    <div class="formWrap">
      <div class="inputWrap">
        <input
          type="text"
          :placeholder="showLogin === true ? '请输入手机号':'请输入用户名/邮箱'"
          v-model="userPhone"
          @click="selectValue($event)"
        />
      </div>
      <div class="inputWrap">
        <!-- 密码验证 -->
        <input v-if="showLogin" type="text" placeholder="请输入验证码" v-model="userCode" />
        <input v-else :type="Nosee===true?'password':'text'" placeholder="请输入密码" v-model="userPsd" />
        <!-- 获取验证码 -->
        <button
          class="getCode"
          v-if="showLogin"
          :style="phoneLength() === 11? 'opacity:1':''"
          @click="phoneLength() === 11? sendSms() : ''"
          v-bind:disabled="dis"
        >{{codeText}}</button>
        <!-- 显示和隐藏密码 -->
        <span class="eye" v-else @click="closeEye">
          <img src="profile/openEye.svg" alt="可见" v-if="!Nosee" />
          <img src="profile/closeEye.svg" alt="不可见" v-else />
        </span>
      </div>
      <!-- 登录方式的切换 -->
      <div class="psdLogin">
        <a href="javascript:;" @click="switchLogin">{{showLogin === true?'密码登录':'验证码登录'}}</a>
      </div>
      <div class="CheckBoxWrap">
        <van-checkbox v-model="checked" class="checkbox" icon-size="12"></van-checkbox>同意
        <a href="javascript:;" class="hightlight">《阿里文学说用户服务协议》</a>
        和
        <a href="javascript:;" class="hightlight">《隐私服务协议》</a>
      </div>
      <div class="btnWrap">
        <button
          class="btnLogin"
          @click="btnLogin"
          :style="(checked===true && userPhone && (userPsd || userCode))? 'opacity: 1':''"
        >登录</button>
      </div>
      <div class="thirdLoginArea">
        <van-divider :style="{ borderColor: '#a1a1b3' }" class="divider">使用以下账号可免注册</van-divider>
        <div class="qqLogin">
          <img src="profile/qqLogin.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import Clipboard from "clipboard";
import { Checkbox, Divider, Toast } from "vant";
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Toast);

export default {
  data() {
    return {
      // 判断是否勾选
      checked: false,
      // 登录方式切换
      showLogin: false,
      // 查看密码
      Nosee: true,
      // 用户的输入
      userPhone: "",
      userPsd: "",
      userCode: "",
      codeText: "获取验证码",
      // 定时器
      timer: null,
      second: 10,
      // 是否禁用获取验证码
      dis: false,
    };
  },
  methods: {
    // 点击切换登录方式
    switchLogin() {
      this.showLogin = !this.showLogin;
    },
    // 点击显示和隐藏密码
    closeEye() {
      this.Nosee = !this.Nosee;
    },
    // 跳转到注册页
    gotoReg() {
      this.$router.replace("/reg");
    },
    // 跳转到找回密码页 condition状态
    gotofindPsd() {
      this.$router.replace({
        name: "FindPsd",
        // query: {
        //   reg: this.reg,
        // },
      });
    },
    // 点击选中输入框所有
    selectValue(e) {
      // console.log(e);
      e.currentTarget.select();
    },
    // 登录
    async btnLogin() {
      // console.log(this.userPhone,this.userPsd)
      const username = this.userPhone.trim();
      const password = this.userPsd;
      if (this.checked && this.userPhone === "") {
        Toast("请输入手机号和密码");
        return false;
      }
      if (this.checked) {
        const { data } = await this.$request.post("/login", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          username: username,
          password: password,
        });
        console.log(data);
        // console.log(data.msg);
        if (data.msg === "fail") {
          Toast("账号或密码错误");
        } else {
          // localStorage.setItem("userInfo", data.data.authorization);
          localStorage.setItem("userInfo", JSON.stringify(data.data));

          this.$router.push("/profile");
        }
      } 
    },
    // 显示发送短信验证码按钮
    phoneLength() {
      return this.userPhone.length;
    },
    // 点击发送短信验证码
    sendSms() {
      console.log("短信验证码");
      this.dis = true;
      this.timer = setInterval(() => {
        // if (this.second < 0) this.second = "";
        this.second -= 1;
        console.log(this.second);
        this.codeText = `重新获取(0${this.second})`;
        if (this.second < 1) {
          clearInterval(this.timer);
          this.codeText = `获取验证码`;
          this.second = 10;
          this.dis = false;
        }
      }, 1000);
    },
  },
  // computed: {
  //   timeSecond() {
  //     if (this.second < 10) {
  //       return `0${this.second}`;
  //     }
  //     return this.second;
  //   },
  // },
  // filters: {
  //   format: function (data) {
  //     console.log(data)
  //     if (data) {
  //       return this.codeText;
  //     }
  //   },
  // },
  created() {
    const auth = localStorage.getItem("userInfo");
    if (auth) {
      this.$router.push("/profile");
    }
    // 每次进入界面时，先清除之前的所有定时器
    clearInterval(this.timer);
    this.timer = null;
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
    // 每次离开当前界面时，清除定时器
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
#login {
  // height: 536px;
  padding: 20px;
  // background: #ccc;
}
.titleWrap {
  width: 100%;
  height: 36px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  .logo {
    width: 144px;
    height: 36px;
  }
  .link {
    // padding-top: 12px;
    font-size: 12px;
    line-height: 12px;
    a {
      color: #999;
    }
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
    height: 33px;
    opacity: 0.3;
    font-size: 12px;
    color: #fff;
    background: #23b383;
    border-radius: 4px;
    position: absolute;
    right: 5px;
    bottom: 5px;
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
  margin-bottom: 20px;
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
  .btnLogin {
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 12px;
    color: #f7f7fa;
    background: #23b383;
    border: 0;
    outline: none;
    opacity: 0.4;
    border-radius: 8px;
  }
  // .active {
  //   opacity: 1;
  // }
}

.thirdLoginArea {
  margin-top: 100px;
  .divider {
    font-size: 12px;
  }
  .qqLogin {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    img {
      width: 41px;
      height: 41px;
    }
  }
}
</style>