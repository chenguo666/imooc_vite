<template>
  <my-popover placement="top-left" class="flex items-center">
    <template #reference>
      <div
        class="relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100"
      >
        <img
          class="w-3 h-3 rounded-sm"
          src="../../../../assets/vue.svg"
          alt=""
        />
        <my-svg-icon
          name="down-arrow"
          class="w-1.5 h-1.5 ml-0.5"
          fillClass=" fill-zinc-900"
        ></my-svg-icon>
        <my-svg-icon
          name="vip"
          class="w-1.5 h-1.5 ml-0.5 absolute right-[16px] bottom-0"
        ></my-svg-icon>
      </div>
    </template>
    <div class="w-[140px] overflow-hidden">
      <div
        class="flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in menuArr"
        :key="item.id"
      >
        <my-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="fill-zinc-900"
        ></my-svg-icon>
        <span class="text-zinc-900 text-sm"> {{ item.title }}</span>
      </div>
    </div>
  </my-popover>
</template>
<script setup>
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
    path: '/memeber'
  },
  {
    id: '3',
    title: '退出登录',
    icon: 'logout',
    path: ''
  }
]
</script>
<style scope></style>
