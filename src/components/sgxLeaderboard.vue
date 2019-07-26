<template>
  <!-- <div style="background:black"> -->
  <div style='background:url(../../static/sgxLeaderboard/imgs/bgc.jpg)' class="all">
    <header>
      <router-link to="/hjhMUsic">
      <span>
        <img src="../../static/sgxLeaderboard/img/ranked-icon-1.png@2x.png" alt>
      </span>
      </router-link>
      <span>排行榜</span>
      <router-link to="/search">
      <span>
        <img src="../../static/sgxLeaderboard/img/ranked-icon-2.png@2x.png" alt>
      </span>
      </router-link>
    </header>
    <div class="nav">
      <ul>
        <h2>乐球官方榜</h2>
        <li>
          <div>
            <a href>
              <img src="../../static/sgxLeaderboard/img/img-1.png@2x.png" alt>
            </a>
          </div>
          <div>
          <p v-for="(item,index) in arr"><a :href=item.url>{{index+1}}. {{item.name}} - {{item.singer}}</a></p>
          </div>
        </li>
        <li>
          <div>
            <a href>
              <img src="../../static/sgxLeaderboard/img/img-2.png@2x.png" alt>
            </a>
          </div>
          <div>
           <p v-for="(item,index) in arr1"><a :href=item.url>{{index+1}}. {{item.name}} - {{item.singer}}</a></p>
          </div>
        </li>
        <li>
          <div>
            <a href>
              <img src="../../static/sgxLeaderboard/img/img-3.png@2x.png" alt>
            </a>
          </div>
          <div>
          <p v-for="(item,index) in arr2"><a :href=item.url>{{index+1}}. {{item.name}} - {{item.singer}}</a></p>
          </div>
        </li>
        <li>
          <div>
            <a href>
              <img src="../../static/sgxLeaderboard/img/img-4.png@2x.png" alt>
            </a>
          </div>
          <div>
           <p v-for="(item,index) in arr3"><a :href=item.url>{{index+1}}. {{item.name}} - {{item.singer}}</a></p>
          </div>
        </li>
        <li>
          <div>
            <a href>
              <img src="../../static/sgxLeaderboard/img/img-5.png@2x.png" alt>
            </a>
          </div>
          <div>
          <p v-for="(item,index) in arr4"><a :href=item.url>{{index+1}}. {{item.name}} - {{item.singer}}</a></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import setRem from "../../static/sgxLeaderboard/rem.js";
import Axios from "../../node_modules/axios/dist/axios.js";
// import Axios from "./js/axios.min.js";
export default {
  
  data() { 
    return {
       arr:[],
       arr1:[],
       arr2:[],
       arr3:[],
       arr4:[],
    };
  },
  created() {
    Axios.get("https://v1.itooi.cn/tencent/topList?id=26&pageSize=100&page=0&format=1")
      .then(res => {

        this.arr= res.data.data.slice(0,3);
        this.arr1=res.data.data.slice(4,7);
        this.arr2=res.data.data.slice(8,11);
        this.arr3=res.data.data.slice(12,15);
        this.arr4=res.data.data.slice(16,19);
        

        console.log(this.arr);
        
        // console.log(this.arr1);
      })
      .catch(err => {
        console.log(err); 
      });
  },
  mounted(){
    // setRem.set();
    // window.onresize = setRem.set;
  
  },
  components: {}
  
};

</script>

<style scoped lang='less'>
// @import '../../static/sgxLeaderboard/sgxLeaderboard.css';
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.all{
  min-height: 100%;
  overflow: hidden;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
header {
  margin-top: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0 0.33rem;
  font-size: 0;
}
header a {
  width: 0.5rem;
  height: 0.5rem;
  padding-top: 0.05rem;
}
header span:nth-child(1),
header span:nth-child(3) {
  width: 0.34rem;
  height: 0.34rem;
}
header span:nth-child(1) img,
header span:nth-child(3) img {
  margin: 0 auto;
  width: 0.34rem;
  height: 0.34rem;
}
header span:nth-child(2) {
  font-size: 0.34rem;
}
.nav ul {
  padding: 0 0.47rem 0 0.32rem;
}
.nav ul h2 {
  font-size: 0.3rem;
  color: white;
  margin: 0.45rem 0 0.18rem 0;
}
.nav ul li {
  margin-top: 0.38rem;
  display: flex;
}
.nav ul li div:nth-child(1) {
  flex: 1;
}
.nav ul li div:nth-child(1) img {
  width: 1.7rem;
  height: 1.7rem;
}
.nav ul li div:nth-child(2) {
  width: 5.03rem;
  height: 1.7rem;
  overflow: hidden;
  flex: 3;
}
.nav ul li div:nth-child(2) p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0.16rem 0 0.16rem 0.33rem;
  font-size: 0.26rem;
  text-align: left;
  color: white;
}
.nav ul li div:nth-child(2) p a {
  color: white;
  text-decoration: none;
}

</style>
