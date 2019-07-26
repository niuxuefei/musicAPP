<template>
  <div class="hjhmine">
    <div class="zhuangtai"></div>
    <div class="hheadnav">
      <router-link  class="hsong" to="/rightpage"></router-link>
      <ul>
        <li>
          <router-link to="/my">我的</router-link>
        </li>
        <li>
          <a href="#">音乐</a>
        </li>
        <li>
          <router-link to="/attention">发现</router-link>
        </li>
      </ul>
      <router-link to="/search" class="hsearch"></router-link>
    </div>
    <div class="hbanner">
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
          <li class="swiper-slide"><img src="./../assets/mymusic/home-banner-1.png.png" alt=""></li>
        </ul>
      </div>
    </div>
    <ul class="hlistb">
      <li>
        <a href="#">
          <img src="./../assets/mymusic/home-icon-3.png@3x.png">
          <span>推荐</span>
        </a>
      </li>
      <li>
        <router-link to="/sgxLeaderboard">
          <img src="./../assets/mymusic/home-icon-4.png@3x.png">
          <span>排行</span>
       </router-link>
      </li>
      <li>
        <router-link to="/special">
          <img src="./../assets/mymusic/home-icon-5.png@3x.png">
          <span>专辑</span>
        </router-link>
      </li>
      <li>
        <router-link to="/sgxview">
          <img src="./../assets/mymusic/home-icon-6.png@3x.png">
          <span>电台</span>
        </router-link>
      </li>
      <li>
        <a href="#">
          <img src="./../assets/mymusic/home-icon-7.png@3x.png">
          <span>歌单</span>
        </a>
      </li>
    </ul>
    <div class="hjhnew">
      <h1>
        最新单曲
        <span class="h_left"></span>
      </h1>
      <ul>
        <li>
          <div class="hjhimg">
            <img src="../assets/mymusic/home-banner-2.png@3x.png" >
          </div>
          <p class="hjhsname">"Señorita</p>
          <p class="hjhsuser">Shawn Mendes…</p>
        </li>
        <li>
          <div class="hjhimg">
            <img src="../assets/mymusic/home-banner-3.png@3x.png" >
          </div>
          <p class="hjhsname">大象之歌</p>
          <p class="hjhsuser">周笔畅</p>
        </li>
        <li>
          <div class="hjhimg">
            <img src="../assets/mymusic/home-banner-4.png@3x.png" >
          </div>
          <p class="hjhsname">那就这样吧</p>
          <p class="hjhsuser">蔡程昱</p>
        </li>
      </ul>
    </div>
    <div class="hjhnew">
      <h1>
        最新专辑
        <span class="h_left"></span>
      </h1>
      <ul>
        <li>
          <div class="hjhimg">
            <img src="../assets/mymusic/home-banner-5.png@3x.png" >
          </div>
          <p class="hjhsname">"Señorita</p>
          <p class="hjhsuser">Shawn Mendes…</p>
        </li>
        <li>
          <div class="hjhimg">
             <img src="../assets/mymusic/home-banner-6.png@3x.png" >
          </div>
          <p class="hjhsname">大象之歌</p>
          <p class="hjhsuser">周笔畅</p>
        </li>
        <li>
          <div class="hjhimg">
             <img src="../assets/mymusic/home-banner-7.png@3x.png" >
          </div>
          <p class="hjhsname">那就这样吧</p>
          <p class="hjhsuser">蔡程昱</p>
        </li>
      </ul>
    </div>
    <div class="hjhnew">
      <h1>
        MV精选
        <span class="h_left"></span>
      </h1>
      <ul>
        <li>
          <div class="hjhimg">
              <img src="../assets/mymusic/home-banner-8.png@3x.png" >
          </div>
          <p class="hjhsname">"Señorita</p>
          <p class="hjhsuser">Shawn Mendes…</p>
        </li>
        <li>
          <div class="hjhimg">
             <img src="../assets/mymusic/home-banner-9.png@3x.png" >
          </div>
          <p class="hjhsname">大象之歌</p>
          <p class="hjhsuser">周笔畅</p>
        </li>
        <li>
          <div class="hjhimg">
              <img src="../assets/mymusic/home-banner-10.png@3x.png" >
          </div>
          <p class="hjhsname">那就这样吧</p>
          <p class="hjhsuser">蔡程昱</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      loop: true
    });
  },
  components: {}
};
</script>

<style scoped lang='less'>
.hjhmine {
  padding-bottom: .98rem;
  background:#000;
  color: #fff;
  overflow: auto;
  .zhuangtai {
    height: 0.37rem;
  }
  .hheadnav {
    padding: 0.25rem 0.32rem 0 0.34rem;
    display: flex;
    flex-direction: row;
    .hsong {
      display: block;
      width: 0.32rem;
      height: 0.36rem;
      background: url("./../assets/mymusic/home-icon-1.png@3x.png") no-repeat
        center center;
      background-size: cover;
    }
    ul {
      display: flex;
      flex-direction: row;
      width: 4.38rem;
      justify-content: space-between;
      margin: 0 0 0 1.2rem;
      li {
        text-align: center;
        width: 0.8rem;
        padding-bottom: 0.24rem;
        a {
          display: block;
          font-size: 0.32rem;
          color: #fff;
          line-height: 0.45rem;
        }
        a:hover {
          background: linear-gradient(
            right,
            rgb(246, 105, 52),
            rgb(254, 44, 95)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        &:nth-child(2) {
          border-bottom: 0.04rem solid rgb(247, 91, 43);
          a {
            background: linear-gradient(
              right,
              rgb(246, 105, 52),
              rgb(254, 44, 95)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
    .hsearch {
      display: block;
      width: 0.42rem;
      height: 0.42rem;
      margin-left: 0.84rem;
      background: url("./../assets/mymusic/home-icon-2.png@3x.png") no-repeat
        center center;
      background-size: cover;
    }
  }
  .hbanner {
    .swiper-container {
      ul {
        background: #fff;
        li {
          font-size: 3rem;
          height: 3.47rem;
          background: #ccc;
          img{
            width:100%;
          }
        }
      }
    }
  }
  .hlistb {
    display: flex;
    margin: 0.26rem 0 0.2rem 0;
    padding: 0 0.05rem;

    li {
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.28rem;
        height: 100%;
        color: #fff;
        img {
          width: 0.75rem;

          margin-bottom: 0.2rem;
        }
      }
    }
  }
  .hjhnew {
    padding: 0 0.31rem;
    margin-bottom: .34rem;
    h1 {
      font-size: 0.32rem;
      .h_left {
        display: block;
        width: 0.14rem;
        height: 0.24rem;
        margin-right: 0.05rem;
        margin-top: .05rem;
        float: right;
        background: url("./../assets/mymusic/home-icon-8.png@2x.png") no-repeat
          center center;
        background-size: cover;
      }
    }
    ul {
      margin-top: 0.24rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      li {
        .hjhimg {
          width: 2.12rem;
          height: 1.8rem;
          margin-bottom: 0.25rem;
          border-radius: 0.2rem;
          overflow: hidden;
          background: red;
          img {
            width: 2.12rem;
            height: 1.8rem;
          }
        }
        .hjhsname {
          font-size: 0.28rem;
          height: .27rem;
          color: #fff;

        }
        .hjhsuser {
          margin-top: 0.11rem;
          color: rgb(204,204,204);
        }
      }
    }
  }
}
</style>
