<template>
  <my-button @click="showHandler">show</my-button>
  <div>
    <transition name="test">
      <div v-show="ishow">div 123 1231</div>
    </transition>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const ishow = ref(false)
const showHandler = () => {
  if (ishow.value) {
    ishow.value = false
  } else {
    ishow.value = true
  }
}
</script>
<style scope>
.test-enter-active,
.test-leave-active {
  transition: all 0.5s;
}
.test-enter-from,
.test-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
