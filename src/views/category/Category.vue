<!--  -->
<template>
  <div class="cate-box">
    <div class="navBar">
      <div class="cate-header">
        <div class="cate-header-item">
          <span @click="cahngeTab" :class="isShowCurrent?'cate-item-active':''">男生</span>
        </div>
        <div class="cate-header-item">
          <span @click="cahngeTab" :class="!isShowCurrent?'cate-item-active':''">女生</span>
        </div>
        <div class="line"></div>
      </div>
      <div class="cate-con">
        <div class="cate-con-item" v-show="isShowCurrent">
          <div
            class="card-box"
            @click="gotoDetails(item.id,item.name,item.booksType)"
            v-for="item in cateBooksMale"
            :key="item.name"
          >
            <div class="card-left">
              <h1>{{ item.name }}</h1>
              <p>{{ item.title }}</p>
            </div>
            <div class="card-right">
              <img :src="item.imgUrl" alt />
            </div>
          </div>
        </div>
        <div class="cate-con-item" v-show="!isShowCurrent">主体女</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      isShowCurrent: true,
      cateBooksMale: [
        {
          id: 1,
          name: "都市",
          booksType: "都市小说",
          title: "生活/异能",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318311993.png",
        },
        {
          id: 2,
          name: "玄幻",
          booksType: "玄幻小说",
          title: "东方玄幻",
          path: "categoryDetail/1/玄幻",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318312724.png",
        },
        {
          id: 3,
          name: "仙侠",
          booksType: "仙侠小说",
          title: "现代修真",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318313555.png",
        },
        {
          id: 4,
          name: "灵异",
          booksType: "灵异推理",
          title: "灵异鬼怪",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318314338.png",
        },
        {
          id: 5,
          name: "历史",
          booksType: "历史架空",
          title: "历史架空",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318315165.png",
        },
        {
          id: 6,
          name: "游戏",
          booksType: "游戏竞技",
          title: "虚拟网游",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318320558.png",
        },
        {
          id: 7,
          name: "科幻",
          booksType: "科幻小说",
          title: "未来世界",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318321490.png",
        },
        {
          id: 8,
          name: "武侠",
          booksType: "武侠小说",
          title: "传统武侠",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318322238.png",
        },
        {
          id: 9,
          name: "奇幻",
          booksType: "奇幻小说",
          title: "西方奇幻",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318322966.png",
        },
        {
          id: 10,
          name: "竞技",
          booksType: "竞技体育",
          title: "电子竞技",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318323615.png",
        },
        {
          id: 11,
          name: "其他",
          booksType: "耽美小说",
          title: "动漫影视",
          path: "categoryDetail",
          imgUrl: "categoryImg/typeImg/male/homeImg/2017091318323615.png",
        },
      ],
    };
  },
  methods: {
    cahngeTab() {
      this.isShowCurrent = !this.isShowCurrent;
    },
    //跳转到分类的详情页
    gotoDetails(id, name, booksType) {
      // console.log("跳转到详情页的数据", id, name, booksType);
      this.$router.push({
        name: "CategoryDetail",
        params: {
          id,
          name,
          booksType,
        },
      });
    },
  },
  components: {},
};
</script>
<style  lang="scss" scoped>
// 头部
* {
  margin: 0;
  padding: 0;
}

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
    height: 49px;
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
  width: 96%;
  margin-left: 2%;

  .cate-con-item {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;

    .card-box {
      display: flex;
      width: 48%;
      box-sizing: border-box;
      margin: 0 1%;
      padding: 4% 1%;
      height: 96px;
      margin-top: 17px;
      background-color: rgba(245, 245, 245, 0.5);

      .card-left {
        padding-left: 5px;
        width: 55%;

        h1 {
          font-size: 16px;
          font-weight: normal;
          margin: 10px;
          text-shadow: 0.125px 0.125px 0 #333, -0.125px 0.125px 0 #333,
            0.125px -0.125px 0 #333, -0.125px -0.125px 0 #333;
          line-height: 18px;
          height: 18px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        p {
          font-size: 12px;
          color: #999;
        }
      }
      .card-right {
        width: 45%;
        padding: 5px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .card-box:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>