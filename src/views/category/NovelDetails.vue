<!--  -->
<template>
  <div class="novel-wrap">
    <div class="books-info">
      <dl>
        <dt>
          <img src alt />
        </dt>
        <dd>
          <h3>我是小说</h3>
          <p>我是小说简介</p>
          <div class="recoment-novel">
            <span>连载</span>
            <span>33万字</span>
            <span>0.5书豆/千字</span>
          </div>
        </dd>
      </dl>
    </div>
    <div class="titlebar">内容简介</div>
    <div class="books-desc">
      <p class @click="showAll" :class="isShowAll?'showAll':'books-desc-con'">
        古老的传说逐渐远去，蒸汽炉中燃烧的火焰将旧时代彻底焚化，然而狼人、吸血鬼、诡异、妖怪正在在黑暗中磨砺着自己的爪牙，暗中窥伺着世界。
        王洛意外的来到了这个世界，同时还带着献祭系统，他吹响了超凡的号角，呼唤着远古的存在加快了苏醒，走出了一条属于传奇的道路。
        <span
          :class="isShowAll?'books-sanjiao-box2':'books-sanjiao-box'"
        >
          <van-icon
            class="books-sanjiao"
            @click="showAll"
            :name="isShowAll?'arrow-down':'arrow-up'"
          />
        </span>
      </p>
    </div>
    <div class="books-tag">
      <span>穿越</span>
      <span>穿越</span>
    </div>

    <!-- 最新 -->
    <div class="books-news">
      <h4>最新</h4>
      <span>622，新的啊！</span>
      <van-icon class="arrow-c" name="arrow" />
      <div class="line"></div>
    </div>
    <!-- 目录 -->
    <div class="books-catalog books-news">
      <h4>目录</h4>
      <span>622，新的啊！</span>
      <van-icon class="arrow-c" name="arrow" />
      <div class="line"></div>
    </div>

    <!-- 评论 -->
    <div class="comment-title">
      <h4>评论</h4>
      <span>写评论</span>
    </div>
    <div class="comment-box">
      <div class="comment-item">
        <dl>
          <dt>
            <img src="../../../public/categoryImg/typeImg/male/2017091318311993.png" alt />
          </dt>
          <dd>
            <h4>我是评论人</h4>
            <p>终于看完了！想起刚刚看这部漫画的时候，我看见评论里面有人说不够看什么的，我就觉得，不是很够看嘛？但是，我今天看完了，发现，真的——不！够！看！啊！</p>
            <div class="commment-info">
              <time>2018.7.6 21:58</time>
              <div class="dianzan-info">
                <span>
                  <van-icon name="chat-o"></van-icon>
                  <i>24</i>
                </span>
                <span>
                  <van-icon name="good-job-o"></van-icon>
                  <i>0</i>
                </span>
              </div>
            </div>
          </dd>
        </dl>
      </div>
      <button class="look-All">查看全部评论(598条)</button>
    </div>

    <!-- 相关推荐 -->
    <div class="about-recomemnt-title">
      <h4>相关推荐</h4>
      <span>换一换</span>
    </div>
    <div class="about-recomemnt-info">
      <div class="about-recomemnt-item">
        <img src="../../../public/categoryImg/typeImg/male/2017091318311993.png" alt />
        <h5>豪门蜜爱，重生天价女王</h5>
        <div>我是作者</div>
      </div>
    </div>

    <!-- 图书信息 -->
    <div class="novel-info-title titlebar">图书信息</div>
    <div class="novel-copyright">
      <dl>
        <dt>版权来源</dt>
        <dd>书旗小说</dd>
      </dl>
      <dl>
        <dt>免费说明</dt>
        <dd>本书数字版权由二层楼提供，授权本软件使用、制作、发行，若包含不良信息，请及时告知客服。</dd>
      </dl>
    </div>

    <!-- 底部按钮 -->
    <div v-show="!isShowTabbar" class="options-bar">
      <div class="options-btn">
        <button>加书架</button>
        <button>开始阅读</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NovelDetails",
  data() {
    return {
      isShowAll: false,
    };
  },
  created() {
    console.log("我是显示", this.$store.state.isShowTabbar);
  },
  computed: {
    isShowTabbar() {
      return this.$store.state.isShowTabbar;
    },
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
  methods: {
    showAll() {
      this.isShowAll = !this.isShowAll;
    },
  },
  components: {},
};
</script>

<style  lang="scss" scoped>
.novel-wrap {
  padding: 30px 16px 72px 16px;
  background: #cccccc;
  background: #fff;

  .books-info {
    height: 144px;
    width: 100%;
    background: yellow;
    dl {
      display: flex;
      width: 100%;
      height: 100%;

      dt {
        margin-right: 1%;
        width: 32%;
        height: 100%;
        background: orangered;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        width: 67%;
        height: 100%;
        background: #000;
        h3 {
          line-height: 28px;
          font-size: 19px;
          color: #333;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
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
          font-size: 14px;
          color: #999;
        }
        .recoment-novel {
          display: flex;
          margin-top: 60px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          word-break: break-all;
          font-size: 13px;

          span:nth-child(2) {
            margin: 0 5px;
          }
        }
      }
    }
  }
  //内容简介
  .titlebar {
    margin: 50px 0 10px 0;
    font-size: 18px;
    line-height: 20px;
    height: 20px;
    font-weight: 900;
  }
  //小说简介
  .books-desc {
    position: relative;
    .books-desc-con {
      position: relative;
      font-size: 14px;
      line-height: 22px;
      max-height: 66px;
      overflow: hidden;
    }
    .books-sanjiao-box {
      position: absolute;
      right: 0;
      bottom: 2px;
      width: 16px;
      height: 16px;
      background: rgba(255, 255, 255, 0.6);
    }
    .books-sanjiao-box2 {
      width: 16px;
      height: 16px;
      background: rgba(255, 255, 255, 0.6);
    }
    .showAll {
      position: relative;
      font-size: 14px;
      line-height: 22px;
      overflow: hidden;
    }
  }
  //小说tag
  .books-tag {
    margin: 5px 0;
    padding: 0 12px;
    height: 28px;
    background: #ddd;

    span {
      border-radius: 2px;
      color: #333;
      font-size: 13px;
      background: #f5f5f5;
      line-height: 28px;
      padding: 0 12px;
      margin: 0 8px 10px 0;
      display: inline-block;
    }
  }
  // 最新
  .books-news {
    position: relative;
    display: flex;
    height: 54px;
    line-height: 54px;

    h4 {
      width: 29%;
      font-size: 18px;
    }
    span {
      text-align: right;
      width: 71%;
    }
    .arrow-c {
      line-height: 54px;
    }
    .line {
      position: absolute;
      bottom: 2px;
      width: 100%;
      height: 0.2px;
      background: #bbb;
      transform: scaleY(0.5);
    }
  }
  //目录
  .books-catalog {
    height: 54px;
  }
  //评论 头部
  .comment-title {
    display: flex;
    height: 56px;
    line-height: 56px;
    font-weight: 700;

    h4 {
      font-size: 18px;
      width: 29%;
    }
    span {
      text-align: right;
      width: 71%;
      color: #23b383;
    }
  }
  // 评论 内容
  .comment-box {
    padding: 1px;
    .comment-item {
      padding-bottom: 8px;
      dl {
        display: flex;
        dt {
          width: 7%;
          height: 100%;
          img {
            margin-top: 4px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
        }
        dd {
          padding: 5px 0 0 8px;
          width: 93%;
          height: 100%;

          h4 {
            line-height: 20px;
            font-size: 15px;
            color: #333;
          }
          p {
            padding-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            word-break: break-all;
            word-wrap: break-word;
            box-sizing: content-box;
            max-height: 60px;
            text-align: left;
            text-align: justify;
            word-break: break-all;
          }
          .commment-info {
            display: flex;
            margin-top: 25px;
            padding: 10px 10px 0 5px;
            justify-content: space-between;
            color: #999;
            font-size: 12px;
            line-height: 16px;

            .dianzan-info {
              span {
                margin: 0 5px;
                i {
                  padding-left: 4px;
                }
              }
            }
          }
        }
      }
    }
  }
  //查看全部评论
  .look-All {
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    color: #23b383;
    background: #fff;
    font-size: 14px;
    border: none;
  }
  //相关推荐
  .about-recomemnt-title {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 8px;
    height: 56px;
    line-height: 56px;
    background: yellow;
    h4 {
      font-size: 18px;
      height: 20px;
    }
    span {
      font-size: 14px;
      height: 20px;
      display: inline-block;
      vertical-align: middle;
      color: #23b383;
    }
  }
  .about-recomemnt-info {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    height: 193px;
    width: 100%;

    .about-recomemnt-item {
      width: 32.6%;
      background: yellow;
      img {
        width: 100%;
        height: 145px;
      }
      h5 {
        font-size: 13px;
        line-height: 16px;
        height: 16px;
        font-weight: 700;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      div {
        font-size: 13px;
        line-height: 18px;
        color: #999;
      }
    }
  }
  //图书信息
  .novel-info-title {
    margin-top: 8px;
    height: 56px;
    line-height: 56px;
  }
  .novel-copyright {
    height: 72px;
    dl {
      display: flex;
      dt {
        width: 17%;
        color: #999;
        font-size: 12px;
        line-height: 16.5px;
        display: block;
        margin-right: 12px;
      }
      dd {
        width: 83%;
        color: #333;
        font-size: 12px;
        line-height: 16.5px;
      }
      &:nth-child(1) {
        margin-bottom: 12px;
      }
    }
  }
  //底部选项
  .options-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    width: 96%;
    margin-left: 2%;
    height: 49px;
    line-height: 49;

    .options-btn {
      display: flex;
      width: 100%;
      height: 100%;
      background: #fff;

      button {
        flex: 1;
        font-size: 14px;
        border: none;

        &:nth-child(1) {
          color: #23b383;
        }

        &:nth-child(2) {
          margin: 3px;
          border-radius: 5px;
          background: #23b383;
          color: #fff;
        }
      }
    }
  }
}
</style>