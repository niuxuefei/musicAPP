<template>
  <div class="search">
    <div class="all">
    <div class="top">
      <div class="tu"><img src="../assets/img/search/icon1.png" width="100%"></div>
      <input type="text" placeholder="搜索音乐你、歌单、歌词" v-model="text">
      <span><router-link to="/hjhMUsic">取消</router-link></span>
    </div> 
    <div class="lunb">
      <img src="../assets/img/search/pic3.png">
      <img src="../assets/img/search/pic1.png">
      <img src="../assets/img/search/pic2.png">
      <img src="../assets/img/search/pic3.png">
      <img src="../assets/img/search/pic1.png">
      <img src="../assets/img/search/pic2.png">
    </div>
    <div class="rem">
      <h3>热门搜索</h3>
      <div class="list">
        <div v-for="(a,b) in list" :class="{'active':a.active}" @click="fn(b)">
          {{a.name}}
        </div>
      </div>
    </div>
    <div class="history">
      <h3>搜索历史<span @click='delall'><img src="../assets/img/search/icon2.png"></span></h3>
      <ul>
        <li v-for="(i,o) in listh">{{i}}<span @click="del(o)"><img src="../assets/img/search/icon3.png"></span></li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:'',
      list:[
        {name:'新歌速递',active:false},
        {name:'成都',active:false},
        {name:'三生三世十里桃花',active:false},
        {name:'迪丽热巴',active:false},
        {name:'邓伦',active:false},
      ],
      listh:['赵雷','林忆莲','王菲','三生三世十里桃花']
    }
  },
  methods: {
    fn(a){
      if(this.list[a].active==true){
        this.list[a].active=false;
        this.text='';
      }else{
        for(let i=0;i<this.list.length;i++){
          this.list[i].active=false;
        }
        this.list[a].active=true;
        this.text=this.list[a].name;
      }
    },
    delall(){
      this.listh=[]
    },
    del(a){
      this.listh.splice(a,1);
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
  .search{
    background: url('../assets/img/happysing/happybg.jpg') center;
    background-size: cover;
    min-height: 100%;
    color: white;
    font-size: 0;
    overflow: auto;
    a{
      color: white;
      text-decoration: none;
    }
    .all{
      height: 100%;
      h3{
        margin: 0;
      }
      ul{
        list-style: none;
        margin: 0;
        padding: 0;
      }
      overflow: hidden;
      background: rgba(255,255,255,.2); 
      .top{
        margin-top: .54rem;
        position: relative;
        width: 100%;
        ::-webkit-input-placeholder { /* WebKit browsers */
          color: rgb(201,201,201);
          font-size: .23rem;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
          color: rgb(201,201,201);
          font-size: .23rem;
        }
        :-ms-input-placeholder { /* Internet Explorer 10+ */
          color: rgb(201,201,201);
          font-size: .23rem;
        }   
        input{
          width: 5.2rem;
          height: .6rem;
          line-height:.6rem;
          border-radius: .3rem;
          background: rgba(255,255,255,.5);
          display: block;
          box-sizing: border-box;
          padding: 0 .8rem;
          margin: 0 auto;
          border: none;
          outline: none;
          font-size: .23rem;
          color: rgb(201,201,201);
        }
        .tu{
          width:.42rem;
          position: absolute;
          top:.1rem;
          left: .33rem;
        }
        span{
          position: absolute;
          top: .1rem;
          font-size: .28rem;
          right: .35rem;
        }
      }
      .lunb{
        width: 36rem;
        font-size: 0;
        margin-left: -4.56rem;
        margin-top: .45rem;
        animation: lunbo 12s 1s ease-in-out infinite;
        img{
          width: 5.27rem;
          height: 2.86rem;
          margin-right: .34rem;
        }
      }
      @keyframes lunbo {
        0%{
          margin-left: -4.56rem;
        }
        33%{
          margin-left: -10.17rem;
        }
        66%{
          margin-left: -15.78rem;
        }
        100%{
          margin-left: -21.39rem;
        }
        // 80%{
        //   margin-left: -27rem;
        // }
        // 100%{
        //   margin-left: -32.61rem;
        // }
      }
      .rem{
        padding: 0 .3rem;
        h3{
          margin-top: .3rem;
          font-weight: 300;
          font-size: .3rem;
        }
        .list{
          overflow: hidden;
          &>div{
            float: left;
            line-height: .68rem;
            border-radius: .34rem;
            font-size: .26rem;
            padding: 0 .32rem;
            margin-right: .34rem;
            margin-top: .26rem;
            border: 2px solid rgb(246,65,77);
          }
          .active{
            background:linear-gradient(right,rgb(241,95,57),rgb(254,44,95));
            border: 2px solid transparent;
          }
        }
      }
      .history{
        margin-top: .6rem;
        padding:0 .3rem;
        h3{
          font-weight: 300;
          font-size: .3rem;
          padding-bottom: .22rem;
          border-bottom: 1px solid rgb(97,97,97);
          img{
            width: .3rem;
            float: right;
            margin-top: .1rem;
          }
        }
        ul{
          margin-bottom: 1rem;
          li{
            padding-left:.3rem;
            font-size: .23rem;
            line-height: .74rem;
            border-bottom: 1px solid rgb(97,97,97);
            span{
              float: right;
              img{
                width:.23rem;
              }
            }
          }
        }

      }
    }
  }
</style>
