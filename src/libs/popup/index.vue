<template>
  <div>
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div
          v-if="isVisable"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isVisable = false"
        ></div>
      </transition>
      <!-- 内容 -->
      <transition name="popup-down-up">
        <div
          v-if="isVisable"
          v-bind="$attrs"
          class="w-screen bg-white dark:bg-zinc-800 z-50 fixed bottom-0 left-0"
        >
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>
<script setup>
import { watch } from 'vue'
import { useScrollLock, useVModel } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})
defineEmits(['update:modelValue'])

const isVisable = useVModel(props)
// 锁定滚动
const isLocked = useScrollLock(document.body)
watch(
  isVisable,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>
<style lang="scss" scope>
.fade-enter-active {
  transition: all 0.3s;
}
.fade-leave-active {
  transition: all 0.3s;
}
// 准备进入和离开完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}
.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
