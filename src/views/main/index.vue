<template>
  <div
    ref="containerTarget"
    class="h-full overflow-auto bg-white dark:bg-zinc-800 duration-500 scrollbar-thin scrollbar-thumb-transparent xl:scrollbar-thumb-zinc-200 xl:dark:scrollbar-thumb-zinc-900 scrollbar-track-transparent"
  >
    <navigation-vue></navigation-vue>
    <div class="max-w-screen-xl mx-auto relative m-1 xl:mt-4">
      <list-vue></list-vue>
    </div>
    <!-- tabbar -->
    <my-trigger-menu
      v-if="isMobileTerminal"
      class="fixed bottom-6 m-auto left-0 right-0 w-[220px]"
    >
      <my-trigger-menu-item
        iconClass=" fill-zinc-900 dark:fill-zinc-200"
        icon="home"
      >
        首页
      </my-trigger-menu-item>
      <my-trigger-menu-item
        v-if="$store.getters.token"
        iconClass=" fill-zinc-400 dark:fill-zinc-500"
        textClass=" text-zinc-400 dark:text-zinc-500"
        icon="vip"
        @click="onVipClick"
      >
        VIP
      </my-trigger-menu-item>
      <my-trigger-menu-item
        v-if="$store.getters.token"
        iconClass=" fill-zinc-400 dark:fill-zinc-500"
        icon="profile"
        textClass=" text-zinc-400 dark:text-zinc-500"
        @click="onMyClick"
      >
        {{ $store.getters.token ? '我的' : '去登陆' }}
      </my-trigger-menu-item>
    </my-trigger-menu>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import navigationVue from './components/navigation/index.vue'
import listVue from './components/list/index.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useScroll } from '@vueuse/core'
import { onActivated, ref } from 'vue'
const store = useStore()
const router = useRouter()
const onVipClick = () => {
  store.commit('app/changeRouterType', 'push')
  router.push('/member')
}
const onMyClick = () => {
  if (store.getters.token) {
    store.commit('app/changeRouterType', 'push')
    router.push('/profile')
  } else {
    router.push('/login')
  }
}
const containerTarget = ref(null)
const { y: containerTargetScrollY } = useScroll(containerTarget)
// 被缓存的组件再次可见会回调 onActivated 方法
onActivated(() => {
  if (!containerTarget.value) {
    return
  }
  containerTarget.value.scrollTop = containerTargetScrollY.value
})
</script>
<style scope></style>
