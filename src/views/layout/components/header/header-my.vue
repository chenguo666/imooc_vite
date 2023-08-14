<template>
  <my-popover placement="top-left" class="flex items-center guide-my">
    <template #reference>
      <div
        v-if="$store.getters.token"
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:bg-zinc-900"
      >
        <img
          class="w-3 h-3 rounded-sm"
          :src="$store.getters.userInfo.avatar"
          alt=""
        />
        <my-svg-icon
          name="down-arrow"
          class="w-1.5 h-1.5 ml-0.5"
          fillClass=" fill-zinc-900 dark:fill-zinc-300"
        ></my-svg-icon>
        <my-svg-icon
          v-if="$store.getters.userInfo.vipLevel"
          name="vip"
          class="w-1.5 h-1.5 ml-0.5 absolute right-[16px] bottom-0"
        ></my-svg-icon>
      </div>
      <div v-else>
        <my-button
          icon="profile"
          iconColor="#fff"
          @click="onToLogin"
        ></my-button>
      </div>
    </template>
    <div v-if="$store.getters.token" class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"
        v-for="item in menuArr"
        :key="item.id"
        @click="onItemClick(item)"
      >
        <my-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900 dark:fill-zinc-300"
        ></my-svg-icon>
        <span class="text-zinc-900 text-sm dark:text-zinc-300">
          {{ item.title }}</span
        >
      </div>
    </div>
  </my-popover>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { confirm } from '@/libs'
const router = useRouter()
import { useStore } from 'vuex'

const store = useStore()
const menuArr = [
  {
    id: '0',
    title: '个人资料',
    icon: 'profile',
    path: '/profile'
  },
  {
    id: '1',
    title: '升级vip',
    icon: 'vip-profile',
    path: '/member'
  },
  {
    id: '3',
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]
const onToLogin = () => {
  store.commit('app/changeRouterType', 'push')
  router.push('/login')
}
const onItemClick = (item) => {
  console.log(item)
  if (item.id === '3') {
    confirm('您确定要退出登录嘛').then(() => {
      store.dispatch('user/logout')
    })
  }
  if (item.id === '0') {
    store.commit('app/changeRouterType', 'push')
    router.push(item.path)
  }
  if (item.id === '1') {
    store.commit('app/changeRouterType', 'push')
    router.push(item.path)
  }
}
</script>
<style scope></style>
