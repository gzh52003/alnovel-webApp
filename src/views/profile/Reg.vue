<template>
  <div id="reg">
    <div class="titleWrap">
      <van-icon name="arrow-left" class="leftIcon" @click="goback"></van-icon>
      <p>{{title}}</p>
    </div>
    <div class="formWrap" v-if="showPsd">
      <div class="inputWrap">
        <input type="text" placeholder="请输入手机号" v-model="userPhone" />
      </div>
      <div class="inputWrap">
        <input placeholder="请输入验证码" v-model="userCode" />
        <button
          class="showPsd"
          :style="phoneLength() === 11? 'opacity:1':''"
          @click="phoneLength() === 11? sendSms() : ''"
          v-bind:disabled="dis"
        >{{codeText}}</button>
      </div>
      <div class="CheckBoxWrap">
        <van-checkbox v-model="checked" class="checkbox" icon-size="12"></van-checkbox>同意
        <a href="javascript:;" class="hightlight">《阿里文学说用户服务协议》</a>和
        <a href="javascript:;" class="hightlight">《隐私服务协议》</a>
      </div>
      <div class="btnWrap">
        <button
          class="btnReg"
          :style="(checked===true && userPhone && userCode)? 'opacity: 1;' :''"
          @click="nextIptPsd()"
        >下一步</button>
      </div>
    </div>
    <div v-else>
      <div class="inputWrap">
        <input :type="Nosee===true?'password':'text'" placeholder="请输入密码" v-model="userPsd" />
        <!-- 显示和隐藏密码 -->
        <span class="eye" @click="closeEye">
          <img src="profile/openEye.svg" alt="可见" v-if="!Nosee" />
          <img src="profile/closeEye.svg" alt="不可见" v-else />
        </span>
      </div>
      <div class="btnWrap">
        <button
          class="btnReg"
          :style="(checked===true && userPhone && userPsd)? 'opacity: 1;' :''"
          @click="btnReg()"
        >完成</button>
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
      userCode: "",
      userPsd: "",
      checked: "",
      title: "",
      codeText: "获取验证码",
      // 定时器
      timer: null,
      second: 10,
      // 是否禁用获取验证码
      dis: false,
      showPsd: true,
      // 查看密码
      Nosee: true,
    };
  },
  methods: {
    // 返回
    goback() {
      this.$router.replace("/login");
    },
    // 显示输入密码
    nextIptPsd() {
      this.showPsd = false;
    },
    // 点击显示和隐藏密码
    closeEye() {
      this.Nosee = !this.Nosee;
    },
    // 注册
    async btnReg() {
      if (this.title === "注册") {
        console.log(1);
        if (
          this.checked &&
          this.userPhone.trim() !== "" &&
          this.userPsd !== ""
        ) {
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
        return false;
      }

      if (this.title === "找回密码") {
        console.log(1);
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
  created() {
    // const reg = this.$router.params.reg
    // console.log(this.$router.query);
    // console.log(document.title);
    this.title = document.title;
    const auth = localStorage.getItem("userInfo");
    if (auth) {
      this.$router.push("/profile");
    }
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
};
</script>

<style lang="scss" scoped>
#reg {
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
  .showPsd {
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