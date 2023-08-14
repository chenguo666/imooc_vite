/**
 * 判断当前是否为移动设备 判断依据屏幕宽度是否大于一个指定的宽度（1280）
 */
import { PC_DEVICE_WIDTH } from '@/constants'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
  // return width.value < PC_DEVICE_WIDTH
})

/**
 * 动态指定 rem 基准值 最大不能超过 40px
 * 根据用户屏幕宽度  把计算出来的值赋值给根标签的fontsize大小
 */
export const useREM = () => {
  const MAX_FONT_SIZE = 40
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    // 屏幕宽度 除以 10
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    html.style.fontSize = fontSize + 'px'
  })
}
