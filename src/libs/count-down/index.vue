<template>
  <div>
    <slot>
      <p class="">
        {{ showTime }}
      </p>
    </slot>
  </div>
</template>
<script>
const EMIT_FINISH = 'finish'
const EMIT_CHANGE = 'change'
const INETERVAL_COUNT = 1000
</script>
<script setup>
import { watch, ref, onUnmounted, computed } from 'vue'
import dayjs from './utils'
const props = defineProps({
  time: {
    type: Number,
    required: true
  },
  format: {
    type: String,
    default: 'HH:mm:ss'
  }
})
const emit = defineEmits([EMIT_FINISH, EMIT_CHANGE])
let interval
const duration = ref(0)
const start = () => {
  close()
  interval = setInterval(() => {
    durationFn()
  }, 1000)
}
const durationFn = () => {
  duration.value -= INETERVAL_COUNT
  emit(EMIT_CHANGE)
  if (duration.value <= 0) {
    duration.value = 0
    emit(EMIT_FINISH)
  }
}
const close = () => {
  if (interval) {
    clearInterval(interval)
  }
}
onUnmounted(() => {
  close()
})
watch(
  () => props.time,
  (val) => {
    duration.value = val
    console.log(duration.value, ' duration.value')
    start()
  },
  {
    immediate: true
  }
)

const showTime = computed(() => {
  return dayjs.duration(duration.value).format(props.format)
})
</script>
<style scope></style>
