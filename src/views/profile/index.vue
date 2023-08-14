<template>
  <div
    class="h-full bg-zinc-200 dark:bg-zinc-800 duration-300 overflow-auto xl:pt-1"
  >
    <div
      class="relative max-w-screen-lg mx-auto bg-white dark:bg-zinc-900 duration-300 xl:rounded-sm xl:border-zinc-200 xl:dark:border-zinc-600 xl:border xl:px-4 xl:px-2"
    >
      <my-navbar sticky v-if="isMobileTerminal" :clickLeft="onNavbarLeftClick"
        >个人资料</my-navbar
      >
      <div v-else class="text-lg font-bold text-center mb-4 dark:text-zinc-300">
        个人资料
      </div>
      <div class="h-full w-full px-1 pb-4 text-sm mt-2 xl:w-2/3 xl:pb-0">
        <div class="py-1 xl:absolute xl:right-[16%] xl:text-center">
          <!-- 头像 -->
          <span
            class="w-8 inline-block mb-2 font-black text-sm dark:text-zinc-300 xl:block xl:mx-auto"
            >我的头像</span
          >
          <div
            class="relative w-[80px] h-[80px] group xl:cursor-pointer xl:left-[50%] xl:translate-x-[-50%]"
            @click="onAvatarClick"
          >
            <img
              :src="$store.getters.userInfo.avatar"
              class="rounded-full w-full h-full xl:inline-block"
              alt=""
            />
            <div
              class="absolute top-0 rounded-[50%] w-full h-full bg-black/40 hidden xl:group-hover:block duration-300"
            >
              <my-svg-icon
                name="change-header-image"
                class="w-2 h-2 m-auto mt-2"
              ></my-svg-icon>
              <div
                class="text-xs text-white dark:text-zinc-300 scale-90 mt-0.5"
              >
                点击更换头像
              </div>
            </div>
          </div>
          <input
            type="file"
            v-show="false"
            ref="inputFileTarget"
            accept=".png,.jpg,.jpeg,.gif"
            @change="onSelcetImgHandler"
          />
          <p class="mt-1 text-zinc-500 dark:text-zinc-400 text-xs xl:w-10">
            支持 jpg、png、jpeg、gif 格式大小 5M 以内的图片
          </p>
        </div>
        <!-- 信息输入 -->
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >用户名</span
          >
          <my-input
            class="w-full"
            max="20"
            v-model="userInfo.nickname"
          ></my-input>
          <!-- :modelValue="$store.getters.userInfo.nickname"
            @update:modelValue="changeStoreUserInfo('nickname', $event)" -->
        </div>
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >职位</span
          >
          <my-input class="w-full" v-model="userInfo.title"></my-input>
        </div>
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >公司</span
          >
          <my-input class="w-full" v-model="userInfo.company"></my-input>
        </div>
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >个人主页</span
          >
          <my-input class="w-full" v-model="userInfo.homePage"></my-input>
        </div>
        <div class="py-1 xl:flex xl:items-center xl:my-1">
          <span class="w-8 block mb-1 font-bold dark:text-zinc-300 xl:mb-0"
            >个人介绍</span
          >
          <my-input
            class="w-full"
            v-model="userInfo.introduction"
            type="textarea"
            max="50"
          ></my-input>
        </div>

        <my-button
          class="w-full mt-2 mb-4 dark:text-zinc-300 dark:bg-zinc-800 xl:w-[160px] xl:ml-[50%] xl:translate-x-[-50%]"
          :loading="loading"
          @click="onChangeProfile"
          >保存修改</my-button
        >

        <my-button
          v-if="isMobileTerminal"
          class="w-full dark:text-zinc-300 dark:bg-zinc-800 xl:w-[160px] xl:ml-[50%] xl:translate-x-[-50%]"
          @click="onLogoutClick"
          >退出登录</my-button
        >
      </div>
    </div>

    <my-dialog
      v-if="!isMobileTerminal"
      title="裁剪头像"
      v-model="isDialogVisible"
    >
      <change-avatar-vue
        :blob="currentBlob"
        @close="isDialogVisible = false"
      ></change-avatar-vue>
    </my-dialog>
    <my-popup
      v-else
      v-model="isDialogVisible"
      :class="{ 'h-screen': isDialogVisible }"
    >
      <change-avatar-vue
        :blob="currentBlob"
        @close="isDialogVisible = false"
      ></change-avatar-vue>
    </my-popup>
  </div>
</template>
<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import { confirm } from '@/libs'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { putProfile } from '@/api/sys'
import { message } from '@/libs'
import changeAvatarVue from './components/change-avatar.vue'
const router = useRouter()
const store = useStore()
const onNavbarLeftClick = () => {
  store.commit('app/changeRouterType', 'back')
  router.back()
}
const inputFileTarget = ref(null)
const isDialogVisible = ref(false)
const currentBlob = ref('')
const onAvatarClick = () => {
  inputFileTarget.value.click()
}
// 当两次选择同一张图片的时候 change的回调不会被触发 解决：每次选择完成后 不再被时候后清空即可
const onSelcetImgHandler = () => {
  const imgFile = inputFileTarget.value.files[0]
  const blob = URL.createObjectURL(imgFile)
  currentBlob.value = blob
  isDialogVisible.value = true
}
const onLogoutClick = () => {
  confirm('sure logout').then(() => {
    store.dispatch('user/logout')
  })
}
const loading = ref(false)
const onChangeProfile = async () => {
  loading.value = true
  await putProfile(userInfo.value)
  message('success', '用户信息修改成功！')
  store.commit('user/setUserInfo', userInfo.value)
  loading.value = false
}
watch(isDialogVisible, (val) => {
  if (!val) {
    inputFileTarget.value.value = null
  }
})
// const changeStoreUserInfo = (key, value) => {
//   store.commit('user/setUserInfo', {
//     ...store.getters.userInfo,
//     [key]: value
//   })
// }
const userInfo = ref(store.getters.userInfo)
</script>
<style scope></style>
