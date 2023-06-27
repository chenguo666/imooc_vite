<template>
  <div class="py-2 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 font-bold mb-2 px-1 dark:text-zinc-200">
      所有分类
    </h2>
    <ul class="overflow-y-scroll">
      <li
        class="text-lg text-zinc-900 dark:text-zinc-200 px-1 py-1.5 duration-100 active:bg-zinc-100 dark:active:bg-zinc-900"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        @click="$emit('onItemClick', index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script setup>
// defineProps({
//   categorys: {
//     type: Array,
//     required: true
//   }
// })
defineEmits(['onItemClick'])
</script>
<style scope></style>
