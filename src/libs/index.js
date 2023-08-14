// import svgIcon from './svg-icon/index.vue'
// import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'

export { confirm } from './confirm/index'
export { message } from './message/index'
/**
 * 自动注册该目录下的所有组件
 */
export default {
  install(app) {
    // console.log('app', app)
    // app.component('my-svg-icon', svgIcon)
    // app.component('my-popup', popup)
    // 1. 获取当前路径下的所有的index.vue
    const components = import.meta.glob('./*/index.vue')
    // 2. 遍历获取到的组件
    for (const [fullPath, fn] of Object.entries(components)) {
      const name = 'my-' + fullPath.replace('./', '').split('/')[0]
      // 3. 注册
      app.component(name, defineAsyncComponent(fn))
    }
  }
}
