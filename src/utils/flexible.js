/**
 * 判断当前是否为移动设备 判断依据屏幕宽度是否大于一个指定的宽度（1280）
 */
import { PC_DEVICE_WIDTH } from '@/constants'
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
