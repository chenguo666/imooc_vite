<template>
  <div>
    <item-vue
      v-for="(item, index) in pexelsList"
      :key="item.id"
      :data="item"
    ></item-vue>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { getPexlesList } from '@/api/pexels'
import itemVue from './item.vue'
let query = {
  page: 1,
  size: 20
}
const pexelsList = ref([])
const getPexlesListData = async () => {
  const res = await getPexlesList(query)
  pexelsList.value = res.list
}
getPexlesListData()
</script>
<style scope></style>
