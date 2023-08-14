<template>
  <div
    ref="containerTarget"
    class="group relative p-0.5 rounded-xl border-white dark:border-zinc-200 duration-500 hover:bg-red-100/40"
  >
    <div>
      <my-svg-icon
        name="search"
        class="w-2 h-2 absolute translate-y-[-50%] top-[50%] left-2"
        color="#707070"
      ></my-svg-icon>
      <input
        type="text"
        class="block w-full h-[44px] pl-4 outline-0 bg-zinc-100 dark:bg-zinc-800 caret-zinc-400 rounded-xl text-zinc-900 dark:text-zinc-300 tracking-wide text-xs font-semibold border border-zinc-100 dark:border-zinc-700 duration-500 focus:border-red-300 group-hover:bg-white dark:group-hover:bg-zinc-900 group-hover:border-zinc-200 dark:group-hover:border-zinc-700"
        placeholder="搜索"
        v-model="inputValue"
        @keyup.enter="onSearchHandler"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
      />
      <my-svg-icon
        v-show="inputValue"
        name="input-delete"
        class="w-2 h-2 absolute translate-y-[-50%] top-[50%] right-9 duration-500"
        @click="onClearClick"
      ></my-svg-icon>
      <div
        class="w-[1px] h-1.5 opacity-0 absolute translate-y-[-50%] top-[50%] duration-500 right-[62px] duration-500 bg-zinc-200 group-hover:opacity-100"
      ></div>
      <my-button
        class="opacity-0 duration-500 absolute translate-y-[-50%] top-[50%] right-1 rounded-[999px] group-hover:opacity-100"
        icon="search"
        iconColor="#ffffff"
        @click="onSearchHandler"
      ></my-button>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        v-if="$slots.dropdown"
        v-show="isFocus"
        class="max-h-[368px] w-full text-base overflow-auto bg-white dark:bg-zinc-800 absolute z-20 left-0 top-[56px] p-2 rounded border border-zinc-200 dark:border-zinc-800 duration-200 hover:shadow-2xl scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
      >
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
const EMIT_UPDATE_MODELVALUE = 'update:modelValue'
const EMIT_SEARCH = 'search'
const EMIT_CLEAR = 'clear'
const EMIT_INPUT = 'input'
const EMIT_FOCUS = 'focus'
const EMIT_BLUR = 'blur'
</script>
<script setup>
import { ref, watch } from 'vue'
import { useVModel, onClickOutside } from '@vueuse/core'
const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})
const emits = defineEmits([
  EMIT_UPDATE_MODELVALUE,
  EMIT_SEARCH,
  EMIT_CLEAR,
  EMIT_INPUT,
  EMIT_FOCUS,
  EMIT_BLUR
])
const inputValue = useVModel(props)
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val)
})

const onClearClick = () => {
  inputValue.value = ''
  emits(EMIT_CLEAR, '')
}
const onSearchHandler = () => {
  emits(EMIT_SEARCH, inputValue.value)
}
const onFocusHandler = () => {
  isFocus.value = true
  emits(EMIT_FOCUS)
}
const onBlurHandler = () => {
  // isFocus.value = false
  emits(EMIT_BLUR)
}
const isFocus = ref(false)
const containerTarget = ref(null)
onClickOutside(containerTarget, () => {
  isFocus.value = false
})
</script>
<style scope>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
