<template>
  <div
    class="relative h-screen bg-white dark:bg-zinc-800 text-center xl:bg-zinc-200"
  >
    <!-- 头部图标：PC端 -->
    <header-vue></header-vue>
    <!-- 表单区 -->
    <div
      class="block px-3 mt-4 dark:bg-zinc-800 xl:bg-white xl:w-[388px] xl:dark:bg-zinc-900 xl:py-4 xl:m-auto xl:mt-8 xl:rounded-sm xl:shadow-lg"
    >
      <h3
        class="mb-2 font-semibold text-base text-main dark:text-zinc-300 hidden xl:block"
      >
        账号注册
      </h3>
      <!-- 表单 -->
      <vee-form @submit="onLoginHandler">
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="username"
          :rules="validateUsername"
          type="text"
          placeholder="用户名"
          autocomplete="on"
          v-model="regForm.username"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="username"
        >
        </vee-error-message>
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="password"
          :rules="validatePassword"
          type="password"
          placeholder="密码"
          autocomplete="on"
          v-model="regForm.password"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="password"
        >
        </vee-error-message>
        <vee-field
          class="dark:bg-zinc-800 dark:text-zinc-400 border-b-zinc-400 border-b-[1px] w-full outline-0 pb-1 px-1 text-base focus:border-b-main dark:focus:border-b-zinc-200 xl:dark:bg-zinc-900"
          name="confirmpassword"
          rules="validataConfirmPassword:@password"
          type="password"
          placeholder="确认密码"
          autocomplete="on"
          v-model="regForm.confirmpassword"
        />
        <vee-error-message
          class="text-sm text-red-600 block mt-0.5 text-left"
          name="confirmpassword"
        >
        </vee-error-message>
        <div class="pt-1 pb-3 leading-[0px] text-right">
          <a
            class="inline-block p-1 text-zinc-400 text-right dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-400 cursor-pointer"
            @click="onToRegister"
          >
            去登录
          </a>
        </div>
        <!-- 协议 -->
        <div class="text-center">
          <a
            href="https://m.imooc.com/newfaq?id=89"
            target="_black"
            class="text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 text-sm duration-300"
            >注册即同意慕课网注册协议</a
          >
        </div>

        <my-button
          class="w-full dark:bg-zinc-900 xl:dark:bg-zinc-800"
          :loading="loading"
          :isActiveAnim="false"
        >
          注册
        </my-button>
      </vee-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<script setup>
import headerVue from '../components/header.vue'
import {
  Form as VeeForm,
  Field as VeeField,
  ErrorMessage as VeeErrorMessage,
  defineRule
} from 'vee-validate'
import {
  validateUsername,
  validatePassword,
  validataConfirmPassword
} from '../validate'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { LOGIN_TYPE_USERNAME } from '@/constants'
const store = useStore()
const router = useRouter()

defineRule('validataConfirmPassword', validataConfirmPassword)

// 登录时的 loading
const loading = ref(false)
// 用户输入的用户名和密码
const regForm = ref({
  username: '',
  password: '',
  confirm: ''
})
const onLoginHandler = async () => {
  loading.value = true
  try {
    const payload = {
      username: regForm.value.username,
      password: regForm.value.password
    }
    await store.dispatch('user/register', payload)
    await store.dispatch('user/login', {
      ...loginForm.value,
      loginType: LOGIN_TYPE_USERNAME
    })
  } finally {
    loading.value = false
  }
  router.push('/')
}
/**
 * 进入登录页面
 */
const onToRegister = () => {
  // 配置跳转方式
  store.commit('app/changeRouterType', 'push')
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
