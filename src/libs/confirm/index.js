import { h, render } from 'vue'
import confirmComponent from './index.vue'
/**
 *
 * @param {*} title 标题（用户没传递内容标题作为内容）
 * @param {*} content 内容
 * @param {*} cancelText 取消文字
 * @param {*} confirmText 确定文字
 */
export const confirm = (title, content, cancelText, confirmText) => {
  return new Promise((resolve, reject) => {
    if (title && !content) {
      content = title
      title = ''
    }
    const close = () => {
      render(null, document.body)
    }
    const cancelHandler = () => {
      reject(new Error('取消按钮点击'))
    }
    const confirmHandler = () => {
      resolve()
    }
    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      close,
      cancelHandler,
      confirmHandler
    })
    render(vnode, document.body)
  })
}
