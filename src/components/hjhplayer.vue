<template>
  <div class="hjhplay">
    <div class="zhuangtai"></div>
    <div class="hplaynav">
      <router-link to="/hjhMUsic"><span class="hback"></span></router-link>
      <span class="hsongname" >{{songname}}</span>
      <span class="hsonglist"></span>
    </div>
    <div class="hjhuser">
      <span class="hjhgang"></span>
      <span class="husername">{{songuse}}</span>
      <span class="hjhgang"></span>
    </div>
    <ul class="hjhtest">
      <li>标准</li>
      <li>MV</li>
      <li>音效</li>
    </ul>
    <div class="hjhsonghead">
      <img :src="songimg" alt>
    </div>
    <ul class="hjhlrc">
      <li v-for="(item,index) in oLRC.ms" :key="index">{{item.c}}</li>
      <!-- <li>我是歌词</li>
      <li>我是歌词</li> -->
    </ul>
    <div class="hjhshare">
      <a href="#">
        <img src="./../assets/hplayer_slices/icon01@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon02@2x.png" alt>
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon03@2x.png" alt>
      </a>
    </div>
    <div class="hjhscroll">
      <audio class="hjhmp3" ref="aud" :src="url"></audio>
      <span>{{time | times}}</span>
      <div class="hjhscrollp">
        <div class="hjhscrollmove">
          <span class="hjhscrollball"></span>
        </div>
      </div>
      <span>{{stime | times}}</span>
    </div>
    <div class="hjhbtn">
      <a href="#">
        <img src="./../assets/hplayer_slices/icon04@2x.png">
      </a>
      <a href="#" @touchstart.prevent="pre">
        <img src="./../assets/hplayer_slices/icon05@2x.png">
      </a>
      <a href="#" @touchstart.prevent="play">
        <img src="./../assets/hplayer_slices/icon06@2x.png" v-if="show">
        <img src="./../assets/hplayer_slices/33.png" v-else>
      </a>
      <a href="#" @touchstart.prevent="next">
        <img src="./../assets/hplayer_slices/icon07@2x.png">
      </a>
      <a href="#">
        <img src="./../assets/hplayer_slices/icon08@2x.png">
      </a>
    </div>
  </div>
</template>

<script>
import Axios from "./../../node_modules/axios/dist/axios.js";
import Lrc from "./../../static/lrc";
export default {
  data() {
    return {
      show: true,
      timer: null,
      count: 0,
      // 总时间
      stime: 0,
      //  当前时间
      time: 0,
      list: [], //歌曲信息
      num: 0, //控制播放上一曲下一曲
      url: "",
      songname: "",
      songuse: "",
      songimg: "",
      lrc: "",
      lrcurl:'',
      oLRC: {
        ti: "", //歌曲名
        ar: "", //演唱者
        al: "", //专辑名
        by: "", //歌词制作人
        offset: 0, //时间补偿值，单位毫秒，用于调整歌词整体位置
        ms: [] //歌词数组{t:时间,c:歌词}
      },
    };
  },
  filters: {
    times(val) {
      let secs = Math.round(val % 60);
      let mins = Math.floor(val / 60);

      return (
        (mins < 10 ? "0" + mins : mins) + ":" + (secs < 10 ? "0" + secs : secs)
      );
    }
  },

  methods: {
    next() {
      this.num++;
      this.list.forEach(item => {
        this.songname = item[this.num].name;
        this.songuse = item[this.num].singer;
        this.songimg = item[this.num].pic;
        this.url = item[this.num].url;
      });
    },
    pre() {
      this.num--;
      this.list.forEach(item => {
        this.songname = item[this.num].name;
        this.songuse = item[this.num].singer;
        this.songimg = item[this.num].pic;
        this.url = item[this.num].url;
      });
    },
    play() {
      let audio_ = document.getElementsByClassName("hjhmp3")[0];
      let hhead = document.getElementsByClassName("hjhsonghead")[0];
      let scrollm = document.getElementsByClassName("hjhscrollmove")[0];
      let scrollball = document.getElementsByClassName("hjhscrollmove")[0];
      let lrc = document.getElementsByClassName("hjhlrc")[0].getElementsByTagName("li")[0];
      var lrcH=lrc.offsetHeight;
      
      let that = this;
      that.stime = audio_.duration;
     
      if (audio_ !== null) {
        //检测播放是否已暂停.audio_.paused 在播放器播放时返回false.
        if (audio_.paused) {
          audio_.play();

          // 控制滚动条
          this.timer = setInterval(() => {
            this.count += 3;
            that.time = audio_.currentTime;
            that.show = false;
            hhead.style.transform = `rotate(${this.count}deg)`;
            scrollm.style.width = (that.time / that.stime) * 5.2 + "rem";
            lrc.style.transfrom=`translateY(-${lrcH})`;
            if (that.time === that.stime) {
              this.num++; // 这个就是暂停
              audio_.pause()
              clearInterval(this.timer);
              this.timer = null;
              that.show = true;
            }
          }, 100);
        } else {
          audio_.pause(); // 这个就是暂停
          clearInterval(this.timer);
          this.timer = null;
          that.show = true;
        }
    }
     }
  },
  
  beforeMount() {
    // this.num++;
    Axios.get(
      "https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1"
    )
      .then(res => {
       
        this.list.push(res.data.data);
        this.list.forEach(item => {
          this.songname = item[this.num].name;
          this.songuse = item[this.num].singer;
          this.songimg = item[this.num].pic;
          this.url = item[this.num].url;
          this.lrcurl=item[this.num].url;
        
          Axios.get(item[this.num].lrc)
            .then(res => {
             
               this.lrc=res.data;
              
            })
            .catch(res => {});
        });
      })
      .catch(res => {
      
      });
  },
  mounted(){
    setTimeout(()=>{
      Lrc.createLrcObj(this.lrc,this.oLRC);
   },1500)
  },
 
    
  components: {}
};
</script>

<style scoped lang="less">
.hjhplay {
  min-height: 100%;
  color: #fff;
  overflow: auto;
  display: flex;
  position: relative;
  z-index: 9999;
  flex-direction: column;
  justify-content: space-between;

  background: url("./../assets/img/happysing/happybg.jpg") no-repeat center
    center #000;
  .zhuangtai {
    height: 0.37rem;
  }
  .hplaynav {
    padding: 0 0.31rem;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .hback {
      display: block;
      width: 0.21rem;
      height: 0.36rem;
      background: url("./../assets/hplayer_slices/nav-icon01@2x.png") no-repeat
        center center;
      background-size: cover;
    }
    .hsongname {
      display: block;
      font-size: 0.36rem;
      line-height: 0.36rem;
      color: #fff;
    }
    .hsonglist {
      display: block;
      width: 0.36rem;
      height: 0.08rem;
      background: url("./../assets/hplayer_slices/nav-icon02@2x.png") no-repeat
        center center;
      background-size: cover;
    }
  }
  .hjhuser {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0.49rem;
    .hjhgang {
      display: block;
      width: 0.15rem;
      height: 0.03rem;
      background: #fff;
    }
    .husername {
      color: #fff;
      font-size: .28rem;
      margin: 0 0.13rem;
      
    }
  }
  .hjhtest {
    width: 4.08rem;
    height: 0.6rem;
    margin: 0 auto;
    margin-top: 0.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      width: 1.2rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 0.3rem;
      background: url("./../assets/hplayer_slices/icon10@2x.png") no-repeat
        center center;
      background-size: cover;
      color: rgb(248, 93, 61);
      font-size: 0.28rem;
    }
  }
  .hjhsonghead {
    width: 3.2rem;
    height: 3.2rem;
    margin: 0.8rem auto 0;
    padding: 0.08rem;
    background: url("./../assets/hplayer_slices/cricle-incon01.png") no-repeat
      center center;
    background-size: cover;
    background-clip: [padding-box];
    box-sizing: border-box;

    border-radius: 50%;
    img {
      width: 3.02rem;
      height: 3.02rem;
      border-radius: 50%;
    }
  }
  .hjhrun {
    animation: run 13s linear infinite;
  }
  // 头像处的的动画
  @keyframes run {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .hjhlrc {
    width: 6rem;
    height: 1.2rem;
    overflow: hidden;
    margin: 0.84rem auto 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    li {
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.28rem;
      text-align: center;
    }
  }
  .hjhshare {
    width: 5.55rem;
    height: 0.45rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      display: block;
      width: 0.44rem;
      height: 0.44rem;
      img {
        width: 0.44rem;
      }
    }
  }
  .hjhscroll {
    padding: 0 0.34rem;
    margin-top: 0.8rem;
    height: 0.22rem;
    display: flex;
    flex-direction: row;
    font-size: .24rem;
    justify-content: space-between;
    align-items: center;
    
    .hjhmp3 {
      position: absolute;
      opacity: 0;
    }
    .hjhscrollp {
      width: 5.2rem;
      height: 0.04rem;
      background: #fff;

      //   overflow: hidden;
      .hjhscrollmove {
        width: 0rem;
        height: 0.04rem;
        background: linear-gradient(right, rgb(254, 44, 95), rgb(246, 105, 52));
        position: relative;

        .hjhscrollball {
          display: block;
          width: 0.08rem;
          height: 0.08rem;
          position: absolute;
          right: 0;
          transform: translateY(-0.02rem);
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 0 0.1rem 0.05rem rgb(254, 44, 95);
        }
      }
    }
  }
  .hjhbtn {
    margin-top: 0.9rem;
    padding: 0 0.5rem 0.98rem 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    a {
      display: block;
      width: 0.44rem;
      height: 0.44rem;
      img {
        width: 0.44rem;
        height: 0.44rem;
      }
    }
    a:nth-child(3) {
      width: 0.56rem;
      height: 0.56rem;
      img {
        width: 0.56rem;
        height: 0.56rem;
      }
    }
  }
}
</style>
