<template>
  <div class="fixed bottom-10 right-2">
    <div
      class="guide-start w-4 h-4 mb-1 bg-white dark:bg-zinc-900 border group dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:shadow-lg"
      @click="onGuideClick"
    >
      <my-svg-icon
        name="guide"
        fillClass=" fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main"
        class="w-2 h-2"
      ></my-svg-icon>
    </div>
    <my-popover class="flex items-center" placement="top-left">
      <template #reference>
        <div
          class="guide-feedback w-4 h-4 mb-1 bg-white dark:bg-zinc-900 border group dark:border-0 border-zinc-200 rounded-full flex justify-center items-center cursor-pointer duration-200 hover:shadow-lg"
        >
          <my-svg-icon
            name="feedback"
            fillClass=" fill-zinc-900 dark:fill-zinc-200 group-hover:fill-main"
            class="w-2 h-2"
          ></my-svg-icon>
        </div>
      </template>
      <div class="w-[140px] overflow-hidden">
        <div
          class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        >
          <my-svg-icon
            name="feedback"
            fillClass=" fill-zinc-900 dark:fill-zinc-200"
            class="w-1.5 h-1.5 mr-1"
          ></my-svg-icon>
          <!-- <span class="text-zinc-800 dark:text-zinc-300 text-sm">立即吐槽</span> -->
          <a
            class="text-zinc-800 dark:text-zinc-300 text-sm"
            :href="FEEDBACK"
            target="_blank"
            >立即吐槽</a
          >
          <!-- https://support.qq.com/product/603734 -->
        </div>
      </div>
    </my-popover>
  </div>
</template>
<script setup>
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
import { onMounted } from 'vue'
import steps from './steps.js'
import { FEEDBACK } from '@/constants'
let driverObj = null
onMounted(() => {
  // drivers = Driver({
  //   allowClose: false,
  //   closeBtnText: '关闭',
  //   nextBtnText: '下一步',
  //   prevBtnText: '上一步'
  // })
  driverObj = driver({
    nextBtnText: '下一步',
    prevBtnText: '上一步',
    steps
  })
})
const onGuideClick = () => {
  // drivers.defineSteps(steps)
  // drivers.start()

  driverObj.drive()
}
</script>
<style scope></style>
