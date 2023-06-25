// import svgIcon from './svg-icon/index.vue'
// import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'
export default {
  install(app) {
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
