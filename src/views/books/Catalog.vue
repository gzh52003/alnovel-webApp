<!--  -->
<template>
  <div class="catalog">
    <div class="catalog_header">
      <dl>
        <dt>
          <img :src="booksInfo.img_url" alt />
        </dt>
        <dd>
          <h3>{{ booksInfo.book_name }}</h3>
          <p>{{ booksInfo.author }}</p>
          <!-- <div class="recoment-novel">
            <span>共 {{ booksInfo.chapterNum }} 章</span>
            <span>已经读取了..</span>
          </div> -->
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
      catalogList: [     
{chapterId: "949358", chapterName: "1.生死未卜", payStatus: "0", chapterPrice: "0", wordCount: "2058"},
{chapterId: "949358", chapterName: "2.出嫁", payStatus: "0", chapterPrice: "0", wordCount: "2058"},
{chapterId: "949359", chapterName: "3.做个瑜伽", payStatus: "0", chapterPrice: "0", wordCount: "2116"},
{chapterId: "949360", chapterName: "4.不熟的豆芽", payStatus: "0", chapterPrice: "0", wordCount: "2037"},
{chapterId: "949361", chapterName: "5.绘图高手", payStatus: "0", chapterPrice: "0", wordCount: "2025"},
{chapterId: "949362", chapterName: "6.凤羽阁", payStatus: "0", chapterPrice: "0", wordCount: "2080"},
{chapterId: "949363", chapterName: "7.太医复诊", payStatus: "0", chapterPrice: "0", wordCount: "2148"},
{chapterId: "949364", chapterName: "8.本王的名号，可随时取用", payStatus: "0", chapterPrice: "0"},
{chapterId: "949365", chapterName: "9.允你自由", payStatus: "0", chapterPrice: "0", wordCount: "2215"},
{chapterId: "949366", chapterName: "10.爱情来了吗？", payStatus: "0", chapterPrice: "0", wordCount: "2059"},
 {chapterId: "949367", chapterName: "11.浑身醋味儿", payStatus: "0", chapterPrice: "0", wordCount: "2068"},
 {chapterId: "949368", chapterName: "12.跟紧本王", payStatus: "0", chapterPrice: "0", wordCount: "2024"},
 {chapterId: "949369", chapterName: "13.你很贪心", payStatus: "0", chapterPrice: "0", wordCount: "2014"},
 {chapterId: "949370", chapterName: "14.先撩者死", payStatus: "0", chapterPrice: "0", wordCount: "2019"},
 {chapterId: "949371", chapterName: "15.生理性厌恶", payStatus: "0", chapterPrice: "0", wordCount: "2050"},
 {chapterId: "949372", chapterName: "16.敬茶", payStatus: "0", chapterPrice: "0", wordCount: "2079"},
 {chapterId: "949373", chapterName: "17．廉价的吻", payStatus: "0", chapterPrice: "0", wordCount: "2109"},
 {chapterId: "949405", chapterName: "18.书生宋卓楠", payStatus: "0", chapterPrice: "0", wordCount: "2106"},
 {chapterId: "949662", chapterName: "19.更大的拥抱", payStatus: "0", chapterPrice: "0", wordCount: "2066"},
 {chapterId: "950376", chapterName: "20.演戏", payStatus: "0", chapterPrice: "0", wordCount: "2070"},
 {chapterId: "950489", chapterName: "21．方清敏的心思", payStatus: "3", chapterPrice: "1.8", wordCount: "2065"},
 {chapterId: "950588", chapterName: "22.祝步步高升", payStatus: "3", chapterPrice: "1.8", wordCount: "2041"},
 {chapterId: "951031", chapterName: "23.多海阁一炮而红", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "951134", chapterName: "24.赏荷盛会（一）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "951327", chapterName: "25.赏荷盛会（二）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "951419", chapterName: "26.赏荷盛会（三）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "951901", chapterName: "27.赏荷盛会（四）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "952022", chapterName: "28.赏荷盛会（五）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "952134", chapterName: "29.赏荷盛会（六）", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "952939", chapterName: "30.亲姐妹", payStatus: "3", chapterPrice: "1.8", wordCount: "2021"},
 {chapterId: "953383", chapterName: "31.清白不保", payStatus: "3", chapterPrice: "1.8", wordCount: "2062"},
 {chapterId: "955068", chapterName: "32.我要你", payStatus: "3", chapterPrice: "1.8", wordCount: "2028"},
 {chapterId: "955267", chapterName: "33.太极双泉", payStatus: "3", chapterPrice: "1.8", wordCount: "2029"},
 {chapterId: "955686", chapterName: "34.住一辈子都可以", payStatus: "3", chapterPrice: "1.8"},
 {chapterId: "955802", chapterName: "35.使臣", payStatus: "3", chapterPrice: "1.8", wordCount: "2081"},
 {chapterId: "955941", chapterName: "36.无尘公子", payStatus: "3", chapterPrice: "1.8", wordCount: "2045"},
 {chapterId: "956061", chapterName: "37.离京前夕", payStatus: "3", chapterPrice: "1.8", wordCount: "2068"},
 {chapterId: "956194", chapterName: "38.离京", payStatus: "3", chapterPrice: "1.8", wordCount: "2043"},
 {chapterId: "956512", chapterName: "39.方清敏的下场", payStatus: "3", chapterPrice: "1.8", wordCount: "2021"},
 {chapterId: "956640", chapterName: "40.拜师学医", payStatus: "3", chapterPrice: "1.8", wordCount: "2043"},
 {chapterId: "956925", chapterName: "41.小太阳", payStatus: "3", chapterPrice: "1.8", wordCount: "2186"},
 {chapterId: "957054", chapterName: "42.宠溺笑容", payStatus: "3", chapterPrice: "1.8", wordCount: "2084"},
 {chapterId: "957245", chapterName: "43.自欺欺人", payStatus: "3", chapterPrice: "1.8", wordCount: "2092"},
 {chapterId: "957965", chapterName: "44.吾本倾城", payStatus: "3", chapterPrice: "1.8", wordCount: "2029"},
 {chapterId: "958555", chapterName: "45.真相", payStatus: "3", chapterPrice: "1.8", wordCount: "2070"},
 {chapterId: "958767", chapterName: "46.命丧云庭江", payStatus: "3", chapterPrice: "1.8", wordCount: "2216"},
 {chapterId: "958906", chapterName: "47.天变了", payStatus: "3", chapterPrice: "1.8", wordCount: "2104"},
 {chapterId: "959102", chapterName: "48.千年天山雪莲"}

      ],
      loading: false,
      finished: false,
    };
  },
  created() {
    console.log(666666);
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
      // const { id: bookId, c_type } = this.$route.query; //对于前面点击 事件 触发的事件！传递来的参数
      // //发起请求
      // const { data } = await this.$request.get(`/category/catalog/${bookId}`, {
      //   params:{
      //     page: this.page,
      //     size: this.size,
      //     c_type,
      //   },
      // });
      // //拿到请求后的数据 res
      // let res = data.data[0].data.chapterList[0].volumeList;
      // // console.log("res", data.data[0].data);
      // this.booksInfo = data.data[0].data; //拿到当前小说的基本信息！
      // //先把catalogList 存储 获得后的数据 的数组 置空！
      // this.catalogList = [];
      // //遍历这个res 一千多条的数据 或者全部的数据！
      // for (let i = 0; i < res.length; i++) {
      //   this.loading = false; // 加载状态结束
      //   this.total = data.data[0].data.chapterList[0].volumeList.length;

      //   if (i < 0 + this.num) {
      //     //若是这个 存储数据的数组里面 没有查询到已经存在的数据 那么就push进去
      //     if (this.catalogList.indexOf(res[i]) === -1) {
      //       this.catalogList.push(res[i]);
      //     }
      //     //当这个i 等于 这个总长度的时候，那么就是代表加载完成，加载完成后不再触发load事件
      //     if (i === this.total - 1) {
      //       this.finished = true;
      //     }
      //   }
      // }



      // 我的死数据代码
      const bookInfo = localStorage.getItem('bookInfo');
      // console.log("bookInfo",JSON.parse(bookInfo));
      this.booksInfo = JSON.parse(bookInfo)
      console.log("存入数据",this.booksInfo);
    },
    //滚动加载时触发，list组件定义的方法
    onLoad() {
      
      this.getCatalog(); // 调用获取目录的数据
            // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        this.finished = false;
        // if (this.list.length >= 40) {
        //   this.finished = false;
        // }
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