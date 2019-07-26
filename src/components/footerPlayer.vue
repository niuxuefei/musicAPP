<template>
  <div class="footplayer">
    <router-link to="/hjhplayer">
    <div class="hjhimg">
      <img src="./../assets/mymusic/home-banner-11.png@3x.png" alt>
    </div>
    <div class="hmusicname">
      <p v-text='songname'></p>
      <p v-text='songuse'></p>
    </div>
    <div class="hplay">
       <router-link to="/hjhplayer">
        <img src="./../assets/mymusic/home-icon-10.png@3x.png" alt >
      </router-link>
      <a href="#">
        <img src="./../assets/mymusic/home-icon-11.png@3x.png" alt>
      </a>
    </div>
    </router-link>
  </div>
</template>

<script>
// import Axios from "./../../node_modules/axios/dist/axios.js";
export default {
  data() {
    return {
      timer:null,
      show:true,
       list: [], //歌曲信息
      num: 0, //控制播放上一曲下一曲
      url: "",
      songname: "",
      songuse: "",
      songimg: ""
    };
  },
  methods: {
    //  play() {
    //   let audio_ = document.getElementsByClassName("hjhmp3")[0];
      
    //   let that = this;
    //   that.stime = audio_.duration;
    //   console.log(audio_);
    //   // audio_.addEventListener("canplay", function() {
    //   //   this.$refs.aud.play();
    //   // });
    //   if (audio_ !== null) {
    //     //检测播放是否已暂停.audio_.paused 在播放器播放时返回false.
    //     if (audio_.paused) {
    //    this.$refs.aud.play();

    //       // 控制滚动条
    //       this.timer = setInterval(() => {
    //           that.time = audio_.currentTime;
    //         if (that.time === that.stime) {
    //           this.num++; // 这个就是暂停
    //           clearInterval(this.timer);
              
    //           that.show = false;
    //         }
    //       }, 100);
    //     } else {
    //       this.$refs.aud.pause(); // 这个就是暂停
    //       clearInterval(this.timer);
    //       this.timer = null;
    //       that.show = true;
    //     }
    //   }
    // }
  },
   beforeMount() {
    // // this.num++;
    // Axios.get(
    //   "https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1"
    // )
    //   .then(res => {
    //     console.log(res.data.data);
    //     this.list.push(res.data.data);
    //     this.list.forEach(item => {
    //       this.songname = item[this.num].name;
    //       this.songuse = item[this.num].singer;
    //       this.songimg = item[this.num].pic;
    //       this.url = item[this.num].url;
    //     });
    //   })
    //   .catch(res => {
    //     console.log(res);
    //   });
  },
  components: {}
};
</script>

<style scoped lang='less'>
@media screen and(min-width: 370) {
  .hplay {
    width: 0.1.28rem;
  }
}
.footplayer {
  width: 100%;
  position: fixed;
  z-index: 0;
  bottom: 0;
  height: 0.98rem;
  background: #333;
  a{
    display: block;
  }
  .hjhimg {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin: 0.19rem 0.24rem 0.19rem 0.32rem;
    img {
      width: 100%;
      height: auto;
    }
  }
  .hmusicname {
    margin: 0.22rem 0 0.21rem 0;
    float: left;
    p {
      color: #fff;
      font-size: 0.22rem;
      line-height: 0.33rem;
      text-align: left;
      &:nth-child(2) {
        color: rgb(153, 153, 153);
      }
    }
  }
  .hplay {
    float: right;
    width: 1.48rem;
    margin: 0.28rem 0.32rem 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .hjhmp3 {
      position: absolute;
      opacity: 0;
    }
    a {
      display: block;
      &:nth-child(1) {
        width: 0.27rem;
        height: 0.44rem;
        img {
          width: 0.27rem;
          height: 0.44rem;
        }
      }
      &:nth-child(2) {
        width: 0.44rem;
        height: 0.44rem;
        img {
          width: 0.44rem;
          height: 0.44rem;
        }
      }
    }
  }
}
</style>
