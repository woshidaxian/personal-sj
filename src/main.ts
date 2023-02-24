import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs'
import 'element-plus/dist/index.css'

import './assets/css/common.scss'
import './assets/css/font.scss'
import './assets/css/keyframes.scss'


const app = createApp(App)
app.use(ElementPlus, {locale: zhCn})
app.use(store).use(router).mount('#app')

// 公共组件注册，请注意组件内name命名格式，大写开头
const ctx = require.context('./components/', false, /\.vue$/)
ctx.keys().forEach(item=>{
  app.component('v'+ctx(item).default.name, ctx(item).default)
})