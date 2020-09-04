<template>
  <div id="login">
    <div class="titleWrap">
      <van-icon name="arrow-left" class="leftIcon" @click="goback"></van-icon>
      <p>注册</p>
    </div>
    <div class="formWrap">
      <div class="inputWrap">
        <input type="text" placeholder="请输入手机号" v-model="userPhone" />
      </div>
      <div class="inputWrap">
        <input placeholder="请输入验证码" v-model="userPsd" />
        <button class="getCode">获取验证码</button>
      </div>
      <div class="CheckBoxWrap">
        <van-checkbox v-model="checked" class="checkbox"></van-checkbox>同意
        <a href="javascript:;">《阿里文学说用户服务协议》</a>
        <a href="javascript:;">《隐私服务协议》</a>
      </div>
      <div class="btnWrap">
        <button class="btnLogin">下一步</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, Divider, Icon } from "vant";
Vue.use(Checkbox);
Vue.use(Divider);
Vue.use(Icon);

export default {
  data() {
    return {
      userPhone: "",
      userPsd: "",
    };
  },
  methods: {
    goback(){
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="scss" scoped>
#login {
  padding: 20px;
}
.titleWrap {
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: left;
  margin-bottom: 17px;
  .leftIcon {
    margin-right: 100px;
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