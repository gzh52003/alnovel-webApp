<!--  -->
<template>
  <div class="navBar">
    <div class="cate-header">
      <div class="cate-header-item">
        <span @click="cahngeTab" :class="isShowCurrent?'cate-item-active':''">男生</span>
      </div>
      <div class="cate-header-item">
        <span @click="cahngeTab" :class="!isShowCurrent?'cate-item-active':''">女生</span>
      </div>
      <div class="line"></div>
    </div>
    <div class="cate-con">
      <div class="cate-con-item" v-show="isShowCurrent">主体男</div>
      <div class="cate-con-item" v-show="!isShowCurrent">主体女</div>
    </div>

    <!-- <div class="cate-con">
      <div class="cate-con-item" v-show="isShowCurrent">
        <slot name="cate-con-item1">1</slot>
      </div>
      <div class="cate-con-item" v-show="!isShowCurrent">
        <slot name="cate-con-item2">2</slot>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "NavBar",
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
.cate-header {
  position: relative;
  display: flex;
  height: 49%;
  line-height: 49px;
  margin-bottom: 10px;
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
// .cate-con {
//   height: 100%;
//   background: yellow;
// }
</style>