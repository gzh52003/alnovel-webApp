<template>
  <div class="searchbody">
    <div class="searchheader">
      <van-cell-group class="input-box" style="float:left">
        <!--  @change="render()" -->
        <van-field
          placeholder="请输入书名或作者名"
          @focus="behind()"
          @input="baidurender()"
          @keyup.enter="render()"
          v-model="value"
        >
          <!-- 插槽一定要写在这个字段组件里面 因为是属于这个组件里面的 -->
          <template #left-icon>
            <van-icon name="search" size="18" />
          </template>
        </van-field>
      </van-cell-group>
      <a class="cancle" href="###" style="float:right" @click="goto('/books')">
        <b>取消</b>
      </a>
    </div>
    <!-- 当触发behind函数的时候 isshow变成false 这个div会被隐藏 -->
    <div class="searchshow" v-show="isshow">
      <div class="list">
        <h3>热门搜索</h3>
        <ul>
          <li>斗罗大陆</li>
          <li>近身狂兵</li>
          <li>网游之天下无双</li>
          <li>农女重生之丞相夫人</li>
          <li>终极美女保镖</li>
          <li>顶级宠婚：闷骚老公坏死了</li>
          <li>武道至尊</li>
          <li>医品宗师</li>
          <li>丹道宗师</li>
        </ul>
      </div>
      <div class="searchhistory">
        <h6>
          搜索历史
          <span @click="clear()">清空</span>
        </h6>
        <ul>
          <!-- v-for="item in historylist" :key="item" -->
          <li v-for="item in historylist" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>

    <ul class="baidulist">
      <li v-for="item in baidulist" :key="item.q">{{ item.q }}</li>
      <!-- <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li> -->
    </ul>

    <!-- 搜索后渲染的内容 -->
    <!-- <div class="listdata" v-show="!isshow">
      <ul>
        <li class="lili" v-for="item in listdata" :key="item.book_name">
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

    
    </div>-->

    <!-- 下拉刷新功能渲染页面 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh()">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        class="listdata"
        v-show="!isshow"
      >
      <van-row>
          <van-cell class="lili" v-for="item in listdata" :key="item.id">
          <van-col span="7">
            <img :src="item.img_url" />
          </van-col>
          <van-col span="17">
            <div class="fontt">
            <h3 class="book_name" v-html="format(item.book_name)"></h3>
            <p class="book_detail">{{ item.book_detail }}</p>
            <p class="auhor">
              {{ item.author }}
              <van-tag size="medium" color="#f5f5f5" type="primary">
                {{ item.tag }}
              </van-tag>
            </p>
          </div>
          </van-col>
        </van-cell>
      </van-row>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import $ from "jquery";

import Vue from "vue";
import { Cell, CellGroup, Field, Icon, List, PullRefresh, Tag } from "vant";
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Tag);
export default {
  data() {
    return {
      url:
        "https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32218,1425,31672,32139,31254,32045,32230,32299,31639&wd=123&req=2&csor=5&pwd=hell&cb=jsonCallBack&_=1594630926722",
      isshow: true,
      listdata: [],
      //   newlist:[],
      baidulist: [],
      test: null,
      msg: ['<span style="color:red">斗罗大陆</span>'],
      //   list: [],
      loading: false,
      finished: false,
      refreshing: false,
      // 实现双向绑定
      value: "",
      // 因为组件的销毁导致组件的会重新创建 所以可以把历史搜索数据放到仓库 从仓库获取
      historylist: ["斗罗大陆"],
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    },
    // 隐藏
    behind() {
      this.isshow = false;
    },
    clear() {
      console.log(111111);
      this.historylist = "";
    },
    format(title) {
      console.log("title", title);
      return title.replace(
        "斗罗大陆",
        '<span style="color: #58bc58">斗罗大陆</span>'
      );
    },
    // 高亮用format实现
    // gaoliang() {
    //   console.log("高亮", this.listdata);
    //   // var newlist = [];
    //   // let obj = {};
    //   this.listdata.forEach((item) => {
    //     const a = item.book_name.split("斗罗大陆");
    //     // console.log(a,item.book_name)
    //     const b = "<span style='color:#58bc58'>斗罗大陆</span>" + a[1];
    //     console.log(b);
    //     // 用点符号可以 用中括号不行
    //     item.newbookname = b;
    //     console.log(item);
    //     this.msg = b;
    //     // this.listdata.push(obj)
    //   });
    //   console.log("newlist:", this.listdata);
    // },
    async onLoad() {
      if (this.refreshing) {
        this.listdata = [];
        this.refreshing = false;
      }
      const { data } = await this.$request.get("/bookscity", {
        params: {
          leibie: "douluo",
        },
      });
      console.log("异步数据", data.data);
      this.listdata = data.data.result;
      console.log("listdata",this.listdata)
      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.listdata.length >= 2) {
        this.finished = true;
      }
    },
    //  onLoad() {
    //       setTimeout(() => {
    //         if (this.refreshing) {
    //           this.listdata = [];
    //           this.refreshing = false;
    //         }

    //         for (let i = 0; i < 10; i++) {
    //           this.listdata.push(this.listdata.length + 1);
    //         }
    //         this.loading = false;

    //         if (this.listdata.length >= 40) {
    //           this.finished = true;
    //         }
    //       }, 1000);
    //     },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      console.log(77);
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      // this.onLoad();
    },
    async baidurender() {
      this.baidulist = "";
      const res = await this.$request.jsonp(this.url);
      console.log("baidurender数据", res.g);
      // debugger;
      $.ajax({
        url: "https://www.baidu.com/sugrec",
        // 用jsonp跨域发送请求百度数据一定要写下面这两个东西
        jsonpCallback: "callback",
        dataType: "jsonp",
        data:
          "pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32218,1425,31672,32139,31254,32045,32230,32299,31639&wd=" +
          this.value +
          "&req=2&csor=5&_=1594630926722",
      }).then((data) => {
        // debugger;
        console.log(data.g);
        this.baidulist = data.g;
        // this.baidulist = res.g;
        console.log("百度数据", this.baidulist);
        // 当有数据时 因为是onchange触发 光标离开就触发 此时触发渲染函数render 把数据渲染展现

        // this.render()
      });
    },
    render() {
      // 在它渲染的时候获取input上的值放入到搜索历史里面

      console.log("搜索框里的值", this.value);
      this.historylist.push(this.value);
      console.log("搜索历史里的数据", this.historylist);
      $(".baidulist").css({
        display: "none",
      });
      console.log(666);
      // this.nvwanjielist = this.$store.state.bookcity.xihuanlist;
      //   this.listdata = this.$store.state.bookcity.douluolist;
      console.log(this.listdata);
      this.onLoad();
    },
  },

  async created() {
    // this.gaoliang();
    // console.log(this.listdata);
  },
  //   dom已经更新 数据更新了 但是没有更新到dom上
  // beforeUpdate() {
  //   this.gaoliang();
  // },

  updated() {
    console.log(1);
  },

  mounted() {
    this.$store.commit("displayTabbar", false);
    // window.jsonpCallback = (data) => {
    //   // console.log(data.token)
    //   // 调用获取后端token的方法
    //   this.getToken(data.token);
    // };
  },
  destroyed() {
    this.$store.commit("displayTabbar", true);
  },
};
</script>
<style lang="scss" scoped>
.active {
  color: #58bc58;
}
.searchheader {
  // width: 343px;
  height: 47px;
  // background-color: green;
}
.searchbody {
  padding: 0 16px;
}
.van-field__left-icon {
  line-height: 0px;
}
.van-cell {
  // background-color: #f5f5f5;
  // width: 298px;
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
.cancle {
  display: inline-block;
  width: 45px;
  height: 33px;
  line-height: 31px;
  text-align: center;
  color: #23b383;
  margin-top: 8px;
  font-weight: bold;
}
.list {
  width: 343px;
  height: 259px;
  //   background-color: pink;
  padding-top: 23px;
  h3 {
    width: 100%;
    height: 33px;
    padding-bottom: 16px;
    color: #333333;
    font-weight: bolder;
    font-size: 18px;
  }
  ul {
    width: 100%;
    height: 202px;
    padding-bottom: 6px;
    li {
      // 换成行内 不够就换下一行
      display: inline-block;
      background: #f5f5f5;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 14px;
      margin: 0 12px 12px 0;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.searchhistory {
  width: 343px;
  min-height: 108px;
  padding-bottom: 16px;
  h6 {
    height: 33px;
    font-size: 18px;
    color: #333333;
    font-weight: bold;
    padding-bottom: 16px;
    span {
      color: #23b383;
      float: right;
    }
  }
  ul {
    width: 100%;
    min-height: 45px;
    padding-bottom: 6px;
    li {
      // 换成行内 不够就换下一行
      display: inline-block;
      background: #f5f5f5;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 14px;
      margin: 0 12px 12px 0;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

.listdata {
  width: 343px;
  min-height: 60px;
  //   background-color: yellow;

  .lili {
    width: 100%;
    height: 159px;
    // background-color: orange;
    img {
      float: left;
      width: 107px;
      height: 143px;
    }
    .fontt {
      float: right;
      width: 190px;
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
  ul {
    // width: 343px;
    height: 100%;
    // background-color: pink;
    li {
      // width: 343px;
      height: 159px;
      // background-color: orange;
      img {
        float: left;
        width: 100%;
        height: 143px;
      }
      .fontt {
        float: right;
        // width: 223px;
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
    // color: black;
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
    .active {
      color: red;
    }
  }
  .tit span {
    width: 42px;
    height: 22px;
    font-size: 14px;
    color: #23b383;
    float: right;
  }
}
.baidulist {
  // width: 343px;
  min-height: 200px;
  // background-color: pink;
  li {
    width: 100%;
    height: 41px;
    // background: rgba(90, 90, 90,0.3);
    color: #333;
    font-size: 17px;
    padding: 14px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-bottom: 1px solid #333;
  }
}
</style>
