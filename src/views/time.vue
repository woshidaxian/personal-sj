<template>
  <div class="time-box" :style="`color: ${color}`">{{ time.hour }}:{{ time.min }}:{{ time.sec }}</div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, inject, onBeforeMount, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: '',
  components: {},
  setup () {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      time: {
        hour: '',
        min: '',
        sec: ''
      } as time1,
      timer: null as any,
      color: ''
    })
    interface time1{
      hour: string | number,
      min: string | number,
      sec: string | number
    }
    onBeforeMount(()=>{
      console.log('onBeforeMount')
    })

    onMounted(()=>{
      state.timer = setInterval(() => {
        let d = new Date()
        state.time = {
          hour: d.getHours()<10?'0'+ d.getHours(): d.getHours(),
          min: d.getMinutes()<10?'0'+ d.getMinutes(): d.getMinutes(),
          sec: d.getSeconds()<10?'0'+ d.getSeconds(): d.getSeconds()
        }
        let n1 = Math.ceil(Math.random()*255)
        let n2 = Math.ceil(Math.random()*255)
        let n3 = Math.ceil(Math.random()*255)
        state.color = `rgba(${n1}, ${n2}, ${n3})`
      }, 1000)
    })
    onBeforeUnmount(()=>{
      if(state.timer){
        clearInterval(state.timer)
      }
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
.time-box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  font-weight: bold;
  font-family: digital-number;
  transition: all .3s;
}
</style>
