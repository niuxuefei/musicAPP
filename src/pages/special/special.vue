<template>
    <div class="box">
      <div class="top">
        <span><router-link to="/hjhMUsic"><img src="./img/icon-1.png.png"></router-link></span>专辑
      </div>
      <div class="photo">
        <img src="./img/img-banner-1.png.png">
        <div class="ri_top">
          <p>Price Tag (身牌价)</p>
          <span>歌手：Jessie J (婕茜)</span>
        </div>
        <div class="ri_bottom">
          <p>流派：Pop 流行语种：英语</p>
          <span>《price tag》</span>
        </div>
      </div>
      <div class="icon">
        <ul>
          <li>
            <a href="">
              <img src="./img/icon-4.png.png" alt="">
              <span>专辑介绍</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./img/icon-5.png.png" alt="">
              <span>转发</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./img/icon-6.png.png" alt="">
              <span>下载</span>
            </a>
          </li>
          <li>
            <a href="">
              <img src="./img/icon-7.png.png" alt="">
              <span>多选</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="s_list">
        <div class="title">
          <img src="./img/icon-2.png.png">
          <P>全部歌曲(共4首)</P>
          <span>管理</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="(items,index) in list" :key="index">
              <div class="num">{{index + 1}}</div>
              <div class="sq">
                <p class="one">{{items.s_n}}</p>
                <p class="bo"><span>{{items.sq}}</span>{{items.name}}</p>
              </div>
              <img :src="items.r_p" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "special",
      data() {
        return {
          list:[
            {
              s_n:'Price Tag',
              name:'Jessie J',
              sq:'SQ',
              r_p:require('./img/icon-3.png.png')
            },
            {
              s_n:'Price Tag(Benny Page Remix)',
              name:'Jessie J / B.o.B',
              sq:'SQ',
              r_p:require('./img/icon-3.png.png')
            },
            {
              s_n:'Price Tag(Doman & Gooding)',
              name:'Jessie J / B.o.B',
              sq:'SQ',
              r_p:require('./img/icon-3.png.png')
            },
            {
              s_n:'Price Tag(Shux Remix)',
              name:'Jessie J',
              sq:'SQ',
              r_p:require('./img/icon-3.png.png')
            }
          ]
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
    min-height: 100%;
    position: fixed;
    color: white;
    background: url("./img/bg.jpg");
    background-size: 100% 100%;
    .top{
      width: 100%;
      height: .94rem;
      line-height: .94rem;
      text-align: center;
      font-size: .34rem;
      overflow: hidden;
      span{
        position: absolute;
        left: .32rem;
        img{
          width: .34rem;
          height: .34rem;
          vertical-align: middle;
        }
      }
    }
    .photo{
      width: 100%;
      padding: .33rem .32rem .56rem .32rem;
      overflow: hidden;
      img{
        width: 3.04rem;
        height: 3.04rem;
        float: left;
      }
      .ri_top{
        float: left;
        margin-left: .32rem;
        font-size: 0;
        p{
          font-size: .36rem;
          margin-bottom: .32rem;
        }
        span{
          font-size: .26rem;
        }
      }
      .ri_bottom{
        float: left;
        margin-left: .32rem;
        font-size: .24rem;
        margin-top: 1.01rem;
        p{
          margin-bottom: .24rem;
        }
        span{
          margin-left: -.1rem;
        }
      }
    }
    .icon{
      width: 100%;
      ul{
        display: flex;
        flex-direction: row;
        height: 100%;
        li{
          flex: 1;
          list-style: none;
          a{
            display: flex;
            height: 100%;
            flex-direction: column;
            align-items: center;
            font-size: .24rem;
            text-decoration: none;
            color: white;
          }
          img{
            width: .56rem;
            height: .56rem;
            margin-bottom: .16rem;
          }
        }
      }
    }
    .s_list{
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      font-size: 0;
      .title{
        overflow: hidden;
        width: 100%;
        padding: .4rem 0 .22rem 0;
        font-size: .22rem;
        border-bottom: 1px solid #2a2a2a;
        img{
          float: left;
          margin-left: .32rem;
          width: .34rem;
          height: .34rem;
        }
        p{
          float: left;
          margin-left: .22rem;
          /*margin-top: .03rem;*/
          display: inline-block;
        }
        span{
          float: right;
          /*margin-top: .03rem;*/
          margin-right: .32rem;
        }
      }
      .list{
        width: 100%;
        color: white;
        ul{
          font-size: 0;
          li{
            list-style: none;
            width: 100%;
            border-bottom: 1px solid rgb(42,42,42);
            font-size: .28rem;
            height: 1.3rem;
            overflow: hidden;
            box-sizing: border-box;
            .num{
              float: left;
              padding: 0 .24rem 0 .32rem;
              line-height: 1.3rem;
            }
            .sq{
              float: left;
              .one{
                padding: .33rem 0 0.15rem 0;
              }
              .bo{
                font-size: .22rem;
                margin-bottom: .24rem;
                box-sizing: border-box;
                span:nth-child(1){
                  display: inline-block;
                  color: rgb(133,133,133);
                  font-size: .16rem;
                  border: 1px solid rgb(133,133,133);
                  text-align: center;
                  width: .36rem;
                  height: .24rem;
                  line-height: .22rem;
                  border-radius: .13rem;
                }
              }
            }
            img{
              float: right;
              margin-right: .32rem;
              margin-top: 0.48rem;
              width: .34rem;
              height: .34rem;
            }
          }
        }
      }
    }
  }

</style>
