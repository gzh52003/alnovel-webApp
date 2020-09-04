<template>
  <div id="login">
    <div class="titleWrap">
      <img src="profile/loginLogo.png" alt="书旗小说" class="logo" />
      <p class="link">
        <a href="javascript:;">注册</a>
        /
        <a href="javascript:;">找回</a>
      </p>
    </div>
    <div class="formWrap">
      <div class="inputWrap">
        <input type="text" :placeholder="showLogin === true ? '请输入手机号':'请输入手机号/邮箱'" />
      </div>
      <div class="inputWrap">
        <!-- 密码验证 -->
        <input 
        :type="Nosee===true?'password':'text'" 
        :placeholder="showLogin === true ? '请输入验证码':'请输入密码'"
       />
       <!-- 获取验证码 -->
        <button class="getCode" v-if="showLogin">获取验证码</button>
        <!-- 显示和隐藏密码 -->
        <span class="eye" v-else @click="closeEye">
          <img src="profile/openEye.svg" alt="可见" v-if="Nosee" />
          <img src="profile/closeEye.svg" alt="不可见" v-else />
        </span>
      </div>
      <!-- 登录方式的切换 -->
      <div class="psdLogin">
        <a href="javascript:;" @click="switchLogin">{{showLogin === true?'密码登录':'验证码登录'}}</a>
      </div>
      <div class="CheckBoxWrap">
        <van-checkbox v-model="checked" class="checkbox"></van-checkbox>同意
        <a href="javascript:;">《阿里文学说用户服务协议》</a>
        <a href="javascript:;">《隐私服务协议》</a>
      </div>
      <div class="btnWrap">
        <button class="btnLogin">登录</button>
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
import { Checkbox, Divider } from "vant";
Vue.use(Checkbox);
Vue.use(Divider);

export default {
  data() {
    return {
      checked: false,
      showLogin: false,
      Nosee: true,
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
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  .logo {
    width: 144px;
    height: 36px;
  }
  .link {
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
    font-size: 12px;
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
  font-size: 12px;
  margin-bottom: 10px;
  // .checkbox {
  //   .van-checkbox__icon .van-icon{
  //     // font-size: .6em;
  //   }
  // }
  a {
    padding: 0;
    margin: 0;
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