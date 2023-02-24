<template>
  <div>1111111111111111111111111</div>
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
          path: ''
        },
        {
          title: '收藏架', // bug link 
          icon: '',
          path: ''
        },
        {
          title: '工具箱',
          icon: '',
          path: ''
        },
        {
          title: '图库',
          icon: '',
          path: ''
        },
        {
          title: '我',
          icon: '',
          path: ''
        }
      ]
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
</style>
