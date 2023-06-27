<template>
  <button
    class="text-sm text-center rounded duration-150 flex justify-center items-center"
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      {
        'active:scale-105': isActiveAnim
      }
    ]"
    @click="onBtnClick"
  >
    <my-svg-icon
      v-if="loading"
      name="loading"
      class="w-2 h-2 animate-spin mr-1"
    ></my-svg-icon>
    <my-svg-icon
      v-if="icon"
      :name="icon"
      class="m-auto"
      :class="[sizeEnum[sizeKey].icon]"
      :color="iconColor"
      :fillClass="iconClass"
    ></my-svg-icon>
    <slot v-else></slot>
  </button>
</template>
<script>
const EMITS_CLICK = 'click'
const typeEnum = {
  primary:
    'text-white bg-zinc-800 dark:bg-zinc-200 hover:bg-zinc-900 dark:hover:bg-zinc-700 active:bg-zinc-800 dark:active:bg-zinc-700',
  main: 'text-white bg-main dark:bg-zinc-900 hover:bg-hover-main dark:hover:bg-zinc-700 active:bg-main dark:active:bg-zinc-700',
  info: ' text-zinc-800 dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 active:bg-zinc-200 dark:active:bg-zinc-700'
}
const sizeEnum = {
  default: {
    button: 'w-8 h-4 text-base',
    icon: ''
  },
  'icon-default': {
    button: 'w-4 h-4',
    icon: 'w-1.5 h-1.5'
  },
  small: {
    button: 'w-7 h-3 text-base',
    icon: ''
  },
  'icon-small': {
    button: 'w-3 h-3 ',
    icon: 'w-1.5 h-1.5'
  }
}
</script>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: String,
  iconColor: String,
  iconClass: String,
  type: {
    type: String,
    default: 'main',
    validator(val) {
      const keys = Object.keys(typeEnum)
      const result = keys.includes(val)
      if (!result) {
        throw new Error(`type 必须是 ${keys.join(',')}中的一个`)
      }
      return result
    }
  },
  size: {
    type: String,
    default: 'default',
    validator(val) {
      const keys = Object.keys(sizeEnum).filter((key) => !key.includes('icon'))
      const result = keys.includes(val)
      if (!result) {
        throw new Error(`size 必须是 ${sizeEnum.join(',')}中的一个`)
      }
      return result
    }
  },
  isActiveAnim: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits([EMITS_CLICK])
const sizeKey = computed(() => {
  return props.icon ? 'icon-' + props.size : props.size
})
const onBtnClick = () => {
  if (props.loading) return
  emits(EMITS_CLICK)
}
</script>
<style scope></style>
