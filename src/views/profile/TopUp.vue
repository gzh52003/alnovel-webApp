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
          <div>
            <span class="beans">{{item.VirtualPrice}}</span>
          </div>
          <div>
            <span class="price">￥{{item.RealPrice}}</span>
            <button class="primaryButton">充值</button>
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
export default {
  data() {
    return {
      beans: [
        {
          VirtualPrice: "10书豆",
          RealPrice: "1",
        },
        {
          VirtualPrice: "60书豆",
          RealPrice: "6",
        },
        {
          VirtualPrice: "100书豆",
          RealPrice: "10",
        },
        {
          VirtualPrice: "120书豆",
          RealPrice: "12",
        },
        {
          VirtualPrice: "300书豆",
          RealPrice: "30",
        },
        {
          VirtualPrice: "2000书豆",
          RealPrice: "200",
        },
        {
          VirtualPrice: "500书豆",
          RealPrice: "50",
          tickes: true,
        },
        {
          VirtualPrice: "1000书豆",
          RealPrice: "100",
          tickes: true,
        },
      ],
    };
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
  height: 20px;
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