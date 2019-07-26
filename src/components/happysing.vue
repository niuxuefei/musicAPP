<template>
  <div class="happy">
    <div class="top">
      <div class="all">
        <div class="one"><router-link to="/my"><img src="../assets/img/happysing/banner.icon1@2x.png@3x.png" width="100%"></router-link></div>
        <div class="two"><img src="../assets/img/happysing/icon2.png" width="100%"></div>
        <div class="three"><img src="../assets/img/happysing/icon3.png" width="100%"></div>
        <div class="tou"><div></div></div>
        <p>Taylor Swift</p>
        <h3>You Need To Calm Down</h3>
      </div>
    </div>
    <div class="bottom">
      <div class="bot">
      <div class="listf">
        <div>
          <div class="tub"><img src="../assets/img/happysing/icon1@2x.png@3x.png" width="100%"></div>
          <p>说唱</p>
        </div>
        <div>
          <div class="tub"><img src="../assets/img/happysing/icon2@2x.png@3x.png" width="100%"></div>
          <p>MV</p>
        </div>
        <div>
          <div class="tub"><img src="../assets/img/happysing/icon3@2x.png@3x.png" width="100%"></div>
          <p>合唱</p>
        </div>
        <div>
          <div class="tub"><img src="../assets/img/happysing/icon4@2x.png@3x.png" width="100%"></div>
          <p>清唱</p>
        </div>
        <div>
          <div class="tub"><img src="../assets/img/happysing/icon5@2x.png@3x.png" width="100%"></div>
          <p>短视频</p>
        </div>
      </div>
      <div class="lists">
        <div class="text" v-for='(item,index) in list' :key='index' @click='fn(index)' :class="{'active':index==active}">
          <div class="tao">{{item}}<span></span></div>
        </div>
        <div class="tul">
          <div class="tu"><img src="../assets/img/happysing/pic2.png" width="100%"></div>
          <p>Mr.chen</p>
        </div>
        <div class="tul">
          <div class="tu"><img src="../assets/img/happysing/pic3.png" width="100%"></div>
          <p>Mr.chen</p>
        </div>
        <div class="tul">
          <div class="tu"><img src="../assets/img/happysing/pic4.png" width="100%"></div>
          <p>Mr.chen</p>
        </div>
        <div class="tul">
          <div class="tu"><img src="../assets/img/happysing/pic5.png" width="100%"></div>
          <p>Mr.chen</p>
        </div>
        <div class="tul">
          <div class="tu"><img src="../assets/img/happysing/pic6.png" width="100%"></div>
          <p>Mr.chen</p>
        </div>
      </div>
      <div class="tttt">
      <h3>好友排行</h3>
      </div>
      <div class="allp">
        <div class="listt" v-for="(i,d) in pai" :key='d'>
          <div class="tu"><img src="../assets/img/happysing/icon6@2x.png@3x.png" width="100%"></div>
          <p>{{i}}</p>
          <span>本曲推荐教程视频<img src="../assets/img/happysing/icon7@2x.png@3x.png"></span>
        </div>
      </div>
      </div>
      </div>
    <div :class="{'cli':true,'aaa':aaa}" @click='kai'>开启乐唱</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:['日榜','短视频','总榜','唱法推荐'],
      active:0,
      pai:['Cassie','Lucynuere','changshaohua'],
      aaa:false
    }
  },
  methods: {
    fn(a){
      this.active=a;
    },
    kai(){
      this.aaa=true;
      setTimeout(()=>{
        this.aaa=false;
      },500)
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .happy{
    p,h3{
      margin: 0;
      padding: 0;
    }
    font-size: .28rem;
    font-weight: 300;
    position: relative;
    .top{
      height: 5.28rem;
      width: 100%;
      overflow: hidden;
      background: url('../assets/img/happysing/t01e23d8354efce2973.jpg') center;
      background-size: cover;
      .all{
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.75);
        position: relative;
        .one,.two,.three{
          width: .33rem;
          height: .33rem;
          // background: rgba(235, 23, 182, 0.5);
          position: absolute;
          top:.65rem;
        }
        .one{
          left: .3rem;
        }
        .two{
          right: .95rem;
        }
        .three{
          right: .35rem;
          transform: translateY(.02rem);
        }
        .tou{
          width:2rem;
          height: 2rem;
          border-radius: 1rem;
          background: url('../assets/img/happysing/t01e23d8354efce2973.jpg') center;
          background-size:cover;
          margin: 1.34rem auto;
          margin-bottom: 0;
          overflow: hidden;
          div{
            width: 100%;
            height: 100%;
            background: rgba(255, 0, 0, 0.3)
          }
        }
        p,h3{
          text-align: center;
          margin: 0;
          padding: 0;
          color: white;
          font-weight: 500;
        }
        p{
          margin-top: .38rem;
          font-size: .24rem;
        }
        h3{
          margin-top: .28rem;
          font-size: .33rem;
          font-weight: 350;
        }
      }
    }
    .cli{
      position: absolute;
      top: 4.85rem;
      left: 2.32rem;
      width:2.6rem;
      height: .53rem;
      color: white;
      text-align: center;
      line-height: .53rem;
      background: linear-gradient(right,rgb(241,95,57),rgb(254,44,95));
      border-radius: .36rem;
      border: .1rem solid transparent;
    }
    .aaa{
      border-right:.1rem solid rgba(110, 58, 58, 0.425);
      border-bottom:.1rem solid rgba(110, 58, 58, 0.425);
      border-top:.1rem solid rgba(248, 122, 122, 0.425);
      border-left:.1rem solid rgba(248, 122, 122, 0.425);
      font-size: .25rem;
    }
    .bottom{
      background: url('../assets/img/happysing/happybg.jpg') center;
      background-size: cover;
      .bot{
        overflow: hidden;
        background:rgba(255,255,255,.2);
      .listf{
        display: flex;
        justify-content: space-around;
        margin-top: .75rem;
        &>div{
          text-align: center;
          color: white;
          .tub{
            width: .5rem;
            height: .5rem;
            margin: 0 auto;
            margin-bottom: .25rem;
            display: flex;
            align-items: center;
            justify-items: center;
          }
        }
      }
      .lists{
        color: white;
        text-align: center;
        margin-top: .4rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .text{
          float: left;
          height: .8rem;
          width: 25%;
          margin-bottom: .3rem;
          .tao{
            display: inline-block;
            width: auto;
            line-height: .8rem;
            height: .8rem;
            position: relative;
            span{
              background: linear-gradient(right,rgb(241,95,57),rgb(254,44,95));
              display: none;
              width:100%;
              height: .02rem;
              position: absolute;
              bottom: 0;
              border-radius: .01rem;
            }
          }
        }
        .active .tao{
          background: linear-gradient(right,rgb(241,95,57),rgb(254,44,95));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 500;
          span{
            display: block;
          }
        }
        .tul{
          width:1.2rem;
          box-sizing: border-box;
          p{
            text-align: center;
            font-size: .26rem;
          }
          .tu{
            width:1rem;
            border-radius: .5rem;
            overflow: hidden;
            font-size: 0;
            margin: 0 auto;
            margin-bottom: .2rem;
          }
        }
      }
      .tttt{
        overflow: hidden;
        h3{
          margin-top:.4rem;
        margin-bottom: .1rem;
        background: linear-gradient(right,rgb(241,95,57),rgb(254,44,95));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      }
      h3,.listt{
        padding: 0 .3rem;
      }
      .allp{
        margin-bottom: 1.2rem;
        .listt{
          font-size: .25rem;
        color:rgb(148,148,148);
        line-height: .6rem;
        overflow: hidden;
        position: relative;
        margin-top: .2rem;
        p{
          color: white;
        }
        .tu{
          width: .4rem;
          margin-right: .2rem;
          float: left;
        }
        span{
          position: absolute;
          top: 0;
          right: .3rem;
          img{
            width: .12rem;
            margin-left: .25rem;
          }
        }
      }
      }
    }
    }
  }
  
</style>
