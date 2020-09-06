<!--  -->
<template>
  <div class="catalog">
    <div class="catalog_header">
      <dl>
        <dt>
          <img :src="booksInfo.imgUrl" alt />
        </dt>
        <dd>
          <h3>{{ booksInfo.bookName }}</h3>
          <p>{{ booksInfo.authorName }}</p>
          <div class="recoment-novel">
            <span>共 {{ booksInfo.chapterNum }} 章</span>
            <span>已经读取了..</span>
          </div>
        </dd>
      </dl>
    </div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="item in catalogList" :key="item.chapterId" :title="item.chapterName" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: "Catelog",
  data() {
    return {
      page: 1,
      size: 10,
      num: 0,
      booksInfo: [],
      catalogList: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    this.getCatalog(); //最初的时候 获取目录的数据
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
  methods: {
    async getCatalog() {
      const { id: bookId, c_type } = this.$route.query; //对于前面点击 事件 触发的事件！传递来的参数
      //发起请求
      const { data } = await this.$request.get(`/category/catalog/${bookId}`, {
        params: {
          page: this.page,
          size: this.size,
          c_type,
        },
      });
      //拿到请求后的数据 res
      let res = data.data[0].data.chapterList[0].volumeList;
      // console.log("res", data.data[0].data);
      this.booksInfo = data.data[0].data; //拿到当前小说的基本信息！
      //先把catalogList 存储 获得后的数据 的数组 置空！
      this.catalogList = [];
      //遍历这个res 一千多条的数据 或者全部的数据！
      for (let i = 0; i < res.length; i++) {
        this.loading = false; // 加载状态结束
        this.total = data.data[0].data.chapterList[0].volumeList.length;

        if (i < 0 + this.num) {
          //若是这个 存储数据的数组里面 没有查询到已经存在的数据 那么就push进去
          if (this.catalogList.indexOf(res[i]) === -1) {
            this.catalogList.push(res[i]);
          }
          //当这个i 等于 这个总长度的时候，那么就是代表加载完成，加载完成后不再触发load事件
          if (i === this.total - 1) {
            this.finished = true;
          }
        }
      }
    },
    //滚动加载时触发，list组件定义的方法
    onLoad() {
      this.page++; //页数的 ++
      this.num += 100; // num的++
      this.getCatalog(); // 调用获取目录的数据
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
.catalog {
  width: 94%;
  margin-left: 3%;

  .catalog_header {
    box-sizing: border-box;
    height: 120px;
    padding: 20px 0;

    dl {
      height: 100%;
      display: flex;
      dt {
        width: 19%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        padding-left: 10px;
        width: 81%;
        height: 100%;
        height: 100%;
        h3 {
          line-height: 19px;
          font-size: 19px;
          color: #333;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
          word-wrap: break-word;
          font-weight: bold;
        }
        p {
          margin-top: 6px;
          height: 20px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          word-break: break-all;
          word-wrap: break-word;
          line-height: 20px;
          font-size: 12px;
          color: #999;
        }
        .recoment-novel {
          display: flex;
          margin-top: 13px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          word-break: break-all;
          font-size: 12px;

          span:nth-child(2) {
            margin: 0 5px;
          }
        }
      }
    }
  }
}
</style>