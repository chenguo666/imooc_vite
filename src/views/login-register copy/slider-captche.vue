<template>
  <div
    class="fixed top-[20%] left-[50%] translate-x-[-50%] w-[340px] h-[270px] text-sm bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-900 shadow-2xl"
  >
    <div class="flex items-center h-5 text-left px-1 mb-1">
      <span class="flex-grow dark:text-zinc-200">请完成安全验证</span>
      <my-svg-icon
        name="refresh"
        fillClass=" fill-zinc-900 dark:fill-zinc-200"
        class="w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onReset"
      ></my-svg-icon>
      <my-svg-icon
        name="close"
        fillClass=" fill-zinc-900 dark:fill-zinc-200"
        class="ml-2 w-3 h-3 p-0.5 rounded-sm duration-300 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-900"
        @click="onClose"
      ></my-svg-icon>
    </div>
    <div id="captcha"></div>
  </div>
</template>
<script setup>
import '@/vendor/SliderCaptcha_jb51/SliderCaptcha/src/disk/longbow.slidercaptcha.min.js'
import '@/vendor/SliderCaptcha_jb51/SliderCaptcha/src/disk/slidercaptcha.css'
import { onMounted } from 'vue'
import { getCaptcha } from '@/api/sys'
const emits = defineEmits(['close', 'success'])
let captcha = null
onMounted(() => {
  captcha = sliderCaptcha({
    id: 'captcha',
    // repeatIcon: 'fa fa-redo',
    // setSrc: function () {
    //     return 'http://imgs.blazor.zone/images/Pic' + Math.round(Math.random() * 136) + '.jpg';
    // },
    async onSuccess(arr) {
      //成功事件
      //   console.log(arr)
      const res = await getCaptcha({
        behavior: arr
      })
      console.log(res)
      if (res) {
        emits('success')
      }
      // var handler = setTimeout(function () {
      //     window.clearTimeout(handler);
      //     captcha.reset();
      // }, 500);
    },
    onFail(error) {
      console.log('error:', error)
    },
    verify() {
      return true
    }
  })
})

const onReset = () => {
  captcha.reset()
}
const onClose = () => {
  emits('close')
}
</script>
<style scope></style>
