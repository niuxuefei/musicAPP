<template>
  <!-- <div style="background:black"> -->
  <div style="background: url(../../static/sgxLeaderboard/imgs/bgc.jpg) no-repeat" class="all">
    <header>
      <router-link to="/hjhMUsic">
        <span>
          <img src="../../static/sgxLeaderboard/imgs/right_icon@2x.png@2x.png" alt>
        </span>
      </router-link>
      <span>电台</span>
      <a href="#">
        <span>
          <img src="../../static/sgxLeaderboard/imgs/more_icon@2x.png@2x.png" alt>
        </span>
      </a>
    </header>
    <div class="nav">
      <ul>
        <li>
          <a href="#">
            <img src="../../static/sgxLeaderboard/imgs/icon1@2x.png@2x.png" alt>
            <div class="ripple">
              <span class="hot">热门</span>
            </div>
          </a>

          <a href="#">
            <img src="../../static/sgxLeaderboard/imgs/img2@2x.jpg.png" alt>
            <div class="ripple">
              <img src="../../static/sgxLeaderboard/imgs/icon2@2x.png@2x.png" alt>
              <span>深夜</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/sgxLeaderboard/imgs/img3@2x.jpg.png" alt>
            <div class="ripple">
              <img src="../../static/sgxLeaderboard/imgs/icon3@2x.png@2x.png" alt>
              <span>情感</span>
            </div>
          </a>

          <a href="#">
            <img src="../../static/sgxLeaderboard/imgs/img4@2x.jpg.png" alt>
            <div class="ripple">
              <img src="../../static/sgxLeaderboard/imgs/icon4@2x.png@2x.png" alt>
              <span>主题</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../static/sgxLeaderboard/imgs/img5@2x.jpg.png" alt>
            <div class="ripple">
              <img src="../../static/sgxLeaderboard/imgs/icon5@2x.png@2x.png" alt>
              <span>场景</span>
            </div>
          </a>
          <a href="#" class="rotate">
            <img src="../../static/sgxLeaderboard/imgs/img6@2x.jpg.png" alt>
            <div class="ripple">
              <img src="../../static/sgxLeaderboard/imgs/icon6@2x.png@2x.png" alt>
              <span>语种</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import setRem from "../../static/sgxLeaderboard/rem.js";
import Axios from "../../node_modules/axios/dist/axios.js";
// import Axios from "../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    // setRem.set();
    // window.onresize = setRem.set;
    
  },
  components: {}
};
</script>

<style lang='less'>
@import "../../static/sgxLeaderboard/common.css";
* {
  margin: 0;
  padding: 0;
}

ul{
  list-style: none;
  margin:0;
  padding: 0;
}
.all{
  overflow: hidden;
}
header {
  margin-top: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.05rem 0.33rem 0 0.33rem;
  font-size: 0;
  span:nth-child(1),
  span:nth-child(3) {
    width: 0.34rem;
    height: 0.34rem;
    img {
      margin: 0 auto;
      width: 0.34rem;
      height: 0.34rem;
    }
  }
  span:nth-child(2) {
    font-size: 0.34rem;
  }
}
.nav {
  height: 100%;
  padding-bottom: .3rem;
  ul {
    margin-top: 0.74rem;
    width: 100%;
    // padding: 0 0.3rem;

    li {
      width: 100%;
      height: 2.87rem;
      box-sizing: border-box;
      padding: 0 0.6rem;
      margin-bottom: 0.74rem;

      .hot {
        position: absolute;
        top: 1.55rem;
        left: 1.06rem;
        font-size: 0.33rem;
        color: white;
      }

      a {
        display: inline-block;
        width: 2.87rem;
        height: 2.87rem;
        position: relative;

        img {
          width: 2.87rem;
          height: 2.87rem;
        }
        div {
          font-size: 0;
          position: absolute;
          top: 0rem;
          left: 0rem;
          width: 2.87rem;
          height: 2.87rem;
          text-align: center;
          color: white;
          // background-color:rgba(255,255,255,.3);
          border-radius: 50%;

          // overflow: hidden;
          img {
            width: 0.4rem;
            height: 0.4rem;
            margin: 0.87rem auto 0.3rem auto;
          }
          span {
            font-size: 0.33rem;
          }
        }

        .ripple:after {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          //设置径向渐变
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.5) 12%,
            transparent 10.01%
          );
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.3s, opacity 0.5s;
        }

        .ripple:active:after {
          transform: scale(0, 0);
          opacity: 0.3;
          transition: 0s;
        }
      }
      a:nth-child(1) {
        float: left;
      }
      a:nth-child(2) {
        float: right;
      }
    }
  }
}
// .rotate{
//   transform-origin:center center;
//       transform: rotateZ(180deg);
//       transition: transform 0.2s
// }
</style>
