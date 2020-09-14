<!--  -->
<template>
  <div class="search">
    <form class="search_header" action="/">
      <van-search
        @input="search"
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="search_container">
      <h3>热门搜索</h3>
      <ul class="hot-search">
        <li class="line"></li>
        <li v-for="item in hotSearch" :key="item.bookid">{{ item.title }}</li>
      </ul>
      <div class="search-histroy" v-show="showSearch_history">
        <div>搜索历史</div>
        <button>清空</button>
      </div>
      <ul class="search-histroy-box">
        <li v-for="item in search_history" :key="item">{{item}}</li>
      </ul>
    </div>

    <ul class="search_one" v-show="showSearch_one">
      <li v-for="item in search_one" :key="item.title">{{ item.title}}</li>
    </ul>
    <ul class="search_click">
      <li v-for="item in search_enter" :key="item._id">
        <dl>
          <dt>
            <img :src="item.cover" alt />
          </dt>
          <dd>
            <h3>{{ item.title}}</h3>
            <h5>{{ item.author}}</h5>
            <p>{{ item.desc}}</p>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      hotSearch: [],
      // 简单的搜索
      search_one: [],
      search_enter: [],
      search_history: [],
      num: 0,
      flag: true,
      value: "",
      showSearch_one: false,
      showSearch_history: false,
    };
  },
  created() {
    this.getHotSearch();
  },
  methods: {
    //获取热门搜索
    async getHotSearch() {
      const { data } = await this.$request.get("/shelf/hot");
      console.log("我是热门搜索", data.data[0].data);
      this.hotSearch = data.data[0].data;
    },

    //回车后 发起请求
    async onSearch(val) {
      this.search_one = [];
      const { data } = await this.$request.get("/search", {
        params: {
          q: val,
        },
      });
      console.log("data", data.data, val);
      this.search_enter = data.data;

      this.search_history.unshift(val);
      if (this.search_history.length > 10) {
        for (let i = 0; i < 10; i++) {
          this.search_history.unshift(this.search_history[i]);
        }
      }
      // console.log("我是搜索记录", this.search_history);
      if (this.search_history.length > 0) {
        this.showSearch_history = true;
      }
    },
    onCancel() {
      this.search_one = [];
      this.search_enter = [];
    },

    //搜索事件 表单输入值的时候 发起请求
    async search() {
      //节流阀
      if (this.flag) {
        //发起请求
        const { data } = await this.$request.get("/search", {
          params: {
            q: this.value,
          },
        });
        this.search_one = data.data;

        this.flag = false;
        setTimeout(() => {
          this.flag = true;
        }, 500);
      }
      this.showSearch_one = true;
      //表单的值 为空的是设置
      if (!this.value) {
        this.search_one = [];
        this.search_enter = [];
        this.showSearch_one = false;
      }
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.search {
  position: relative;
  padding: 10px 0;
  .van-search {
    padding: 0 0 0 2%;
  }
  .search_header {
    .van-cell {
      width: 100%;
    }
    .van-search__action {
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
      li {
        height: 38px;
        border-radius: 4px;
        padding: 6px 12px;
      }
    }
  }
  //这是第一次搜索的
  .search_one {
    position: absolute;
    top: 55px;
    left: 0;
    padding-left: 2%;
    width: 100%;
    height: 100%;
    background: #fff;

    li {
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #ddd;
      color: #333;
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  //这是回车搜索

  .search_click {
    position: absolute;
    width: 100%;
    top: 55px;
    padding-left: 2%;
    background: #fff;

    li {
      dl {
        display: flex;

        dt {
          margin-right: 6px;
          width: 78px;
          height: 95px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        dd {
          width: 100%;
          h3 {
            font-size: 15px;
            line-height: 16px;
            padding: 10px 0 8px 0;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
          }
          h5 {
            font-size: 12px;
            line-height: 10px;
            color: #999;
          }
          p {
            font-size: 13px;
            line-height: 20px;
            margin: 4.5px 0 12px 0;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>