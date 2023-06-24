<template>
  <mobile-navigation-vue
    v-if="isMobileTerminal"
    :data="categorysData"
  ></mobile-navigation-vue>
  <pc-navigation-vue v-else></pc-navigation-vue>
</template>
<script setup>
import { ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import { getCategory } from '@/api/category'

const categorysData = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categorysData.value = categorys
}
getCategoryData()
</script>
<style scope></style>
