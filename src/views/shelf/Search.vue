<!--  -->
<template>
  <div class="search">
    <div class="search_header">
      <van-icon class="len" size="18px" name="search" />
      <input @input="search" class="search" type="text" placeholder="请输入书名或者作者名" />
      <button>取消</button>
    </div>
    <div class="search_container">
      <h3>热门搜索</h3>
      <ul class="hot-search">
        <li class="line"></li>
        <li v-for="item in hotSearch" :key="item.bookid">{{ item.title }}</li>
      </ul>
      <div class="search-histroy">
        <div>搜索历史</div>
        <button>清空</button>
      </div>
      <ul class="search-histroy-box">
        <li>异界之魔武流氓</li>
        <li>龙王殿</li>
        <li>超凡：从拥有系统开始</li>
        <li>我是菜鸡</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      hotSearch: [],
    };
  },
  created() {
    this.getHotSearch();
  },
  methods: {
    //获取热门搜索
    async getHotSearch() {
      const { data } = await this.$request.get("/shelf/hot");
      // console.log("我是热门搜索", data.data[0].data);
      this.hotSearch = data.data[0].data;
    },
    //搜索事件
    search() {
      console.log(1);
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.search {
  padding: 10px 0;
  .search_header {
    width: 98%;
    margin-left: 2%;

    position: relative;
    display: flex;
    margin-bottom: 10px;
    height: 31px;
    border-radius: 5px;

    .len {
      top: 6px;
      left: 6px;
      position: absolute;
    }
    .search {
      background: #eee;
      padding-left: 26px;
      border: none;
      width: 80%;
      height: 100%;
      font-size: 14px;
    }
    button {
      width: 20%;
      height: 100%;
      background: #fff;
      font-weight: bold;
      color: #23b383;
      border: none;
    }
  }
  .search_container {
    box-sizing: border-box;
    padding-left: 2%;
    height: 355px;

    h3 {
      padding: 23px 0 16px 0;
      font-size: 18px;
    }

    ul {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 166px;
      padding-bottom: 6px;
      font-size: 14px;

      li {
        margin: 0 12px 12px 0;
        padding: 4px 6px 0;
        line-height: 2.2;
        background: #eee;
      }
      .line {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 1px;
        background: #ccc;
        transform: scaleY(0.2);
      }
    }
    .search-histroy {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 23px 10px 16px;
      height: 34px;
      margin-bottom: 16px;
      div {
        font-weight: bold;
        font-size: 18px;
      }
      button {
        border: none;
        color: #23b323;
      }
    }
    .search-histroy-box {
      height: 86px;
    }
  }
}
</style>