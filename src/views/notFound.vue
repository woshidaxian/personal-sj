<template>
  <div class="not-found">
    <img src="./../assets/image/404.png" alt="">
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
.not-found{
  width: 100%;
  height: 100%;
  img{
    height: 80%;
  }
}
</style>
