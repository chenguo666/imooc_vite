<template>
  <div class="relative" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
    <div ref="referenceTarget">
      <slot name="reference"></slot>
    </div>
    <transition name="slide">
      <div
        ref="contentTarget"
        v-show="isVisable"
        class="absolute p-1 z-20 bg-white border rounded-md"
        :style="contentStyle"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
const DELAY_TIME = 1000
const PROP_TOP_LEFT = 'top-left'
const PROP_TOP_RIGHT = 'top-right'
const PROP_BOTTOM_LEFT = 'bottom-left'
const PROP_BOTTOM_RIGHT = 'bottom-right'
const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT
]
</script>
<script setup>
import { computed, nextTick, ref, watch } from 'vue'

const props = defineProps({
  placement: {
    type: String,
    default: PROP_TOP_LEFT,
    validator(val) {
      const result = placementEnum.includes(val)

      if (!result) {
        throw new Error(
          `你的placement 必须是 ${placementEnum.join('.')}中的一个`
        )
      }
      return result
    }
  }
})
let timeout
const isVisable = ref(false)
const onMouseenter = () => {
  isVisable.value = true
  if (timeout) {
    clearTimeout(timeout)
  }
}
const onMouseleave = () => {
  timeout = setTimeout(() => {
    isVisable.value = false
    timeout = null
  }, DELAY_TIME)
}

const referenceTarget = ref(null)
const contentTarget = ref(null)
const useElementSize = (target) => {
  if (!target) return {}
  return {
    width: target.offsetWidth,
    height: target.offsetHeight
  }
}
const contentStyle = ref({
  top: 0,
  left: 0
})

watch(isVisable, (val) => {
  if (!val) return
  nextTick(() => {
    switch (props.placement) {
      case PROP_TOP_LEFT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_TOP_RIGHT:
        contentStyle.value.top = 0
        contentStyle.value.left =
          useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          -useElementSize(contentTarget.value).width + 'px'
        break
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top =
          useElementSize(referenceTarget.value).height + 'px'
        contentStyle.value.left =
          useElementSize(contentTarget.value).width + 'px'
        break

      default:
        break
    }
  })
})
</script>
<style scope>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
