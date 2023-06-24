import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import { useREM } from '@/utils/flexible'
import mLibs from './libs'
// 注册svg-icon
import 'virtual:svg-icons-register'
useREM()
createApp(App).use(router).use(mLibs).mount('#app')
