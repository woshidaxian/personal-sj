<template>
  <div class="header-content flex-row-between" :style="`background: rgba(255, 255, 255, ${opacity})`">
    <div class="logo">
      <img src="./../assets/image/logo.png" alt="">
    </div>
    <div class="nav-list flex-row-center">
      <div
        v-for="(item, index) in navList"
        :key="index"
        class="nav-item"
        :class="{'nav-item-active': activePath==item.path, 'nav-item-black': opacity>0.9}"
      >{{item.title}}</div>
    </div>
    <div class="do-box flex-row-center">
      <div class="sign-in">Sign In</div>
      <div class="blank">&</div>
      <div class="sign-up">Sign Up</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, inject, onBeforeMount, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Header',
  components: {},
  setup () {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      navList: [
        {
          title: 'Home', // 倒计时、天气、当前时间、每日一言
          icon: '',
          path: '/frontIndex/home'
        },
        {
          title: '收藏架', // bug link 
          icon: '',
          path: '/frontIndex/collect'
        },
        {
          title: '工具箱',
          icon: '',
          path: '/frontIndex/tool'
        },
        {
          title: '图  库',
          icon: '',
          path: '/frontIndex/images'
        },
        {
          title: '足  迹',
          icon: '',
          path: '/frontIndex/map'
        },
        {
          title: '我',
          icon: '',
          path: '/frontIndex/my'
        }
      ],
      activePath: '/frontIndex/home',
      opacity: 0
    })
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })

    onMounted(()=>{
      window.addEventListener('scroll', handleScroll, true)
    })
    
    const handleScroll = function (e: any) {
      state.opacity = e.target.scrollTop/400
    }


    

    return {
      ...toRefs(state),
      router,
      store,
    }
  }
})
</script>
<style lang='scss' scoped>
.header-content{
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0px 0px 49px 0px #00000066;
  .logo{
    width: 200px;
    text-align: left;
    img{
      width: 40px;
      margin-left: 20px;
    }
  }
  .nav-list{
    flex: 1;
    height: 100%;
    .nav-item{
      padding: 0 30px;
      font-family: AliHYAiHei;
      color: rgb(255, 255, 255);
      font-size: 14px;
      letter-spacing: 2px;
    }
    .nav-item-black{
      color: black;
    }
  }
  .do-box{
    width: 200px;
    font-family: PingFang SC;
    .blank{
      margin: 0 15px;
      font-weight: bold;
    }
    .sign-in{
      font-size: 16px;
      font-family: PingFang SC;
      cursor: pointer;
      transition: all .4s;
      &:hover{
        animation: colorFlink infinite 1s;
      }
    }
    .sign-up{
      font-size: 16px;
      color: grey;
      cursor: pointer;
      transition: all .4s;
      &:hover{
        animation: colorFlink infinite 1s;
      }
    }
  }
}
</style>
