import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)
app.use(store).use(router).mount('#app')

// 公共组件注册，请注意组件内name命名格式，大写开头
const ctx = require.context('./components/', false, /\.vue$/)
ctx.keys().forEach(item=>{
  app.component('v'+ctx(item).default.name, ctx(item).default)
})