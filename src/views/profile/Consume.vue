<template>
  <div class="consume">
    <div class="noIDshow">
      <img src="profile/noID.png" alt />
      <p>身份验证失败</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.consume {
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
}
.noIDshow {
  width: 138px;
  height: 138px;
  margin: auto;
  img {
    width: 100%;
    height: 100%;
  }
  p{
    text-align: center;
    font-size: 16px;
    color: #999;
  }
}
</style>