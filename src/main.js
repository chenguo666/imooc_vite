import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import store from './store'
import { useREM } from '@/utils/flexible'
import mLibs from './libs'
import useTheme from './utils/theme'
// 注册svg-icon
import 'virtual:svg-icons-register'
// 根据网页宽度 跳转根字体大小
useTheme()
useREM()
createApp(App).use(router).use(store).use(mLibs).mount('#app')
