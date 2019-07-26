<template>
  <div class="box">
    <div class="top">
      <span><router-link to="/hjhMUsic"><</router-link></span>听歌识曲
    </div>
    <div class="discern">
      <a href="#">识别音乐</a>
      <a href="#">识别历史</a>
    </div>
    <div class="line">
      <img src="./img/curve@2x.png.png" alt="">
      <img src="./img/graph1@2x.png.png" alt="">
      <img src="./img/graph1@2x.png.png" alt="">
      <img src="./img/graph1@2x.png.png" alt="">
    </div>
    <div class="listen" :class="{'sport':lis}">
      <div class="out">
        <div class="pulse"></div>
        <div class="pulse1"></div>
        <div class="inner" @touchstart="fn()">
          <img src="./img/icon1@2x.png.png" alt="">
        </div>
      </div>
    </div>
    <div class="bottom" :class="{'circle':lis}">
      <ul>
        <li>
            <img src="./img/graph2@2x.png.png" alt="">
        </li>
        <li><img src="./img/graph2@2x.png.png" alt=""></li>
        <li><img src="./img/graph2@2x.png.png" alt=""></li>
      </ul>
    </div>

  </div>
</template>
<script>
    export default {
        name: "rightpage",
      data(){
          return{
            lis:false
          }
      },
      methods:{
        fn(){
          this.lis=!this.lis
        }
      }
    }
</script>

<style scoped lang="less">
  *{
    margin: 0;padding: 0;
  }

  .box{
    width: 100%;
    height: 100%;
    position: fixed;
    color: white;
    background: url("./img/bg.jpg");
    background-size: 100% 100%;
    z-index: 9999;
    .top{
      width: 100%;
      height: .88rem;
      line-height: .88rem;
      text-align: center;
      font-size: .36rem;
      overflow: hidden;
      margin-top: .5rem;
      span{
        position: absolute;
        left: .34rem;
        width: .32rem;
        height: .32rem;
        a{
          color: white;
        }
      }
    }
    .discern{
      font-size: .28rem;
      overflow: hidden;
      a{
        padding: .32rem .06rem .31rem .06rem;
        text-decoration: none;
        color: white;
      }
      a:nth-child(1){
        border-bottom: .04rem solid rgb(247,95,59);
        background: linear-gradient(to right, rgb(247,95,59), rgb(253,49,92));
        -webkit-background-clip: text;
        color: transparent;
        float: left;
        margin-left: 1.5rem;
      }
      a:nth-child(2){
        float: right;
        margin-right: 1.5rem;
      }
    }
    .line{
      position: relative;
      margin-top: 1.08rem;
      font-size: 0;
      img:nth-child(1){
        width: 6.84rem;
        height: 1.86rem;
        margin-left: .32rem;
      }
      img:nth-child(2){
        width: .56rem;
        height: .56rem;
        position: absolute;
        left: 1.63rem;
        top: -.25rem;
        animation: turn 2s 0s ease-in-out infinite;
      }
      img:nth-child(3){
        width: .56rem;
        height: .56rem;
        position: absolute;
        left: 3.48rem;
        top: 1.27rem;
        animation: turn 2s .5s ease-in-out infinite;
      }
      img:nth-child(4){
        width: .56rem;
        height: .56rem;
        position: absolute;
        left: 5.29rem;
        top: .23rem;
        animation: turn 2s 1s ease-in-out infinite;
      }
      @keyframes turn {
        0%{
          transform: scale(1)
        }
        50%{
          transform: scale(2)
        }
        100%{
          transform: scale(1)
        }
      }
    }
    .sport{
      .pulse{
        animation: warn 2s ease-out;
        animation-iteration-count: infinite;
      }
      .pulse1{
        animation: warn1 2s ease-out,ease-in;
        animation-iteration-count: infinite;
        animation-delay:2s
      }
    }
    .listen{
      width: 100%;
      margin: 1.28rem auto 1.20rem auto;
      position: relative;

      .out{
        height: 3.78rem;
        width: 100%;
        overflow: hidden;
        .inner{
          width: 1.58rem;
          height: 1.58rem;
          background: url("./img/round1@2x.png.png");
          background-size: 100%;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
          margin-top: 1.1rem;
          img{
            margin-top: .3rem;
            width: .6rem;
            height: .88rem;
            vertical-align: middle;
            z-index: 2;
          }
        }
        .pulse{
          position: absolute;
          width: 2.82rem;
          height: 2.82rem;
          left: 2.4rem;
          top: -.65rem;
          background: rgb(250,71,76);
          border-radius: 50%;
          z-index: 1;
          opacity: 0;
          margin-top: 1.1rem;
        }
        .pulse1 {
          position: absolute;
          width: 3.78rem;
          height: 3.78rem;
          left: 1.9rem;
          top: -1.15rem;
          margin-top: 1.1rem;
          background: rgb(250,71,76);
          border-radius: 50%;
          z-index: 1;
          opacity: 0;

        }
        @keyframes warn {
          0% {
            transform: scale(0);
            -webkit-transform: scale(0);
            opacity: 0.0;
          }
          25% {
            transform: scale(0.5);
            -webkit-transform: scale(0.5);
            opacity: 0.3;
          }
          50% {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0;
          }
        }
        @keyframes warn1 {
          0% {
            transform: scale(0);
            -webkit-transform: scale(0);
            opacity: 0.0;
          }
          25% {
            transform: scale(0.5);
            -webkit-transform: scale(0.5);
            opacity: 0.2;
          }
          50% {
            transform: scale(0.9);
            -webkit-transform: scale(0.9);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            -webkit-transform: scale(1);
            opacity: 0.0;
          }
        }
      }
    }
    .circle{
      li{
        animation: zhuan 3s linear infinite;
        img{
          animation: fzhuan 3s linear infinite;
        }
      }
    }
    .bottom{
      position: relative;
      width: 100%;
      ul{
        overflow: hidden;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 .32rem;
        box-sizing: border-box;
        li{
          list-style: none;
          width: 1.53rem;
          height: 1.53rem;
          padding:.26rem;
          background-size: 1.02rem 1.02rem;
          box-sizing: border-box;
          background: url('./img/1.png')no-repeat -0.07rem -.12rem;
          background-size: 1.45rem  1.45rem;
          background-clip: padding-box;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          img{
           width: 100%;
          }
        }
        @keyframes zhuan {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fzhuan {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
      }
    }
  }

</style>
