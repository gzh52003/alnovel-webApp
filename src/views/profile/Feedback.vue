<template>
  <div class="feedBack">
    <div class="homeSearch">
      <a href="javascript:;" class="search">
        <div>
          <span>遇到问题先搜一搜</span>
        </div>
      </a>
    </div>
    <div class="banner">
      <img src="profile/banner.png" alt />
    </div>
    <div class="tagBox">
      <div class="tagWrap" v-for="tag in tagList" :key="tag.title">
        <div class="tagLeft">
          <img :src="tag.imgurl" alt="">
          <span>{{tag.title}}</span>
        </div>
        <div class="tagRight">
          <ul class="list">
            <li
              class="listItem text_ellipsis"
              v-for="item in tag.questions"
              :key="item.quest"
            >{{item.quest}}</li>
            <!-- <li class="listItem">2</li>
            <li class="listItem">3</li>
            <li class="listItem">4</li>-->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [
        {
          imgurl: "profile/feedback/iconfire.png",
          title: "热点问题 >",
          questions: [
            { quest: "小程序账号能在书城" },
            { quest: "阅读获得的能量如何在" },
            { quest: "蚂蚁森林阅读活动" },
            { quest: "账号注销流程" },
          ],
        },
        {
          imgurl: "profile/feedback/iconavatar.jpg",
          title: "账号密码 >",
          questions: [
            { quest: "账号换绑" },
            { quest: "账号注销" },
            { quest: "登录方式" },
          ],
        },
        {
          imgurl: "profile/feedback/iconbook.jpg",
          title: "功能/阅读 >",
          questions: [
            { quest: "调出设置" },
            { quest: "调节字体大小" },
            { quest: "怎么设置字体" },
            { quest: "怎么加书架" },
            { quest: "删除书架" },
            { quest: "书架书籍" },
          ],
        },
        {
          imgurl: "profile/feedback/iconshopping.png",
          title: "充值/消费 >",
          questions: [
            { quest: "充值成功未到账" },
            { quest: "如何充值" },
            { quest: "书豆的作用" },
            { quest: "充值比例" },
          ],
        },
        {
          imgurl: "profile/feedback/iconvip.jpg",
          title: "会员相关 >",
          questions: [
            { quest: "普通包月特权" },
            { quest: "超级会员特权" },
            { quest: "包月时长" },
            { quest: "会员看书要收费" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
body {
  background: #f5f5f5;
  background: pink;
}

.homeSearch {
  height: 50px;
  display: flex;
  .search {
    height: 30px;
    width: 345px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #999;
      font-size: 14px;
    }
  }
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
  // background: #fff;
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
    img{
      width: 30px;
      height: 30px;
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
</style>