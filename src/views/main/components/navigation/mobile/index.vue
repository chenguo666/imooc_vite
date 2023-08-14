<template>
  <div class="bg-white dark:bg-zinc-900 sticky top-0 left-0 z-10 duration-500">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-500 overflow-hidden"
    >
      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 dark:bg-zinc-300 rounded-lg duration-200"
      ></li>
      <!-- 汉堡按钮 -->
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white dark:bg-zinc-900 z-20 shadow-l-white dark:shadow-l-zinc"
        @click="onShowPopup"
      >
        <my-svg-icon name="hamburger" class="w-1.5 h-1.5"></my-svg-icon>
      </li>
      <!-- items -->
      <li
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :ref="setItemRef"
        @click="onItemClick(item)"
        :class="{
          'text-zinc-100': $store.getters.currentCategoryIndex === index
        }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
  <my-popup v-model="isVisable">
    <menu-vue @onItemClick="onItemClick"></menu-vue>
  </my-popup>
</template>
<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'
import { useStore } from 'vuex'
const store = useStore()
// defineProps({
//   data: {
//     type: Array,
//     required: true
//   }
// })

// 滑块
const sliderTarget = ref()
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})
// const currentCategoryIndex = ref(0)
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
// 数据改变之后 DOM 变化之前
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取ul元素
const ulTarget = ref(null)
// 通过vueuse useScorll 获取响应式的scroll滚动距离
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(
  () => store.getters.currentCategoryIndex,
  (val) => {
    const { left, width } = itemRefs[val].getBoundingClientRect()
    sliderStyle.value = {
      transform: `translateX(${ulScrollLeft.value + left - 10}px)`,
      width: width + 'px'
    }
  }
)
const onItemClick = (item) => {
  store.commit('app/changeCurrentCategory', item)
  isVisable.value = false
}
// 控制popup展示
const isVisable = ref(false)
const onShowPopup = () => {
  isVisable.value = true
}
</script>
<style scope></style>
