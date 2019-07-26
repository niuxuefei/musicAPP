<template>
   <div class="big">
     <div class="head">
            <ul>
                <li>
                    <router-link style="border:none" to="/My"><img src="../../img/关注_slices/nav-icon01@2x.png"></router-link>

                    <router-link to="/attention" class="guan">关注</router-link>
                </li>
                <li>
                    <router-link to="/nearby" class="fu">附近</router-link>

                    <router-link style="border:none" to=""><img src="../../img/关注_slices/nav-icon02@2x.png"></router-link>
               </li>
         </ul>
         <img class="icon" src="../../img/关注_slices/nav-icon03@2x.png">
     </div>
     <div class="ct">
       <div class="left"><h3>热门话题</h3></div>
       <div class="lunbo">
             
             
             <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../../img/关注_slices/img01@2x.png">
            <img src="../../img/关注_slices/img02@2x.png">
             <img src="../../img/关注_slices/img03@2x.png">
        </div>
        <div class="swiper-slide">
            <img src="../../img/关注_slices/img01@2x.png">
            <img src="../../img/关注_slices/img02@2x.png">
             <img src="../../img/关注_slices/img03@2x.png">
        </div>
        <div class="swiper-slide">
            <img src="../../img/关注_slices/img01@2x.png">
            <img src="../../img/关注_slices/img02@2x.png">
             <img src="../../img/关注_slices/img03@2x.png">
        </div>
    </div>
    <div class="swiper-scrollbar"></div>
</div>
       </div>
     </div>
     <div class="bofang">
        <div class="star">
            <div class="st-ct">
            <div class="ff">
                <img class="icon1" src="../../img/关注_slices/img04@2x.png">
            </div>
            <div class="st">
                <p class="zi">Star</p>
            <p class="na">Bang Bang</p>
            </div>
             <img class="fire" src="../../img/关注_slices/icon01@2x.png">
            </div>
        </div>
       <div class="vieo">
        <video src="../../img/G.E.M.邓紫棋 - 来自天堂的魔鬼.mp4" controls="controls"></video>
       </div>
       <div class="wenzi">
         <p>     《Bang Bang》是英国女歌手Jessie J、
             美国女歌手爱莉安娜·格兰德和妮琪·米娜合作演唱的歌曲.</p>
       </div>
       <div class="love">
           <div class="c0">
           <img class="love1" src="../../img/关注_slices/icon03@2x(1).png">
           <span>30喜欢</span>

           </div>
           
           <div class="c1"> 
           <img class="love2" src="../../img/关注_slices/nav-icon02@2x.png">
           <span>20评论</span>
           </div>
        
           <img class="love3" src="../../img/关注_slices/icon04@2x.png">
       </div>
     </div>
     <div class="foot">
         <div class="foot-ct">

         </div>
     </div>
   </div>
</template>

<script>
import Swiper from "../../../node_modules/swiper/dist/js/swiper"
export default {
  data() {
    return {
     arr:[]
    }
  },
  mounted(){
  var mySwiper = new Swiper ('.swiper-container', {

    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
   
  })        
  }
,
  components: {

  },
 
}
</script>

<style scoped lang="less" >
@import "../../../node_modules/swiper/dist/css/swiper.min.css";
*{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
}
#app{
    width: 100%;
    height: 100%;
    .big{
    width: 100%;
    height: 100%;; 
    font-size: .20rem;
    background: url("./../../img/login.jpg")!important;
    // background: black;
    // background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    .head{
        width: 90%;
        height: 1.45rem;
        padding-top: .40rem;
        margin: 0 auto;
        position: relative;
        margin-top: .35rem;
        .icon{
            width: .48rem;
            height: .48rem;
            position: absolute;
            top: 0.28rem;
            left: 5.38rem;
        }
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        li{
            flex: 1;
            font-size: .32rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                // flex: 1;
                width: .4rem;
                height: .4rem;
            }
          a{  
              text-decoration: none;
              color: white;
               padding-bottom: .12rem;
          }
          .guan{
              display: inline-block;
              margin-right: 1.50rem;
              color:#f66934; 
              border-bottom: .03rem #f7603a solid;
          }
          .fu{
              display: inline-block;
              margin-left: 1.50rem;
          }
        }
    }
}
.icon1{
    width: .9rem;
    height: .9rem;
}
.ct{
    width: 100%;
    height: 2.95rem;
  .left{
     width:90%;
     margin: 0 auto;
     height:.75rem;
     h3{
         float: left;
         color: white;
         font-weight: 500;
          font-size: .4rem;
     }
  }
  .lunbo{
      width: 94.6%;
      height: 1.6rem;
    //   border: 1px #cccccc solid;
    //   float: right;
    // margin: 0 auto;
    margin-left: .35rem;
      img{
          width: 2.2rem;
          height: 1.60rem;
      }
  }
}
.bofang{
    width:100%;
    height: 5.58rem;
    .star{
        width: 90%;
        margin: 0 auto;
        .st-ct{
            width: 100%;
            height: 1.20rem;
            .fire{
            width: .48rem;
            height: .48rem;
            float: right;
            margin-top: .25rem;
            }
        }
        .st{
            float: left;
            width: 1.5rem;
            height: 1.2rem;
            margin-left: .2rem;
            // p{
            //   
            // }
            .zi{
              color: white;
              font-size: .4rem;
            }
            .na{
                font-size: .14rem;
                padding-top:.15rem;
                color: rgb(153,153,153);
                font-size: .3rem;
            }
        }
    }
    .ff{
        float: left;
    }
    .vieo{
        width: 90%;
        margin: 0 auto;
        height: 4.39rem;
        // border: 1px #cccccc solid;
        
    }
    .wenzi{
            width: 90%;
            // height: 1.17rem;
            margin: 0 auto;
            // border: 1px #cccccc solid;
            color: white;
            margin-top: .25rem;
            font-size: .3rem;
            p{
                text-indent: .35rem
            }
        }
        .love{
            width: 90%;
            margin: .25rem auto;
            font-size: .3rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                width: .48rem;
                height: .48rem;
            }
            span{
                padding-left: .15rem;
            }
            .c0{
                display: flex;
                align-items: center;
            }
            .c1{
                display: flex;
                align-items: center;
                margin-right: 2.12rem;
            }
        
        }
}
.foot{
    width: 100%;
    height: .96rem;
    position: absolute;
    top:13.33rem;
    .foot-ct{
        width: 90%;
        margin: 0 auto;
        
    }
}
video{
    width: 100%;
}
.rt1{
   border-bottom: none;
}
}


</style>
