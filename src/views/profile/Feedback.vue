<template>
  <div class="feedBack">
    <div class="homeSearch">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft" />
      <van-search v-model="value" placeholder="请输入搜索问题关键词" input-align="center"/>
    </div>
    <div class="banner">
      <img src="profile/banner.png" alt />
    </div>
    <div class="tagBox">
      <div class="tagWrap" v-for="tag in tagList" :key="tag.title">
        <div class="tagLeft">
          <img :src="tag.imgurl" alt />
          <span>{{tag.title}}</span>
        </div>
        <div class="tagRight">
          <ul class="list">
            <li
              class="listItem text_ellipsis"
              v-for="item in tag.questions"
              :key="item.quest"
              @click="getAnswer(item.id,item.quest)"
            >{{item.quest}}</li>
            <!-- <li class="listItem">2</li>
            <li class="listItem">3</li>
            <li class="listItem">4</li>-->
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="serve">
        <img src="profile/online.svg" alt />
        <p>在线客服</p>
      </div>
      <div class="feedback">
        <img src="profile/feedback.svg" alt />
        <p>意见反馈</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Search } from "vant";

Vue.use(NavBar);
Vue.use(Search);

export default {
  data() {
    return {
      value:'',
      tagList: [
        {
          imgurl: "profile/feedback/iconfire.png",
          title: "热点问题 >",
          questions: [
            { id: 1, quest: "小程序账号能在书城绑定" },
            { id: 2, quest: "阅读获得的能量如何在支付宝查看" },
            { id: 3, quest: "蚂蚁森林阅读活动,如何参加" },
            { id: 4, quest: "账号注销流程" },
          ],
        },
        {
          imgurl: "profile/feedback/iconavatar.jpg",
          title: "账号密码 >",
          questions: [
            { id: 11, quest: "账号换绑" },
            { id: 12, quest: "账号注销" },
            { id: 13, quest: "登录方式" },
          ],
        },
        {
          imgurl: "profile/feedback/iconbook.jpg",
          title: "功能/阅读 >",
          questions: [
            { id: 120, quest: "调出设置" },
            { id: 121, quest: "调节字体大小" },
            { id: 122, quest: "怎么设置字体" },
            { id: 123, quest: "怎么加书架" },
            { id: 124, quest: "删除书架" },
            { id: 125, quest: "书架书籍" },
          ],
        },
        {
          imgurl: "profile/feedback/iconshopping.png",
          title: "充值/消费 >",
          questions: [
            { id: 51, quest: "充值成功未到账" },
            { id: 52, quest: "如何充值" },
            { id: 53, quest: "书豆的作用" },
            { id: 54, quest: "充值比例" },
          ],
        },
        {
          imgurl: "profile/feedback/iconvip.jpg",
          title: "会员相关 >",
          questions: [
            { id: 1111, quest: "普通包月特权" },
            { id: 1112, quest: "超级会员特权" },
            { id: 1113, quest: "包月时长" },
            { id: 1114, quest: "会员看书要收费吗？" },
          ],
        },
      ],
    };
  },
  methods: {
    getAnswer(id, quest) {
      this.$router.push({
        name: "Answer",
        query: {
          id,
          quest,
        },
      });
      console.log(this.tagList);
    },
    onClickLeft() {
      this.$router.push("/profile");
    },
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
};
</script>

<style scoped lang="scss">
.feedBack {
  width: 100%;
  height: 100%;
}
// body {
//   background: #f5f5f5;
//   background: pink;
// }

.homeSearch {
  height: 50px;
  display: flex;
  position: relative;
  // .search {
  //   height: 30px;
  //   width: 345px;
  //   border-radius: 15px;
  //   margin: auto;
  //   background-color: rgba(0, 0, 0, 0.1);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  span {
    color: #999;
    font-size: 14px;
  }
  // }
}
::v-deep .van-search {
  position: absolute;
  right: 0;
  padding: 0;
  top: 8px;
  width: 300px;
  margin-right: 30px;
}
// ::v-deep .van-field__left-icon{
//   position: absolute;
//   left: 50px;
// }
::v-deep .van-nav-bar__left {
  width: 100px;
}
::v-deep .van-icon {
  color: var(--color-text);
}
::v-deep .van-nav-bar__text {
  color: var(--color-text);
}
.banner {
  width: 100%;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
  }
}
.tagBox {
  background: #fff;
}

.tagWrap {
  display: flex;
  justify-content: space-between;
  .tagLeft {
    width: 92px;
    // height: 84px;
    // background: pink;
    border-right: 2px solid #f5f5f5;
    border-bottom: 2px solid #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 30px;
      height: 30px;
      margin-bottom: 5px;
    }
    span {
      font-size: 14px;
    }
  }
  .tagRight {
    width: 283px;
    // height: 84px;
    // background: blue;
    padding: 7px 0 7px 25px;
    border-bottom: 2px solid #f5f5f5;
    .list {
      display: flex;
      // flex-shrink: 0;
      flex-wrap: wrap;
      .listItem {
        width: 112px;
        height: 20px;
        margin: 7px 0;
        overflow: hidden;
        font-size: 14px;
        margin-right: 5px;
      }
    }
  }
}
.footer {
  position: relative;
  bottom: -24px;
  left: 0;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .serve,
  .feedback {
    display: flex;
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
}
</style>