<template>
<div class="bt">
   <div class="head">
         <ul class="kl">
             <li class="list">
                 <router-link style="border:none" to="/My"><img src="../../img/关注_slices/nav-icon01@2x.png"></router-link>

                 <router-link to="/attention" class="guan">关注</router-link>
                 </li>
           <li>
               <router-link to="/nearby" class="fu">附近</router-link>

                <router-link style="border:none" to=""><img src="../../img/关注_slices/nav-icon02@2x.png"></router-link>
               </li>
         </ul>
         <!-- <img class="icon" src="../../img/关注_slices/nav-icon03@2x.png"> -->
      <div class="bt-kl">
      <div class="lk">
          <img src="../../img/附近_slices/imgo1-pressed.png">
          <img class="img1" src="../../img/附近_slices/icon01.png">
          <p>Kandy Karake</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>268m</span>
          </div>
          </div>
          <div class="lk">
          <img src="../../img/附近_slices/img02@2x.png">
          <p>NNFK kcd</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>68m</span>
          </div>
    </div>
    

      </div>
        <div class="bt-kl">
      <div class="lk">
          <img src="../../img/附近_slices/img03@2x.png">
          <p>VMKV VMKL</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>8m</span>
          </div>
          </div>
          <div class="lk">
          <img src="../../img/附近_slices/img04@2x.png">
          <p>KSKM L</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>8m</span>
          </div>
    </div>
    

      </div>
        <div class="bt-kl">
      <div class="lk">
          <img src="../../img/附近_slices/img05@2x.png">
          <p>KSJM IJA</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>26m</span>
          </div>
          </div>
          <div class="lk">
          <img src="../../img/附近_slices/img06@2x.png">
          <p>LSML LSL</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>68m</span>
          </div>
    </div>
    

      </div>
         <div class="bt-kl">
      <div class="lk">
          <img src="../../img/附近_slices/img07@2x.png">
          <p>SL LS</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>36m</span>
          </div>
          </div>
          <div class="lk">
          <img src="../../img/附近_slices/img08@2x.png">
          <p>IDOS KKO</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>38m</span>
          </div>
    </div>
      </div>
        <div class="lk">
          <div class="kk">
            
          </div>
          <img class="ll"  src="../../img/附近_slices/img09@2x.png">
          <p>KLSO ODK</p>
          <div class="bn">
            <img src="../../img/附近_slices/icon02@2x.png">
            <span>90m</span>
          </div>
          </div>
      </div>
     </div>
</div>
   

</template>

<script>
export default {
  data() {
    return {
      changeColor: false
    }
  },
  methods: {

  },
  components: {
  }
}
</script>

<style scoped  lang="less" >
*{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
    // overflow:hidden;
  
    //  font-family:'平方字体';
}
#app{
    width: 100%;
    height: 100%;
    // overflow:hidden;  
    //  background: url("./../../img/login.jpg") !important;
     .bt{
        width: 100%;
    height: 100%;
    // overflow:hidden;  
     background: url("./../../img/login.jpg") !important;
     overflow: hidden;
     }
    .head{
     
        width: 90%;
        height: 1.45rem;
        padding-top: .40rem;
        margin: 0 auto;
        position: relative;
        margin-top: .32rem;
        .icon{
          // display: none;
            width: .48rem;
            height: .48rem;
            position: absolute;
            top: 0.28rem;
            left: 5.38rem;
        }
    
    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: .40rem;
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
            //   flex:1;
              text-decoration: none;
              color: white;
              padding-bottom: .12rem !important;
              
              }
              }
              a.router-link-active{
              //  color: #f7603a;
              //  background: -webkit-gradient(linear,left top,right top,from(#f66934),to(#ff2465));
              //  background-clip: text;
            //  -webkit-text-fill-color: transparent;
               color: #f66934;
               border-bottom: .03rem #f7603a solid;
           }
              .guan{
              display: inline-block;
              margin-right: 1.50rem;
          }
          .fu{
              display: inline-block;
              margin-left: 1.50rem;
          }
          
              }
              }
              }
              .bt-kl{
                // overflow: hidden;
                // padding-top: 1rem;
                // height: 5rem;
              }
              .lk{
            width: 2rem;
            height: 2rem;
            // border: 1px #cccccc solid;
            font-size: .3rem;
            color: white;
            text-align: center;
            float: left;
            padding: .39rem .01rem .6rem .10rem;
            position: relative;
            .bn{
              display: flex;
              align-items: center;
              justify-content: center;
              span{
                color: #cccccc;
                font-size: .2rem;
              }
            }

            // display: flex;
            // justify-content: center;
          }
          .lk img:nth-child(1){
              width: 1rem;
              height: 1rem;
            }
          .bn img:nth-child(1){
              width: .48rem;
              height: .48rem;
            }
            .img1{
              width: .48rem;
              height: .48rem;
              position: absolute;
              top:.64rem;
              left: .83rem;
            }
              .lk:after {
          content: "";
          display: block;
          position: absolute;
          width: 13%;
          height: 45%;
          top: .21rem;
          left: .92rem;
          pointer-events: none;
          //设置径向渐变
          background-image: radial-gradient(
            circle,
            rgba(255,255,255,.5) 10%,
            transparent 10.01%
          );
          background-repeat: no-repeat;
          background-position: 50%;
          transform: scale(10, 10);
          opacity: 0;
          transition: transform 0.3s, opacity 0.5s;
        }

        .lk:active:after {
          transform: scale(0, 0);
          opacity: 0.3;
          transition: 0s;
        }
        .ll{
          width: 1rem;
          height: 1rem;
        }
    //         .changeColor {
    //          width: 1rem;
    //          height: 1rem;
    //          border: 1px red solid;
    // }
</style>
