<template>
  <div>
    <my-infinite
      v-model="isLoading"
      :isFinished="isFinished"
      @onLoad="getPexlesListData"
    >
      <my-waterfall
        class="px-1 w-full"
        :data="pexelsList"
        :nodeKey="'id'"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
      >
        <template v-slot="{ item, width }">
          <item-vue :data="item" :width="width" @click="onToPins"></item-vue>
        </template>
      </my-waterfall>
    </my-infinite>
    <!-- `    <item-vue
        v-for="(item, index) in pexelsList"
        :key="item.id"
        :data="item"
      ></item-vue> -->
    <!-- 详情内容展示 -->
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <pins-vue v-if="isVisiblePins" :id="currentPins.id"></pins-vue>
    </transition>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { getPexlesList } from '@/api/pexels'
import itemVue from './item.vue'
import pinsVue from '../../../pins/components/pins.vue'
import { isMobileTerminal } from '@/utils/flexible'
import { useStore } from 'vuex'
import gsap from 'gsap'
import { useEventListener } from '@vueuse/core'
const store = useStore()
let query = {
  page: 1,
  size: 20
}
const isLoading = ref(false)
const isFinished = ref(false)
const isVisiblePins = ref(false)
const pexelsList = ref([])
const getPexlesListData = async () => {
  if (isFinished.value) {
    return
  }

  if (pexelsList.value.length) {
    query.page += 1
  }

  const res = await getPexlesList(query)
  if (query.page === 1) {
    pexelsList.value = res.list
  } else {
    pexelsList.value.push(...res.list)
  }
  if (pexelsList.value.length === res.total) {
    isFinished.value = true
  }
  isLoading.value = false
}
// getPexlesListData()
const resetQuery = (newquery) => {
  query = { ...query, ...newquery }
  isFinished.value = false
  pexelsList.value = []
}
watch(
  () => store.getters.currentCategory,
  (currentCategory) => {
    resetQuery({
      page: 1,
      size: 20,
      categoryId: currentCategory.id
    })
  }
)
watch(
  () => store.getters.searchText,
  (val) => {
    resetQuery({
      page: 1,
      searchText: val
    })
  }
)
const currentPins = ref({})
const onToPins = (item) => {
  // console.log(item)
  history.pushState(null, null, `/pins/${(null, item.id)}`)
  isVisiblePins.value = true
  currentPins.value = item
}

useEventListener(window, 'popstate', () => {
  isVisiblePins.value = false
})
const beforeEnter = (el) => {
  gsap.set(el, {
    scaleX: 0,
    scaleY: 0,
    transformOrigin: '0 0',
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    opacity: 0
  })
}
const enter = (el, done) => {
  gsap.to(el, {
    scaleX: 1,
    duration: 0.3,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    opacity: 1,
    onComplete: done
  })
}
const leave = (el, done) => {
  gsap.to(el, {
    duration: 0.3,
    scaleX: 0,
    scaleY: 0,
    translateX: currentPins.value.location?.translateX,
    translateY: currentPins.value.location?.translateY,
    opacity: 0,
    onComplete: done
  })
}
</script>
<style scope></style>
