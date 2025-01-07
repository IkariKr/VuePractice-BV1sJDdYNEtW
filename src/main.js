import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

//引入公共样式
import './assets/css/common.css'
//淘宝无限适配方案
import './assets/js/flexible.js'

//引入字体图标css文件
import './assets/css/iconfont.css'

createApp(App).use(router).mount('#app')
