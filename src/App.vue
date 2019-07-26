<template>
  <div id="app">
    <!-- <Music></Music> -->
    <!-- <Hjhplayer></Hjhplayer> -->
    <router-view/>
    <footplayer></footplayer>
  </div>
</template>

<script>
import setRem from "./../src/assets/js/rem";
import footplayer from "./components/footerPlayer.vue";
// import Music from "./components/hjhMUsic";
// import Hjhplayer from './components/hjhplayer.vue'
export default {
  name: "App",
  components: {
    footplayer,
    // Hjhplayer,
    // Music
  },
  mounted() {
    setRem.rem();
    window.onresize = setRem.rem;
    setTimeout(() => {
      this.$router.push("lead");
      
    }, 2000);
   
  }
};
</script>

<style lang="less" scoped>
@import url('./../static/reset.css');
#app{
  // min-height: 100%;
  height:100%;
}
html,body{
  background: black;
  color: #fff;
}  
</style>
