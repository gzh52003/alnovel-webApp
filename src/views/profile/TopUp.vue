<template>
  <div class="topUp">
    <div class="titleBar">
      <h2>请选择金额</h2>
      <div class="right">
        <span>1元=10书豆</span>
      </div>
    </div>
    <div class="amountBox">
      <ul class="amountList">
        <li class="amountItem" v-for="item in beans" :key="item.price">
          <div v-if="!item.tickes">
            <span class="beans">{{item.VirtualPrice}}书豆</span>
          </div>
          <div v-else>
            <span class="beans">{{item.VirtualPrice}}书豆</span>
            <span class="trickes">
              <em>送</em>
              {{item.qty}}%
            </span>
          </div>
          <div>
            <span class="price">￥{{item.RealPrice}}</span>
            <button class="primaryButton" @click="payMoney(item.VirtualPrice)">充值</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="titleBar">
      <h2>温馨提示</h2>
    </div>
    <div class="desc-content">
      <p>
        <span class="one">1.</span>
        充值过程可能会有延迟到账的情况，如果长时间未到账，请从“我的”“意见反馈”里进行反馈，客服人员会进行处理。
      </p>
      <p>
        <span class="two">2.</span>点击充值，代表您已阅读过
        <a href="javascript:;">《用户协议》</a>和
        <a href="javascript:;">《隐私协议》</a>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog, Toast, PasswordInput, NumberKeyboard } from "vant";
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);

export default {
  data() {
    return {
      beans: [
        {
          VirtualPrice: 10,
          RealPrice: 1,
        },
        {
          VirtualPrice: 60,
          RealPrice: 6,
        },
        {
          VirtualPrice: 100,
          RealPrice: 10,
        },
        {
          VirtualPrice: 120,
          RealPrice: 12,
        },
        {
          VirtualPrice: 300,
          RealPrice: 30,
        },
        {
          VirtualPrice: 2000,
          RealPrice: 200,
        },
        {
          VirtualPrice: 500,
          RealPrice: 50,
          tickes: true,
          qty: 2,
        },
        {
          VirtualPrice: 1000,
          RealPrice: 100,
          tickes: true,
          qty: 5,
        },
      ],
    };
  },
  methods: {
    // auth() {
    //   return this.$store.state.auth;
    // },
    payMoney(beans) {
      if (this.$store.state.auth) {
        console.log(1);
        Dialog.confirm({
          // title: "标题",
          message: "确定要充值吗",
        })
          .then(() => {
            console.log(beans);
            Toast("充值成功");
            this.$store.commit("putBeans", beans);
          })
          .catch(() => {
            // on cancel
          });
      } else {
        Toast("请先登录");
      }
    },
  },
  computed: {
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
.topUp {
  padding: 0 16px;
}
.titleBar {
  padding: 24px 0 16px 0;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 18px;
    color: #000;
  }
  .right {
    font-size: 14px;
  }
}
.amountBox {
  .amountList {
    .amountItem {
      display: flex;
      justify-content: space-between;
      height: 52px;
      line-height: 52px;
      // background: pink;
      border-bottom: 1px solid #eee;
      .beans,
      .price {
        color: #000;
      }
      .trickes {
        margin-left: 10px;
        font-size: 14px;
        em {
          font-size: 12px;
          color: #fff;
          background: #cca985;
          border-radius: 3px;
          padding: 2px;
          margin-right: 4px;
        }
        color: #cca985;
      }
      .primaryButton {
        height: 27px;
        line-height: 27px;
        padding: 0 10px;
        background: #cca985;
        font-size: 14px;
        color: #fff;
        outline: none;
        border: 0;
        margin-left: 5px;
        border-radius: 5px;
      }
    }
  }
}
.desc-content {
  position: relative;
  padding-left: 12px;
  p {
    span {
      position: absolute;
      left: 0;
      top: 0;
    }
    .two {
      top: 48px;
    }
    &:nth-child(1) {
      font-size: 13px;
      color: #bbb;
      line-height: 14px;
      margin-bottom: 8px;
    }
    &:nth-child(2) {
      font-size: 13px;
      color: #bbb;
      line-height: 14px;

      a {
        color: #cca985;
        font-size: 12px;
      }
    }
  }
}
</style>