<template>
  <div>
    <transition name="fade">
      <div
        v-if="isVisable"
        class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
        @click="close"
      ></div>
    </transition>
    <transition name="up">
      <div
        v-if="isVisable"
        class="w-[80%] fixed top-1/3 left-1/2 translate-x-[-50%] z-50 px-2 py-1.5 rounded-sm border dark:bg-zinc-600 cursor-pointer bg-white dark:bg-zinc-800 xl:w-[35%]"
      >
        <div class="text-lg font-bold text-zinc-900 dark:text-zinc-200 mb-2">
          {{ title }}
        </div>
        <div class="text-base text-zinc-900 dark:text-zinc-200 mb-2">
          {{ content }}
        </div>
        <div class="flex justify-end">
          <my-button type="info" class="mr-2" @click="onCancelClick">
            {{ cancelText }}
          </my-button>
          <my-button type="primary" @click="onConfirmClick">
            {{ confirmText }}
          </my-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import myButton from '../button/index.vue'
const isVisable = ref(false)
const props = defineProps({
  title: {
    type: String
  },
  content: {
    type: String,
    required: true
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
const show = () => {
  isVisable.value = true
}
const duration = '0.5s'
onMounted(() => {
  show()
})
const close = () => {
  isVisable.value = false
  setTimeout(() => {
    if (props.close) {
      props.close()
    }
  }, parseInt(duration.replace('0.', '').replace('s', '') * 100))
}
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
</script>
<style scope lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all v-bind(duration);
}
// 准备进入和离开完成
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all v-bind(duration);
}
// 准备进入和离开完成
.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
