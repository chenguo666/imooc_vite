<template>
  <div
    class="bg-white dark:bg-zinc-900 xl:dark:bg-zinc-800 rounded pb-1 h-[280px] w-[230px]"
  >
    <div class="relative w-full rounded cursor-zoom-in group">
      <img class="w-full rounded bg-transparent" :src="data.photo" alt="" />
      <div
        class="hidden opacity-0 w-full h-full bg-zinc-900/50 absolute top-0 left-0 rounded duration-300 group-hover:opacity-100 xl:block"
      >
        <my-button class="absolute top-1.5 left-1.5">分享</my-button>
        <my-button
          class="absolute top-1.5 right-1.5"
          type="info"
          icon="heart"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></my-button>
        <my-button
          class="absolute bottom-1.5 left-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="download"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></my-button>
        <my-button
          class="absolute bottom-1.5 right-1.5 bg-zinc-100/70"
          type="info"
          size="small"
          icon="full"
          iconClass="fill-zinc-900 dark:fill-zinc-200"
        ></my-button>
      </div>
    </div>
    <p class="text-sm mt-1 font-blod text-zinc-900 dark:text-zinc-300 px-1">
      {{ data.title }}
    </p>
    <div class="flex items-center mt-1 px-1">
      <img :src="data.avator" alt="" class="h-2 w-2 rounded-full" />
      <span class="text-sm text-zinc-500 ml-1">{{ data.author }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>
<style scope></style>
