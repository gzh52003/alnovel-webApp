<template>
  <div class="myVip">
    <div class="vipContainer">
      <div class="vipHeader">
        <div class="userInfo">
          <div class="avatar">
            <img
              :src="!auth()===true ? 'profile/defaultprofile.png':'profile/defaultLoginAvatar.png'"
              alt="默认未登录头像"
            />
          </div>
          <div class="user">
            <p class="authName">{{!auth()===true?'西伯利亚二哈':` ${$store.state.username} 您好！`}}</p>
            <p class="desc">
              <van-icon name="vip-card-o" size="20px" color="#cca985"></van-icon>开通会员，海量小说免费读
            </p>
          </div>
        </div>

        <div class="cardBox">
          <div class="noneVip">
            <div class="tip">尚未开通会员</div>
            <div class="openButton">
              <span>立即开通</span>
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="titleBar">
          <p>会员权益</p>
          <p>全部特权</p>
        </div>
        <div class="privilege">
          <ul class="list">
            <li class="bookstore">
              <div>
                <img src="profile/desc.svg" alt />
              </div>
              <p>包月书库</p>
            </li>
            <li class="discount">
              <div>
                <img src="profile/discount.svg" alt />
              </div>
              <p>购买折扣</p>
            </li>
            <li class="update">
              <div>
                <img src="profile/vip.svg" alt />
              </div>
              <p>尊贵身份</p>
            </li>
            <li class="superPrivilege">
              <div>
                <img src="profile/privilege.svg" alt />
              </div>
              <p>超级特权</p>
            </li>
          </ul>
        </div>
        <!-- 为你推荐 -->
        <div class="recommendBook">
          <div class="recTitle">
            <p>为你推荐</p>
            <span>换一换</span>
          </div>
          <div class="bookbox">
            <ul class="bookList">
              <li class="bookItem">
                <div class="itemLeft">
                  <img src="profile/recommend/20200905.jpg" alt />
                </div>
                <div class="itemRight">
                  <h3>诸天帝尊</h3>
                  <p>洛星：不是跟你们吹啊，自觉醒的那天起......管他什么妖孽天才，小爷皆是最强王者，没有之一</p>
                  <p>
                    <span class="auth">2翻了</span>
                    <span class="classify">玄幻</span>
                  </p>
                </div>
              </li>
              <li class="bookItem">
                <div class="itemLeft">
                  <img src="categoryImg/typeImg/female/dushi/1105497944585.jpg" alt />
                </div>
                <div class="itemRight">
                  <h3>至尊妖神</h3>
                  <p>一个夏日的雨夜，本以为是一段奇缘，不曾想却惹上了一身麻烦，更可怕的是，竟然落入了一个精心打造的圈套，让他陷入了前所未有的危机之中......没根基，没靠山，没人脉，没资源，一个农村走出来的打工者，一步步走向人生的巅峰</p>
                  <p>
                    <span class="auth">98翻了</span>
                    <span class="classify">玄幻</span>
                  </p>
                </div>
              </li>
              <li class="bookItem">
                <div class="itemLeft">
                  <img src="categoryImg/typeImg/female/dushi/1170488003989.jpg" alt />
                </div>
                <div class="itemRight">
                  <h3>最强倒插门</h3>
                  <p>三年前，孤儿叶伟为保女友肚中孩子顶罪入狱，在狱中偶遇神秘老人拜师学艺。三年后，叶伟回归继承神秘老人不可想象的巨大财富，就连首富九爷都对他俯首称臣。掌控万亿财富的他，暗暗发誓：从此，欲夺我妻者亡，欲伤我子者死。</p>
                  <p>
                    <span class="auth">666翻了</span>
                    <span class="classify">都市</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottomInfo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
Vue.use(Icon);
export default {
  methods: {
    auth() {
      return this.$store.state.auth;
    },
  },
  mounted() {
    this.$store.commit("showTabbar", false);
  },
  destroyed() {
    this.$store.commit("showTabbar", true);
  },
  created() {
    // this.getUserInfo();
    this.$store.commit("getUserInfo");
  },
};
</script>

<style scoped lang="scss">
.vipContainer {
  .vipHeader {
    height: 152px;
    width: 100%;
    // background: pink;
  }
}
.userInfo {
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0;
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user {
    flex: 1;
    margin-left: 10px;
    .authName {
      color: rgb(143, 77, 77);
      font-size: 16px;
      font-weight: 600;
      margin-top: 7px;
    }
    .desc {
      display: flex;
      align-items: center;
      margin-top: 7px;
      color: #cca985;
      font-size: 14px;
    }
  }
}
.cardBox {
  width: 100%;
  height: 60px;
  margin-top: 16px;
  padding: 8 16px 0;
  // background:rgba(0,0,0);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(#fff, #e6e6e6);

  .noneVip {
    width: 343px;
    height: 52px;
    background: pink;
    background: url("/profile/vip-none.png");
    background-position: 0, 0;
    background-size: cover;
    display: flex;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    .tip {
      width: 235px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      line-height: 52px;
    }
    .openButton {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      font-size: 14px;
      color: #fff;
      // line-height: 52px;
      // text-align: right;
    }
  }
}

::v-deep .van-icon {
  font-size: 16px;
}

.box {
  padding: 0 16px;
  .titleBar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin: 24px 0 12px 0;
    p {
      &:nth-child(1) {
        font-size: 18px;
        line-height: 18px;
        color: #000;
      }
      &:nth-child(2) {
        font-size: 16px;
        line-height: 16px;
        font-weight: 600;
        color: #cca985;
      }
    }
  }
  .privilege {
    .list {
      display: flex;
      justify-content: space-evenly;
      li {
        // background: pink;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 0;
        div {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f0f0f0;
          opacity: 0.6;
          margin-bottom: 9px;
          display: flex;
          img {
            width: 30px;
            height: 30px;
            margin: auto;
            opacity: 0.3;
          }
        }
        p {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  .recommendBook {
    .recTitle {
      display: flex;
      justify-content: space-between;
      margin: 24px 0 16px 0;
      p {
        font-size: 18px;
        height: 20px;
        line-height: 20px;
      }
      span {
        color: #cca985;
      }
    }
    .bookbox {
      .bookList {
        .bookItem {
          width: 100%;
          height: 160px;
          // background: pink;
          display: flex;
          .itemLeft {
            width: 107px;
            height: 143px;
            background: #ccc;
            display: flex;
            margin: 8px 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .itemRight {
            flex: 1;
            margin: 16px 0 0 12px;
            h3 {
              font-size: 16px;
              line-height: 18px;
            }
            p {
              &:nth-child(2) {
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 14px;
                margin: 15px 0;
              }
              &:nth-child(3) {
                margin-top: 30px;
                height: 42px;
                display: flex;
                justify-content: space-between;
                .auth {
                  color: #999;
                }
                .classify {
                  height: 16px;
                  background: #fff;
                  padding: 0 5px;
                  margin-right: 5px;
                  border-radius: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>