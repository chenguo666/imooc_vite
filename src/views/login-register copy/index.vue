<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"
  >
    <header-vue></header-vue>
    <!-- 表单 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:py-4 xl:m-auto xl:mt-8 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"
      >
        账号登录
      </h3>
      <!--  -->
      <vee-form @submit="onLoginHandler">
        <vee-field
          name="username"
          placeholder="用户名"
          autocomplete="on"
          type="text"
          :rules="validateUsername"
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="username"
        />
        <vee-field
          name="password"
          placeholder="密码"
          autocomplete="on"
          type="password"
          :rules="validatePassword"
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
        />
        <vee-error-message
          class="text-sm text-red-600 block text-left mt-0.5"
          name="password"
        />
        <!-- 跳转按钮 -->
        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            href=""
            class="inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-300 cursor-pointer"
            >去注册</a
          >
        </div>
        <!-- 登录按钮 -->
        <my-button
          class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800"
          :isActiveAnim="false"
          >登录</my-button
        >
      </vee-form>
      <!-- 第三方 -->
      <div class="flex justify-around mt-4">
        <my-svg-icon class="w-4 cursor-pointer" name="qq"></my-svg-icon>
        <my-svg-icon class="w-4 cursor-pointer" name="wexin"></my-svg-icon>
      </div>
    </div>
    <slider-captche-vue
      v-if="isSliderCaptchaVisible"
      @close="isSliderCaptchaVisible = false"
      @success="success"
    />
  </div>
</template>
<script setup>
import headerVue from './components/header.vue'
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage
} from 'vee-validate'
import { validateUsername, validatePassword } from './validate'
import sliderCaptcheVue from './slider-captche.vue'
import { ref } from 'vue'
const onLoginHandler = () => {
  isSliderCaptchaVisible.value = true
}
const isSliderCaptchaVisible = ref(false)

const success = () => {
  isSliderCaptchaVisible.value = false
  // 登录
  console.log('go')
}
</script>
