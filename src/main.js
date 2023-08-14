import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router'
import store from './store'
import { useREM } from '@/utils/flexible'
import mLibs from './libs'
import useTheme from './utils/theme'
import mDirecttive from './directives'
// 注册svg-icon
import 'virtual:svg-icons-register'
// 根据网页宽度 跳转根字体大小
import './permssion'
useTheme()
useREM()

const app = createApp(App)
if (process.env.NODE_ENV === 'development') {
  app.config.performance = true
}
app.use(router)
app.use(store)
app.use(mLibs)
app.use(mDirecttive)
app.mount('#app')
// 小文件下载 file-saver
// 大文件下载 streamsaver
