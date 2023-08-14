// import lazy from './modules/lazy'
// export default {
//   install(app) {
//     app.directive('lazy', lazy)
//   }
// }

// import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'
/**
 * 自动注册该目录下的所有组件
 */
export default {
  install(app) {
    // console.log('app', app)
    // app.component('my-svg-icon', svgIcon)
    // app.component('my-popup', popup)
    // 1. 获取当前路径下的所有的index.vue
    const directives = import.meta.globEager('./modules/*.js')
    // 2. 遍历获取到的组件
    for (const [key, value] of Object.entries(directives)) {
      const arr = key.split('/')
      const name = arr[arr.length - 1].replace('.js', '')
      // 3. 注册
      app.directive(name, value.default)
    }
  }
}
