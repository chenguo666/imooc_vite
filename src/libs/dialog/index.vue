<template>
  <div>
    <transition name="fade">
      <div
        v-if="isVisible"
        @click="close"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
      ></div>
    </transition>
    <transition name="up">
      <div
        v-if="isVisible"
        class="max-w-[80%] max-h-[80%] overflow-auto fixed top-[10%] left-[50%] translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:border-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:min-w-[35%]"
      >
        <!-- 标题 -->
        <div
          v-if="title"
          class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2"
        >
          {{ title }}
        </div>
        <!-- 内容 -->
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-2">
          <slot></slot>
        </div>
        <div class="flex justify-end" v-if="cancelHandler || confirmHandler">
          <my-button type="info" class="mr-2" @click="onCancelClick">{{
            cancelText
          }}</my-button>
          <my-button type="primary" @click="onConfirmClick">{{
            confirmText
          }}</my-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { useVModel } from '@vueuse/core'
const duration = '0.5s'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  cancelHandler: {
    type: Function
  },
  confirmHandler: {
    type: Function
  },
  close: {
    type: Function
  }
})
defineEmits(['update:modelValue'])

const isVisible = useVModel(props)
const onCancelClick = () => {
  if (props.cancelHandler) {
    props.cancelHandler()
  }
  close()
}
const onConfirmClick = () => {
  if (props.confirmHandler) {
    props.confirmHandler()
  }
  close()
}
const close = () => {
  isVisible.value = false
  if (props.close) {
    props.close()
  }
}
</script>
<style scope lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all v-bind(duration);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all v-bind(duration);
}
.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
