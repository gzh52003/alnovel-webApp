<!--  -->
<template>
  <div class="body">
    <van-cell-group class="input-box">
      <van-field v-model="value" placeholder="请输入书名或作者名" @focus="goto('/booksearch')">
        <!-- 插槽一定要写在这个字段组件里面 因为是属于这个组件里面的 -->
        <template #left-icon>
          <van-icon name="search" size="18" />
        </template>
      </van-field>
    </van-cell-group>

    <div class="menmian">
      <!-- 路径不要有点斜杠./img -->
      <img src="/img/1.png" alt />
    </div>

    <div class="mail">
      <div class="item" @click="goto('/booksdetail/femail')">
        <i></i>
        <span>女生</span>
      </div>
      <div class="item item2" @click="goto('/booksdetail/mail')">
        <i></i>
        <span>男主</span>
      </div>
    </div>

    <!-- 男频主编推荐 -->
    <div class="nanpin">
      <h4 class="tit">男频主编推荐</h4>
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in nanpinlist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p>{{ item.book_name }}</p>
          <!-- class="book_name" class="author"-->
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <div class="nanpin">
      <h4 class="tit">女频主编推荐</h4>
      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in nvpinlist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p>{{ item.book_name }}</p>
          <!-- class="book_name" class="author"-->
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 男生爽文 -->
    <div class="shuangwen">
      <h4 class="tit">
        男生爽文
        <span @click="change('shuwangwen')">换一换</span>
      </h4>
      <ul>
        <li v-for="item in shuwangwenlist" :key="item.book_name">
          <img :src="item.img_url" />
          <div class="fontt">
            <h3 class="book_name">{{ item.book_name }}</h3>
            <p class="book_detail">{{ item.book_detail }}</p>
            <p class="auhor">
              {{ item.author }}
              <van-tag size="medium" color="#f5f5f5" type="primary">{{
                item.tag
              }}</van-tag>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 女生畅销 -->
    <div class="shuangwen">
      <h4 class="tit">
        女生畅销
        <span @click="change('changxiao')">换一换</span>
      </h4>
      <ul>
        <li v-for="item in changxiaolist" :key="item.book_name">
          <img :src="item.img_url" />
          <div class="fontt">
            <h3 class="book_name">{{ item.book_name }}</h3>
            <p class="book_detail">{{ item.book_detail }}</p>
            <p class="auhor">
              {{ item.author }}
              <van-tag size="medium" color="#f5f5f5" type="primary">{{
                item.tag
              }}</van-tag>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 男频最新爆款 -->
    <div class="nanpin">
      <h4 class="tit">
        男频最新爆款
        <span @click="change('nanpin')">换一换</span>
      </h4>

      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in xinkuanlist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p class="book_name">{{ item.book_name }}</p>
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 女频最新红文 -->
    <div class="nanpin">
      <h4 class="tit">
        女频最新红文
        <span @click="change()">换一换</span>
      </h4>

      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in nanpinlist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p class="book_name">{{ item.book_name }}</p>
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 男生完结精品 -->
    <div class="nanpin">
      <h4 class="tit">
        男频完结精品
        <span @click="change()">换一换</span>
      </h4>

      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in nanwanjielist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p class="book_name">{{ item.book_name }}</p>
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 女生完结精品 -->
    <div class="nanpin nvwanjie">
      <h4 class="tit">
        女频完结精品
        <span @click="change()">换一换</span>
      </h4>

      <van-grid :column-num="3" :border="false">
        <van-grid-item v-for="item in nvwanjielist" :key="item.book_name">
          <van-image :src="item.img_url" />
          <p class="book_name">{{ item.book_name }}</p>
          <p class="author">{{ item.author }}</p>
        </van-grid-item>
      </van-grid>
    </div>

    <h3 class="chupin">阿里文学出品</h3>
  </div>
</template>

<script>
import Vue from "vue";
import { CellGroup, Field, Grid, GridItem, Icon, Image, Tag } from "vant";

Vue.use(Field);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Tag);
Vue.use(CellGroup);
export default {
  name: "Books",
  data() {
    return {
      value: "",
      // nanpinlist: [],
      nvpinlist: [],
      shuwangwenlist: [],
      // changxiaolist: [],
      xinkuanlist: [],
      nanwanjielist: [],
      nvwanjielist: [],
    };
  },
  computed: {
    nanpinlist() {
      return this.$store.state.bookcity.nanpinlist;
    },
    changxiaolist(){
      return this.$store.state.bookcity.changxiaolist
    }
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    async change(name) {
      if (name === "shuwangwen") {
        const { data: changxiao } = await this.$request.get("/bookscity/", {
          params: {
            leibie: "changxiao",
          },
        });
        // console.log(nanwanjie);
        this.shuwangwenlist = [];
        // console.log(this.shuwangwenlist);
        this.shuwangwenlist = changxiao.data;
        // console.log(this.shuwangwenlist);
      } else if (name === "changxiao") {
        console.log(name)
        const { data: changxiao } = await this.$request.get("/bookscity/", {
          params: {
            leibie: "nanpin",
          },
        });
        
        console.log(this.changxiaolist);
        // 因为changxiaolist的数据是共享仓库里面的 mutation下的changechangxiao
        this.$store.commit('changechangxiao',changxiao.data)
        
      }
    },

    // 获取数据
    async getData() {
      // const { data: nanpin } = await this.$request.get("/bookscity");
      const { data: nvpin } = await this.$request.get("/bookscity/", {
        params: {
          leibie: "nvpin",
        },
      });
      const { data: shuwangwen } = await this.$request.get("/bookscity/", {
        params: {
          leibie: "shuwangwen",
        },
      });
    
      const { data: xinkuan } = await this.$request.get("/bookscity/", {
        params: {
          leibie: "xinkuan",
        },
      });
      const { data: nanwanjie } = await this.$request.get("/bookscity/", {
        params: {
          leibie: "nanwanjie",
        },
      });
      const { data: nvwanjie } = await this.$request.get("/bookscity/", {
        params: {
          leibie: "nvwanjie",
        },
      });
      // this.nanpinlist = nanpin.data;
      this.nvpinlist = nvpin.data;
      this.shuwangwenlist = shuwangwen.data;
      // this.changxiaolist = changxiao.data;
      this.xinkuanlist = xinkuan.data;
      this.nanwanjielist = nanwanjie.data;
      this.nvwanjielist = nvwanjie.data;
    },
  },
  mounted() {
    this.getData();
    console.log(this.$store);
  },

  created() {
    this.$store.dispatch("getData");
  },
};
</script>
<style lang="scss" scoped>
.body {
  padding: 0 16px;
}
// 头部样式
.van-field__left-icon {
  line-height: 0px;
}
.van-cell {
  background-color: #f5f5f5;
  width: 343px;
  height: 31px;
  line-height: 0px;
  margin: 8px 0;
}
.van-field__left-icon {
  height: 18px;
  // background-color: red;
  line-height: 18px;
}
::v-deep .van-field__left-icon .van-icon {
  line-height: 16px;
}
// 多复用样式样式

.tit {
  width: 100%;
  height: 56px;
  // background-color: yellow;
  line-height: 56px;
  font-size: 18px;
  font-weight: normal;
  color: #000;
  margin-left: 4px;
}


.menmian {
  width: 343px;
  height: 159px;
  // background-color: gray;
  padding-top: 42px;
  margin-bottom: 12px;

  img {
    width: 343px;
    height: 117px;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.05);
  }
}
.mail {
  width: 343px;
  height: 64px;
  // background-color: red;
  text-align: center;
  .van-grid {
    width: 343px;
    height: 189px;
    // background-color: red;
  }
  .item {
    float: left;
    width: 171px;
    height: 64px;
    // background-color: yellow;

    i {
      background-image: url(/img/3.png);
      background-size: 100%;

      width: 48px;
      height: 48px;
      display: block;
      margin: 0 auto;
      background-repeat: no-repeat;
      background-position: center center;
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
  .item2 {
    i {
      background-image: url(/img/2.png);
    }
  }
}

.nanpin {
  width: 343px;
  height: 240px;
  ::v-deep .van-image__img {
    width: 98px;
    height: 131px;
  }
  ::v-deep .van-grid-item__content {
    padding: 1px 8px;
  }
  .tit {
    span {
      width: 42px;
      height: 22px;
      font-size: 14px;
      color: #23b383;
      float: right;
    }
  }
  .van-grid-item {
    padding-top: 0;

    p {
      color: black;
      width: 100%;
      line-height: 16px;
      height: 16px;
      font-size: 13px;
      overflow: hidden;
      // 因为是宫格自适应 去掉换行 才可以自适应 不超出
      // white-space: nowrap;
      text-overflow: ellipsis;
      font-family: PingFangSC-Medium;
      margin-top: 8px;
    }
    .author {
      color: #999;
      margin: 2px 0 16px;
    }
  }
}

.shuangwen {
  width: 343px;
  height: 534px;
  // background-color: yellow;
  ul {
    width: 343px;
    height: 478px;
    // background-color: pink;
    li {
      width: 343px;
      height: 159px;
      // background-color: orange;
      img {
        float: left;
        width: 107px;
        height: 143px;
      }
      .fontt {
        float: right;
        width: 223px;
        height: 143px;
        // background-color: pink;
        margin: 9px 0 0 12px;
        font-size: 12px;
        .book_detail {
          margin: 15px 0;
          display: block;

          font-size: 12px;
          color: #999;
          margin: 15px 0;
          line-height: 20px;
          // 多行溢出 是竖向的 要设置高度 单行文本溢出就一定要有宽度
          height: 40px;
          // 多行文本溢出 时设置了才会出现省略号
          display: -webkit-box;
          -webkit-box-orient: vertical;
          // 当两行的时候给它出现省略号 默认是一行出现省略号
          -webkit-line-clamp: 2;
          // 强制换行
          word-wrap: break-word;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .auhor {
          width: 100%;
          color: #999;
          height: 24px;
          margin-top: 40px;
          .van-tag {
            float: right;
            background-color: #f5f5f5;
            color: #000;
          }
        }
      }
    }
  }
  .book_name {
    font-weight: normal;
    color: black;
    font-size: 16px;
    line-height: 18px;
    height: 18px;
    font-family: PingFangSC-Medium;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-all;
    word-wrap: break-word;
  }
  .tit span {
    width: 42px;
    height: 22px;
    font-size: 14px;
    color: #23b383;
    float: right;
  }
}

.nvwanjie {
  width: 343px;
  height: 425px;
  // background-color: red;
}

.chupin {
  height: 140px;
  // background-color: pink;
  color: #ccc;
  font-size: 12px;
  text-align: center;
  line-height: 95px;
  // padding-top: 20px;
  ::before {
    top: 80%;
    background: #ccc;
    content: "";
    height: 1px;
    width: 40px;
  }

  ::after {
    top: 80%;
    background: #ccc;
    content: "";
    height: 1px;
    width: 40px;
  }
}
</style>
