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
          <van-list class="card-box">
            <van-cell
              v-for="item in booksList"
              :key="item.title"
              @click="gotoNovelDetails(item.bookid)"
            >
              <dl>
                <dt>
                  <img :src="item.cover" alt />
                </dt>
                <dd>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.desc }}</p>
                  <div class="recommend-books">
                    <span>{{ item.author}}</span>
                    <span>{{ item.tags.split(",")[0]}}</span>
                  </div>
                </dd>
              </dl>
            </van-cell>
          </van-list>
        </div>

        <div class="cate-con-item" v-show="!isShowCurrent">最热dddd!!!的屏幕！</div>
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
      page: 1,
      // m_id,
      size: 10,
      total: "",
      offset: 0,
      loading: false,
      finished: false,
    };
  },
  created() {
    this.getNewList();
  },
  mounted() {
    this.getNewList();
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
  computed: {
    c_typeList() {
      return this.$store.state.bookCategory.c_typeList;
    },
    // 拿到分类图书的数据
    booksList() {
      return this.$store.state.bookCategory.booksList;
    },
  },
  methods: {
    //获取分类的数据
    getNewList() {
      const booksList = "booksList";
      const { name: typeName } = this.$route.params;
      this.$store.commit("getNewList", {
        booksList,
        typeName,
      });
    },
    cahngeTab() {
      this.isShowCurrent = !this.isShowCurrent;
    },
    //跳转到详情页！
    gotoNovelDetails(id) {
      console.log("我是跳转详情页");
      const { name: typeName } = this.$route.params;
      this.$router.push({
        name: "NovelDetails",
        params: {
          id,
        },
        query: {
          typeName,
        },
      });
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
      margin-top: 10px;
      width: 100%;
      height: 144px;

      dl {
        display: flex;
        width: 100%;
        height: 100%;

        dt {
          width: 32%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        dd {
          margin: 10px 0 0 10px;
          width: 68%;
          font-size: 13px;
          color: #999;
          h3 {
            font-weight: 700;
            font-size: 16px;
            line-height: 18px;
            height: 18px;
          }
          p {
            margin: 15px 0;
            line-height: 20px;
            height: 40px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .recommend-books {
            margin-top: 28px;
            display: flex;
            span:nth-child(1) {
              line-height: 24px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 70%;
            }
            span:nth-child(2) {
              display: inline-block;
              box-sizing: content-box;
              padding: 4.5px 8px;
              margin-left: 3px;
              background-color: #f5f5f5;
              color: #000;
              font-weight: 500;
              font-family: PingFangSC-Medium;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
}
</style>