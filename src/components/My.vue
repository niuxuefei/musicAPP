<template>
  <div class="My">
      <ul class="top">
          <li><span class="a" @click="test"></span></li>
          <li><div id="wode_1"><a href="#">我的</a></div></li>
          <li><router-link to="/hjhMUsic">音乐</router-link></li>
          <li><router-link to="/attention">发现</router-link></li>
          <li><span class="b"></span></li>
      </ul>

      <div class="yonghu">
          <div>
              <router-link to="/login"><img src="./../assets/My/my-img01.png" alt="" class="touxiang"></router-link>
          </div>
          <span class='text'>Queen</span>
      </div>

        <!-- 用户信息 -->
      <div class="xinxi">
          <ul>
              <li>
                  <span class="My_icon"></span>
                    <span class="xinxi_text">
                        成长等级
                    </span> 
                <br>
                <p>今日听歌30分钟</p>
              </li>
              <li>
                  <span class="My_icon_2"></span>
                <span class="xinxi_text">
                    会员中心
                </span> 
                <br>
                <p>联合会员震撼首发</p>
              </li>
          </ul>
      </div>

        <!-- 本地 乐唱 我喜欢的 -->
        <div class="love">
            <ul>
                <li>
                    <a href="#">
                        <span class="love_icon_01"></span>
                        <p>本地音乐</p> 
                    </a>
                </li>
                <li>
                    <router-link to="/happysing">
                        <span class="love_icon_02"></span>
                        <p>乐唱音乐</p> 
                    </router-link>
                </li>
                <li>
                    <a href="#">
                        <span class="love_icon_03"></span>
                        <p>我喜欢的</p> 
                    </a>
                </li>
            </ul>
        </div>

        <div class="centen">
            <ul>
                <li>
                    <div class="imgbox box1">
                        我的歌单
                    </div>
                </li>
                <li>
                    <div class="imgbox box2">
                        我的关注
                    </div>
                </li>
                <li>
                    <div class="imgbox box3">
                        收藏歌单
                    </div>
                </li>
                <li>
                    <div class="imgbox box4">
                        收藏歌手
                    </div>
                </li>
            </ul>
        </div>

       <Sidebar @lan="fxx" :class="{'cebian':aac,'act':!aac}" mas="aac"></Sidebar>

        

  </div>
</template>

<script>
import Sidebar from'./../components/sidebar'
export default {
  data() {
    return {
        aac:true,
    }
  },
  methods: {
      test:function(){
         this.aac=false;
      },
      fxx(a){
          this.aac=a;
      }
  },
  components: {
      Sidebar
  }
}
</script>

<style scoped lang='less'>

    .My{
        min-height: 100%;
        overflow: hidden;
        background: black;
        text-align: center;
        ul{
            list-style: none;
            padding: 0;
            margin: 0;
        }
        a{
            text-decoration: none;
        }
        color:#fff;
        font-size: .35rem;
        #wode_1{
            background:linear-gradient(90deg,rgba(246,105,52,1) 0%, rgba(255,41,97,1) 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
            font-weight: 600;
            border-bottom: .02rem solid rgba(255,41,97,1);
            // border-image: -webkit-linear-gradient(rgba(246,105,52,1), rgba(255,41,97,1) ) 20 20;
            // border-image: linear-gradient(rgba(246,105,52,1), rgba(255,41,97,1)) 20 20;
        }
        a{
            color: #fafafa;
        }
        .cebian{
            transition: all 1s;
            margin-left: -12rem;
            position: relative;
            z-index: 99999;
        }
        .act{
            transition: all 1s;
            margin-left: 0;
            transition: margin-left 1s;
        }
        .top{
            display: flex;
            margin-top: .62rem;
            li{
                flex: 1;
                text-align: center;
                font-size: .32rem;
                height: .7rem;
                line-height: .5rem;
                div{
                    margin: 0 auto;
                    height: 100%;
                    width: .66rem;
                }
                .a {
                    display: block;
                    width: .3rem;
                    height: .28rem;
                    background: url('./../assets/My/nav-icon01.png') center center no-repeat;
                    background-size: cover;
                    margin-top: .1rem;
                    margin-left: .3rem;
                    text-decoration: none;
                }
                .b{
                    display: block;
                    width: .44rem;
                    height: .44rem;
                    background: url('./../assets/My/nav.icon02.png') center center no-repeat;
                    background-size: cover;
                    float: right;
                    margin-right: .28rem;
                }
            }
        }
        .yonghu{
            margin-top: .53rem;
        }
        .touxiang{
            margin: 0 auto;
            margin-top: .24rem;
            width: 1.20rem;
            height: 1.20rem;
        }
        .text{
            display: block;
            text-align: center;
            margin-top: .25rem;
        }
        .xinxi{
            margin-top: .45rem;
            .My_icon{
                background: url('./../assets/My/my-icon01.png') center center no-repeat;
                background-size: cover;
                margin-left: .9rem;
                width: .45rem;
                height: .45rem;
            }
            .My_icon_2{
                background: url('./../assets/My/my-icon02.png') center center no-repeat;
                background-size: cover;
                margin-left: .9rem;
                width: .45rem;
                height: .45rem;
            }
            p{
                font-size: .27rem;
                // margin-top: .01rem;
                margin-top: .20rem;
            }
            ul{
                display: flex;
                li{
                    flex: 1;
                    font-size: .3rem;
                    text-align: center;
                }
            }
            .xinxi_text{
                text-indent: .24rem;
            }
            overflow: hidden;
            span{
                display: block;
                float: left; 
            }
        }

        .love{
            margin-top: .8rem;
            ul{
                display: flex;
                li{
                    flex: 1;
                    text-align: center;
                    .love_icon_01{
                         background: url('./../assets/My/my-icon03.png') center center no-repeat;
                         background-size: cover;
        
                    }
                    .love_icon_02{
                         background: url('./../assets/My/my-icon04.png') center center no-repeat;
                         background-size: cover;
        
                    }
                    .love_icon_03{
                         background: url('./../assets/My/my-icon05.png') center center no-repeat;
                         background-size: cover;
        
                    }
                    span{
                        width: .56rem;
                        height: .56rem;
                        display: block;
                        margin: 0 auto;
                    }
                    p{
                        margin-top: .21rem;
                        font-size: .3rem;
                    }
                }
            }
        }
        .centen{
            margin-top: .65rem;
            ul{
                overflow: hidden;
                margin-bottom: 1rem;
                li{
                    margin-top: .24rem;
                    float: left;
                    width: 50%;
                    text-align: center;
                    line-height: 2.20rem;
                    .imgbox{
                        
                        width: 3.30rem;
                        height: 2.20rem;
                        margin: 0 auto;
                    }
                    .box1{
                        background: url('./../assets/My/my-img02.png')center center no-repeat;
                        background-size: cover;
                    }
                    .box2{
                        background: url('./../assets/My/my-img03.png')center center no-repeat;
                        background-size: cover;
                    }
                    .box3{
                        background: url('./../assets/My/my-img03.png')center center no-repeat;
                        background-size: cover;
                    }
                    .box4{
                        background: url('./../assets/My/my-img05.png')center center no-repeat;
                        background-size: cover;
                    }
                }
            }
            
        }
    }
    
    
     
</style>
