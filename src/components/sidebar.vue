<template>
  <div>
      <!-- 侧边栏 -->
        <div class="sidebar" :class="{'sidebar':mas,'act':!mas}">

            <div class="dingbu">
                <ul>
                    <li><span class="ling"></span></li>
                    <li><p>签到</p></li>
                    <li><span class="shezhi"></span></li>
                </ul>
            </div>

            <div class="mengban" @click="fnn"></div>

            <div class="text">
                <p class="title_">Peffectture</p>
                <p class="new_">一个爱听音乐的new<span class="bianji"></span></p>
                <ul>
                    <li>
                        <p>39</p>
                        <span>粉丝</span>
                    </li>
                    <li>
                        <p>14</p>
                        <span>关注</span>
                    </li>
                    <li>
                        <p>127</p>
                        <span>动态</span>
                    </li>
                </ul>
            </div>


        </div>


  </div>
</template>

<script>
export default {
    props:['mas'],
  data() {
    return {
        bbc:false,
    }
  },
  methods: {
      fnn(){
          this.$emit('lan',true);
      }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
    .sidebar{
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: url('./../assets/sidebar/beijing.png') center center no-repeat;
        background-size: cover;
        position: absolute;
        z-index: 9999;
        top: 0rem;
        p{
            margin-bottom: 0rem;
        }
        a{
            text-decoration: none;
        }

        ul{
            list-style: none;
        }
        .dingbu{
            margin-top: .48rem;
            ul{
                overflow: hidden;
                list-style: none;
                padding-left: .8rem;
                li{
                    p{
                        font-size: .3rem;
                    }
                    float: left;
                    line-height: .5rem;
                }
            }
            
            .ling{
                width: .48rem;
                height: .48rem;
                display: block;
                background: url('./../assets/sidebar/icon2@2x.png.png')no-repeat center center;
                background-size: cover;
                margin-left: -.2rem;
            }
            .shezhi{
                width: .48rem;
                height: .48rem;
                display: block;
                background: url('./../assets/sidebar/icon1@2x.png.png')no-repeat center center;
                background-size: cover;
                position: absolute;
                right: 0;
                margin-right: .48rem;
            }
            p{
                margin-left: .27rem;
                margin-top: .01rem;
            }
        }
        .mengban{
            width: .97rem;
            height: 11.76rem;
            background: rgba(0,0,0,.7);
            float: right;
            margin-top: .04rem;
            z-index: 3;
        }

        .text{
            position: absolute;
            bottom: .8rem;
            width: 6rem;
            .title_{
                font-size: .5rem;
                margin-right: 2rem;
            }
            .new_{
                // margin-top:.3rem;
            }
            ul{
                overflow: hidden;    
                text-align: center;
                width: 6rem;
                padding-left: .1rem;
                // background: red;
                li{
                    float: left;
                    width: 2rem;
                    p{
                        font-size: .8rem;
                    }
                }
            }
            .bianji{
                width: .48rem;
                height: .48rem;
                display: block;
                background: url('./../assets/sidebar/icon3@2x.png.png')no-repeat center center;
                background-size: cover;
                margin-left: -0.5rem;
                float: right;
                margin-right: 1.5rem;
            }
        }
    }
</style>
