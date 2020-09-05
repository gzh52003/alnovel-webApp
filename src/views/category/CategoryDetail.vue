<!--  -->
<template>
  <div class="cate-box">
    <div class="navBar">
      <div class="cate-header">
        <div class="cate-header-item">
          <span @click="cahngeTab" :class="isShowCurrent?'cate-item-active':''">最新</span>
        </div>
        <div class="cate-header-item">
          <span @click="cahngeTab" :class="!isShowCurrent?'cate-item-active':''">最热</span>
        </div>
        <div class="line"></div>
      </div>
      <div class="cate-con">
        <div class="cate-con-item" v-show="isShowCurrent">
          <van-card
            class="card-box"
            num="2"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
        </div>
        <div class="cate-con-item" v-show="!isShowCurrent">最热</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryDetail",
  data() {
    return {
      isShowCurrent: true,
    };
  },
  methods: {
    cahngeTab() {
      this.isShowCurrent = !this.isShowCurrent;
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
// 头部
.navBar {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 49px;
}
.cate-header {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  height: 49px;
  line-height: 49px;
  margin-bottom: 5px;

  .cate-header-item {
    flex: 1;
    text-align: center;
    .cate-item-male {
      padding: 10px 5px;
      border-bottom: 1px solid transparent;
    }
    .cate-item-active {
      padding: 10px 5px;
      border-bottom: 1px solid #23b383;
    }
  }
  .line {
    position: absolute;
    top: 44px;
    width: 100%;
    height: 0.2px;
    background: #bbb;
    transform: scaleY(0.3);
  }
}

// 主体
.cate-con {
  margin: 49px 0 17px;
  width: 100%;

  .cate-con-item {
    width: 96%;
    margin-left: 2%;

    .card-box {
      margin-top: 17px;
      width: 100%;
      height: 144px;
      background: pink;
      padding: 0;

      ::v-deep .van-card__header {
        height: 144px;
      }
      ::v-deep .van-card__thumb {
        height: 100%;
        width: 108px;
      }
    }
  }
}
</style>