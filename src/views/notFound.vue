<template>
  <div>404</div>
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
</style>
