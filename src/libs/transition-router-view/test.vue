<template>
  <router-view v-slot="{ Component }">
    <transition
      :name="transitionName"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <keep-alive :include="virualTaskStack">
        <component
          :is="Component"
          :class="{ 'fixed top-0 left-0 w-screen z-50': isAnimation }"
          :key="$route.fullPath"
        ></component>
      </keep-alive>
    </transition>
  </router-view>
</template>
<script>
const NONE = 'none'
const ROUTER_TYPE_PUSH = 'push'
const ROUTER_TYPE_BACK = 'back'
const ROUTER_TYPE_ENUM = [NONE, ROUTER_TYPE_PUSH, ROUTER_TYPE_BACK]
</script>
<script setup>
import { ref } from 'vue'
import { newRouter } from 'vue-router'
const props = defineProps({
  routerType: {
    type: String,
    default: true,
    validator(val) {
      const result = ROUTER_TYPE_ENUM.includes(val)
      if (!result) {
        throw new Error(`必须是${ROUTER_TYPE_ENUM.join(',')}中的一个`)
      }
      return result
    }
  },
  mainComponentName: {
    type: String,
    require: true
  }
})
const transitionName = ref('')
const isAnimation = ref(false)
const virualTaskStack = ref([props.mainComponentName])
const router = newRouter()
router.beforeEach((to, from) => {
  transitionName.value = props.routerType
  if (props.routerType === ROUTER_TYPE_PUSH) {
    virualTaskStack.value.push(to.name)
  } else if (props.routerType === ROUTER_TYPE_BACK) {
    virualTaskStack.value.pop()
  }
  if (to.name === props.mainComponentName) {
    clearTask()
  }
})
const beforeEnter = () => {
  isAnimation.value = true
}
const afterLeave = () => {
  isAnimation.value = false
}

const clearTask = () => {
  virualTaskStack.value = [props.mainComponentName]
}
</script>
<style scope lang="scss">
// push页面时：新页面的进入动画
.push-enter-active {
  animation-name: push-in;
  animation-duration: 0.4s;
}
// push页面时：老页面的退出动画
.push-leave-active {
  animation-name: push-out;
  animation-duration: 0.4s;
}
// push页面时：新页面的进入动画
@keyframes push-in {
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}
// push页面时：老页面的退出动画
@keyframes push-out {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

// 后退页面时：即将展示的页面动画
.back-enter-active {
  animation-name: back-in;
  animation-duration: 0.4s;
}
// 后退页面时：后退的页面执行的动画
.back-leave-active {
  animation-name: back-out;
  animation-duration: 0.4s;
}
// 后退页面时：即将展示的页面动画
@keyframes back-in {
  0% {
    width: 100%;
    transform: translate(-100%, 0);
  }
  100% {
    width: 100%;
    transform: translate(0, 0);
  }
}
// 后退页面时：后退的页面执行的动画
@keyframes back-out {
  0% {
    width: 100%;
    transform: translate(0, 0);
  }
  100% {
    width: 100%;
    transform: translate(50%, 0);
  }
}
</style>
