<template>
  <div class="body">
    <!-- 主编力荐 -->
    <div class="lijian">
      <h4>
        <img src="../../../public/img/4.png" alt />
        <p>主编力荐</p>
        <div class="change">
          <img src="../../../public/img/5.png" alt />
          <span>换一换</span>
        </div>
      </h4>

      <div class="nanpin">
        <van-grid :column-num="3" :border="false">
          <van-grid-item v-for="item in nvwanjielist" :key="item.book_name">
            <van-image :src="item.img_url" />
            <p>{{ item.book_name }}</p>
            <!-- class="book_name" class="author"-->
            <p class="author">{{ item.author }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 间隔 -->
    <div class="jiange"></div>
    <!-- 男生新书 -->
    <div class="lijian xinshu">
      <h4>
        <img src="../../../public/img/4.png" alt />
        <p>男生新书</p>
        <div class="change">
          <img src="../../../public/img/5.png" alt />
          <span>换一换</span>
        </div>
      </h4>

      <!-- 男频主编推荐 -->
      <div class="nanpin">
        <van-grid :column-num="4" :border="false">
          <van-grid-item v-for="item in nanxinshulist" :key="item.book_name">
            <van-image :src="item.img_url" />
            <p>{{ item.book_name }}</p>
            <!-- class="book_name" class="author"-->
            <p class="author">{{ item.author }}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>

    <!-- 无名列表 -->
    <div class="wuming">
      <ul>
        <li v-for="item in changxiaolist" :key="item.book_name">
          <img :src="item.img_url" />
          <div class="fontt">
            <h3 class="book_name">{{ item.book_name }}</h3>
            <p class="book_detail">{{ item.book_detail }}</p>
            <p class="auhor">
              {{ item.author }}
              <van-tag size="mini" type="primary" plain text-color="#a1a1b3">{{
                item.tag
              }}</van-tag>
              <van-tag
                size="mini"
                plain
                text-color="#23b383"
                style="margin-right:5px;"
                >{{ item.tag0 }}</van-tag
              >
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 间隔 -->
    <div class="jiange"></div>

    <!-- 猜你喜欢 -->
    <div class="lijian">
      <h4>
        <img src="../../../public/img/4.png" alt />
        <p>猜你喜欢</p>
        <div class="change">
          <img src="../../../public/img/5.png" alt />
          <span>换一换</span>
        </div>
      </h4>
      <div class="wuming">
        <ul>
          <li v-for="item in xihuanlist" :key="item.book_name">
            <img :src="item.img_url" />
            <div class="fontt">
              <h3 class="book_name">{{ item.book_name }}</h3>
              <p class="book_detail">{{ item.book_detail }}</p>
              <p class="auhor">
                {{ item.author }}
                <van-tag
                  size="mini"
                  type="primary"
                  plain
                  text-color="#a1a1b3"
                  >{{ item.tag }}</van-tag
                >
                <!-- <van-tag
                  size="mini"
                  plain
                  text-color="#23b383"
                  style="margin-right:5px;"
                  >{{ item.tag }}</van-tag
                > -->
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Grid, GridItem, Image, Tag } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);
Vue.use(Tag);

export default {
  data() {
    return {
      nanpinlist: [],

      nanxinshulist: [
        {
          img_url: "/img/1160738054673.jpg",
          book_name: "第一法师",
          author: "庄毕凡",
        },

        {
          img_url: "/img/1199128016707.jpg",
          book_name: "不灭神王",
          author: "观棋",
        },

        {
          img_url: "/img/1116046931348.jpg",
          book_name: "龙血神帝",
          author: "刹那",
        },
        {
          img_url: "/img/1166718018220.jpg",
          book_name: "从战场回来后她真香了",
          author: "汤梓橙",
        },
      ],
    };
  },
  computed: {
    nvwanjielist() {
      return this.$store.state.bookcity.nvwanjielist;
    },
    xihuanlist() {
      return this.$store.state.bookcity.xihuanlist;
    },
    changxiaolist() {
      return this.$store.state.bookcity.changxiaolist;
    },
  },
  created() {
    this.$store.commit("displayTabbar", false);
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>
<style lang="scss" scoped>
.body {
  padding: 20px 16px 0;
}
.jiange {
  height: 8px;
  width: 375px;
  background-color: rgb(248, 246, 246);
  margin-left: -16px;
}
.lijian {
  padding-top: 20px;
  width: 343px;
  height: 436px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgb(248, 246, 246);
  h4 {
    width: 343px;
    height: 22px;
    margin-bottom: 15px;
    // background-color: red;
    img {
      float: left;
      width: 9px;
      height: 23px;
      margin-right: 5px;
    }
    p {
      float: left;
      font-size: 16px;
      font-weight: 500;
      color: #404047;
      line-height: 20px;
    }
    .change {
      float: right;
      width: 72px;
      height: 20px;
      //   background-color: blue;
      span {
        float: left;
        color: #404047;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
      }
      img {
        float: right;
        width: 18px;
        height: 18px;
        margin-left: 4px;
      }
    }
  }
  .nanpin {
    width: 343px;
    height: 399px;
    // background-color: pink;

    ::v-deep .van-grid-item__content {
      padding: 1px 8px;
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
        white-space: wrap;
        -webkit-line-clamp: 1;
        text-overflow: ellipsis;
        font-family: PingFangSC-Medium;
        margin-top: 8px;
      }
      .author {
        color: #999;
        margin: 2px 0 16px;
        ::v-deep .van-tag {
          color: red;
        }
      }
    }
  }
}
.xinshu {
  height: 220px;
}

// 无名
.wuming {
  width: 343px;
  height: 388px;
  //   background-color: yellow;
  ul {
    width: 343px;
    height: 478px;
    // background-color: pink;
    li {
      width: 343px;
      height: 129px;
      padding: 16px 0;
      //   background-color: orange;
      border-bottom: 1px solid rgb(248, 246, 246);
      img {
        float: left;
        width: 68px;
        height: 92px;
      }
      .fontt {
        float: right;
        width: 251px;
        height: 97px;
        // background-color: pink;
        margin: 7px 0 0 16px;
        font-size: 12px;
        .book_name {
          width: 251px;
          height: 21px;
          line-height: 21px;
        }
        .book_detail {
          margin: 0px 0 8px;
          display: block;

          font-size: 12px;
          color: #999;
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
          .van-tag {
            float: right;
            font-size: 10px;
          }
        }
      }
    }
  }
}
</style>
