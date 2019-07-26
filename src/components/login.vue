<template>
  <div class="login"> 
      <div class="logo">
          <img src="../assets/img/zyb-img/login/logo@2x.png@2x.png" alt="" class="logo-img">
      </div>
      <div class="menu">
          <ul>
            <li @click='red=true' :class="{'redjb':red}">登录</li>
            <li @click='red=false' :class="{'redjb':!red}">注册</li>
          </ul>
          <div class="num">
              <h4>账号</h4>
              <div>
                  <input type="text" placeholder="请输入账号" class='activ' style="margin:0">
              </div>
              <h4>密码</h4>
              <div class="llll">
                  <input type="password"  @focus='fn1' @blur='fn2' :class="{'active':active}">
              </div>
          </div>
          <div class="dl">
              <router-link to="/my" class='dl-a'><img src="../assets/img/zyb-img/login/icon@2x.png@2x.png" alt="" class="dl-img"></router-link>
              <a href="#"></a>
          </div>
          <div class="foot">
              <p class="foot-sp">第三方登录</p>
              <p class="foot-sp">
                  忘记密码
                  <span>
                      <img src="../assets/img/zyb-img/login/icon2@2x.png@2x.png" alt="" class="foot-img">
                    </span>
               </p>
          </div>
      </div>

   </div>
  
</template>

<script>


export default {
  data() {
    return {
        active:false,
        redjb:false,
        red:true
    }
  },
  methods: {
      red(){
        this.redjb=!this.redjb;
      },
      fn1(){
          this.active=true
        },
        fn2(){
          this.active=false
        }
  },
  components: {

  }
}
</script>

<style >
ul{
    margin: 0;
    padding: 0;
}
html{
    width: 100%;
    height: 100%;
    background-size:100% 100%;
    color: white;
}
h4{
    margin:0;
}
.login{
    overflow: hidden;
    background: url('../assets/img/zyb-img/img/登录页.jpg') no-repeat;
    padding: 0.58rem 0 0.59rem 0;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
}
.logo{
    margin: 1.02rem 2.8rem;
}
.logo-img{
    width: 1.91rem;
    height: 1.3rem;
}
.menu{
    margin-top: 0.47;
    color: white;
    height:0.8331rem;
}
.menu ul{
    display: flex;
    /* justify-content: space-around; */
    list-style: none;
}
.menu ul li{
    font-size:0.44rem; 
    width: 50%;
    text-align: center;
    padding-bottom:0.23rem;
}
.menu ul li a{
    text-decoration: none;
    color: white;
}
.menu ul .redjb{
    border-bottom: solid 0.05rem transparent;
    border-image:   linear-gradient(to right,rgba(246,105,52,1),rgba(255,36,101,1)) 1 10;
}
.num{
    margin: 1.59rem 1.14rem;
    margin-bottom: 0;
    overflow: hidden;
    /* height: 4rem; */
    
}
.num .llll{
    height: 2rem;
}
.num h4{
    font-size: 0.3rem;
}
.num h4:nth-child(3){
    height: 0.97rem;
    line-height: 0.82rem;
}
.num input{
    width: 100%;
    border: none;
   border-bottom: solid 0.02rem white;
   background: none;
   outline: none;
   color: white;
   height: 0.28rem;
   float: left;
   padding: 0.22rem 0 0.07rem 0;
   font-size:0.28rem 
}
input{
      border: none;
      outline: none;
      background: black;
      border-bottom: 2px solid white;
      color: white;
      height: .05rem;
      transition: all 1s;
}
.num .active{
    border-bottom: solid 2px transparent;
    border-image:linear-gradient(to right,rgba(246,105,52,1),rgba(255,36,101,1)) 1 10;
    height: .5rem;
    margin-top: .5rem;
}
.num .activ{
    border-bottom: solid 2px transparent;
    border-image:linear-gradient(to right,rgba(246,105,52,1),rgba(255,36,101,1)) 1 10;
    height: .5rem;
}
.dl{
    width: 1.5rem;
    height: 1.5rem;
    margin: .5rem 3rem 0 3rem;
}
.dl-a{
    display: block;
     width: 1.5rem;
    height: 1.5rem;
}
.dl-img{
    width: 100%;
    height: 100%;
}
.foot{
    margin: 0.52rem 0.32rem 0 0.32rem ;
    display: flex;
    justify-content:space-between; 
     
}
.foot-sp{
    font-size:0.27rem;
    height: 0.27rem;
   
}

.foot-img{
    height: .32rem;
    width: .32rem;
}
</style>
