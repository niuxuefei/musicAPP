<template>
  <div class="lead">
    <div class="swiper-container">
      <div class="swiper-wrapper" lead-box>
        <div class="swiper-slide" lead-boxs>
          <img src="../assets/img/zyb-img/img/引导页1.jpg" alt class="lead-img">
            <ul >
                <li class="one"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="swiper-slide" lead-boxs>
          <img src="../assets/img/zyb-img/img/引导页2.jpg" alt class="lead-img">
            <ul>
                <li ></li>
                <li class="one"></li>
                <li></li>
            </ul>
        </div>
        <div class="swiper-slide" lead-boxs>
          <img src="../assets/img/zyb-img/img/引导页3.jpg" alt class="lead-img">
            <ul>
                <li ></li>
                <li></li>
                <li  class="one"></li>
            </ul>
        </div>
      </div>

      <!-- <div class="swiper-pagination dian" ></div> -->
    </div>
    <div class="jtou">
      <router-link to="/hjhMUsic"><img src="../assets/img/zyb-img/img/Jtou.png" alt class="jtou-img"></router-link>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css';
import Swiper from "../../node_modules/swiper/dist/js/swiper";

export default {
  data() {
    return {};
  },
  mounted() {
    this.mySwiper();
  },
  methods: {
    mySwiper() {
      let mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },

  components: {}
};
</script>

<style scoped>
@import "../../node_modules/swiper/dist/css/swiper.min.css";
* {
  margin: 0;
  padding: 0;
  height: 100%;
}
.lead{
  background: black;
}
.lead-boxs {
  width: 100%;
  height: 100%;
}
.lead-img {
  width: 100%;
  height: 100%;
  font-size: 0;
}
.jtou {
  position: fixed;
  top: 93.5%;
  right: 7%;
  z-index: 100;
}
.jtou-img {
  width: 0.5rem;
  height: 0.5rem;
}
.dian {
  position: absolute;
  top: 93.7%;
}

ul{
    width   : 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 95%;
    /* float: left; */
    z-index: 100;
}
li{
    margin: 0 0.3rem;
    height: 0.16rem;
    width: 0.16rem;
    background: linear-gradient(to right, rgba(246,105,52,1), rgba(255,36,101,1) );;;
    border-radius: 50%; 
}
.one{
    background: linear-gradient(to right, rgba(246,105,52,1), rgba(255,36,101,1) );;;
    border-radius: 50%; 
    width: 0.42rem;
    height: 0.16rem;
    border-radius:0.08rem; 
}
</style>
