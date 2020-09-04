<!--  -->
<template>
  <div class="cate-con">
    <div class="cate-con-item" v-show="isShowCurrent">主体男</div>
    <div class="cate-con-item" v-show="!isShowCurrent">主体女</div>
  </div>
</template>

<script>
export default {
  name: "NavbarCom",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>
<style  lang="scss" scoped>
</style>