<template>
  <mobile-navigation-vue v-if="isMobileTerminal"></mobile-navigation-vue>
  <pc-navigation-vue v-else></pc-navigation-vue>
</template>
<script setup>
// import { ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import { useStore } from 'vuex'
// import { getCategory } from '@/api/category'
// import { ALL_CATEGORY_ITEM } from '@/constants/index'
// const categorysData = ref([])
// const getCategoryData = async () => {
//   const { categorys } = await getCategory()
//   categorysData.value = categorys
//   categorysData.value.unshift(ALL_CATEGORY_ITEM)
// }
// getCategoryData()
const store = useStore()
store.dispatch('category/useCategoryData')
</script>
<style scope></style>
