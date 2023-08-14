<template>
  <div>
    <div
      v-for="(item, index) in hintDate"
      :key="index"
      class="py-1 pl-1 text-base font-bold text-zinc-500 rounded cursor-pointer duration-300 hover:bg-zinc-200 dark:bg-zinc-900"
      @click="onItemClick(item)"
      v-html="highlightText(item)"
    ></div>
  </div>
</template>
<script>
const EMITS_ITEM_CLICK = 'itemclick'
</script>
<script setup>
import { ref, watch } from 'vue'
import { getHint } from '@/api/pexels'
import { watchDebounced } from '@vueuse/core'
const props = defineProps({
  searchText: {
    type: String,
    required: true
  }
})
const emits = defineEmits([EMITS_ITEM_CLICK])
const hintDate = ref([])
const getHintDate = async () => {
  if (!props.searchText) return
  const { result } = await getHint(props.searchText)
  hintDate.value = result
}
watchDebounced(() => props.searchText, getHintDate, {
  immediate: true,
  debounce: 500
})
// watch(() => props.searchText, getHintDate, {
//   immediate: true
// })
const onItemClick = (item) => {
  emits(EMITS_ITEM_CLICK, item)
}
const highlightText = (text) => {
  const highlightStr = `<span class=" text-zinc-900 dark:text-zinc-200">${props.searchText}</span>`
  const reg = new RegExp(props.searchText, 'gi')
  return text.replace(reg, highlightStr)
}
</script>
<style scope></style>
