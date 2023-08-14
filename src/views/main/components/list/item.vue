<template>
  <div class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1">
    <div
      class="relative w-full rounded cursor-zoom-in group"
      :style="{
        background: randomRGB()
      }"
      @click="onToPinsClick"
    >
      <img
        ref="imgTarget"
        v-lazy
        class="w-full rounded bg-transparent"
        :src="data.photo"
        :style="{
          height: (width / data.photoWidth) * data.photoHeight + 'px'
        }"
        alt=""
      />
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
      >
        <my-button class="absolute top-1.5 left-1.5">分享</my-button>
        <my-button
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></my-button>
        <my-button
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="download"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
          @click="onDownload"
        ></my-button>
        <my-button
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="full"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
          @click="onImgFullScreen"
        ></my-button>
      </div>
    </div>
    <p class="text-sm mt-1 font-blod text-zinc-900 dark:text-zinc-300 px-1">
      {{ data.title }}
    </p>
    <div class="flex items-center mt-1 px-1">
      <img :src="data.avatar" alt="" class="h-2 w-2 rounded-full" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>
<script setup>
import { randomRGB } from '@/utils/color'
import { message } from '@/libs'
import { saveAs } from 'file-saver'
import { ref, computed } from 'vue'
import { useElementBounding, useFullscreen } from '@vueuse/core'
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  width: {
    type: Number
  }
})
const onDownload = () => {
  message('success', '开始下载咯 ！')
  setTimeout(() => {
    saveAs(props.data.photoDownLink)
  }, 500)
}
const imgTarget = ref(null)
const { enter: onImgFullScreen } = useFullscreen(imgTarget)
const emits = defineEmits(['click'])

const {
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight
} = useElementBounding(imgTarget)

const imgContainerCenter = computed(() => {
  return {
    translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
    translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2)
  }
})

const onToPinsClick = () => {
  emits('click', {
    id: props.data.id,
    location: imgContainerCenter
  })
}
</script>
<style scope></style>
