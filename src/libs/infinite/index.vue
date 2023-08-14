<template>
  <div>
    <slot />
    <div ref="loadingTarget" class="h-6 py-4">
      <my-svg-icon
        v-show="loading"
        class="w-4 h-4 mx-auto animate-spin"
        name="infinite-load"
      ></my-svg-icon>
      <p v-if="isFinished" class="text-center text-base text-zinc-400">
        已经没有更多数据了！
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useVModel, useIntersectionObserver } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  isFinished: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['onLoad', 'update:modelValue'])
const loading = useVModel(props)

const loadingTarget = ref(null)
const targetIsIntersecting = ref(false)
useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsIntersecting.value = isIntersecting
  emitLoad()
})
const emitLoad = () => {
  if (targetIsIntersecting.value && !loading.value && !props.isFinished) {
    loading.value = true
    emits('onLoad')
  }
}
watch(loading, (val) => {
  setTimeout(() => {
    emitLoad()
  }, 100)
})
</script>
<style scope></style>
