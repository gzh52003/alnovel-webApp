<!--  -->
<template>
  <div class="shelf">
    <div class="shelf_header">
      <van-icon class="len" size="20px" name="search" />
      <input @click="gotoSearch" class="search" type="text" placeholder="请输入书名或者作者名" />
    </div>
    <div class="shelf_box">
      <div v-for="item in shelfList" :key="item.bookId" class="card-item">
        <img src="../../../public/categoryImg/typeImg/female/dushi/1105497944585.jpg" alt />
        <h3>{{ item.bookName }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shelf",
  data() {
    return {
      shelfList: [],
    };
  },
  created() {
    this.getShelfList();
  },
  methods: {
    async getShelfList() {
      const { data } = await this.$request.get("/shelf");
      console.log("我是res", data.data);
      this.shelfList = data.data;
    },
    gotoSearch() {
      this.$router.push({
        name: "Search",
      });
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.shelf {
  width: 96%;
  margin-left: 2%;
  padding: 10px 0;

  .shelf_header {
    position: relative;
    margin-bottom: 10px;
    height: 31px;

    border-radius: 5px;

    .len {
      top: 6px;
      left: 6px;
      position: absolute;
    }
    .search {
      background: #ccc;
      padding-left: 28px;
      border: none;
      width: 100%;
      height: 100%;
    }
  }
  .shelf_box {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    align-content: start;
    padding: 10px 0;

    .card-item {
      margin-bottom: 10px;
      width: 33.3%;
      padding: 0 8px;
      height: 175px;

      img {
        padding: 5px 0;
        width: 100%;
        height: 78%;
      }
      h3 {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
}
</style>