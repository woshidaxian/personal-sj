<template>
  <div class="content">
    <div class="top-bar">
      <div class="top-bar-bg"></div>
    </div>
    <div class="center-bar"></div>
    <div class="footer-bar"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, inject, onBeforeMount, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: '',
  components: {},
  setup () {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      // 天气、日历、提醒、  每日一言、倒计时、快捷导航（底部）、相册集锦
    })
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })

    onMounted(()=>{
      console.log('onMounted')
    })

    return {
      ...toRefs(state),
      router,
      store,
    }
  }
})
</script>
<style lang='scss' scoped>
.content{
  width: 100%;
  height: 100%;
  overflow: auto;
  &::-webkit-scrollbar{
    display: none;
  }
}
.top-bar-bg{
  width: 100%;
  height: 100vh;
  // background: url('./../../assets/image/earth.jpg') no-repeat;
  border: 1px solid green;
  background-size: cover;
  background-position: center;
}
.center-bar{
  width: 100%;
  height: 1000px;
}
.footer-bar{
  width: 100%;
  height: 200px;
  background: rgba(207, 207, 207, 0.5);
}
</style>
