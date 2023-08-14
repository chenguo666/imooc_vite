import { h, render } from 'vue'
import messageComponent from './index.vue'

export const message = (type, content, duration = 3000, destory) => {
  const onDistory = () => {
    render(null, document.body)
  }
  const vnode = h(messageComponent, {
    type,
    content,
    duration,
    destory: onDistory
  })
  render(vnode, document.body)
}
