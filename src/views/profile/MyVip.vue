<template>
  <div class="myVip">
    <div class="vipContainer">
      <div class="vipHeader">
        <div class="userInfo">
          <div class="avatar">
            <img src="profile/defaultprofile.png" alt />
          </div>
          <div class="user">
            <p class="authName">西伯利亚二哈</p>
            <p class="desc">
              <van-icon name="vip-card-o" size="20px" color="#cca985"></van-icon>开通会员，海量小说免费读
            </p>
          </div>
        </div>

        <div class="cardBox">
          <div class="noneVip">
            <div class="tip">尚未开通会员</div>
            <div class="openButton">立即开通></div>
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
              <span>
                <img src="profile/desc.svg" alt />
              </span>
              <p>包月书库</p>
            </li>
            <li class="discount">
              <span>
                <img src="profile/discount.svg" alt />
              </span>
              <p>购买折扣</p>
            </li>
            <li class="update">
              <span>
                <img src="profile/vip.svg" alt />
              </span>
              <p>尊贵身份</p>
            </li>
            <li class="superPrivilege">
              <span>
                <img src="profile/privilege.svg" alt />
              </span>
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
                    <span class="classify">东方玄幻</span>
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
export default {};
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
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user {
    flex: 1;
    margin-left: 10px;
    .authName {
      color: #000;
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
      width: 215px;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
      line-height: 52px;
    }
    .openButton {
      width: 80px;
      font-size: 14px;
      color: #fff;
      line-height: 52px;
      text-align: right;
    }
  }
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
        span {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ccc;
          opacity: 0.6;
          margin-bottom: 9px;
          display: flex;
          img {
            width: 32px;
            height: 32px;
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
      span{
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
                .auth{
                  color: #999;
                }
                .classify{
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