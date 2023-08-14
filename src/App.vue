<template>
  <!-- 一级路由出口 -->
  <!-- <div class="h-screen fixed top-0 left-0 w-screen">
    <router-view />
  </div> -->
  <!-- <my-dialog title="sadfadf" v-model="close">hahha</my-dialog> -->
  <!-- 一级路由出口 -->
  <div class="h-screen fixed top-0 left-0 w-screen">
    <my-transition-router-view
      mainComponentName="home"
      :routerType="$store.getters.routerType"
    ></my-transition-router-view>
  </div>
</template>
<script setup>
// import { ref } from 'vue'
// const close = ref(true)
// import { getCategory } from '@/api/category'
// const { categorys } = await getCategory()
// console.log(categorys)
</script>

<style scoped lang="scss"></style>
