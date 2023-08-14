<template>
  <div class="w-full guide-search">
    <my-search v-model="inputValue" @search="onSearchHandler">
      <template #dropdown>
        <div>
          <hint-vue
            :searchText="inputValue"
            v-show="inputValue"
            @itemclick="onSearchHandler"
          ></hint-vue>
          <history-vue
            v-show="!inputValue"
            @itemclick="onSearchHandler"
          ></history-vue>
          <theme-vue v-show="!inputValue"></theme-vue>
        </div>
      </template>
    </my-search>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import hintVue from './hint.vue'
import historyVue from './history.vue'
import themeVue from './theme.vue'
import { useStore } from 'vuex'
const store = useStore()
const inputValue = ref('')
const onSearchHandler = (val) => {
  inputValue.value = val
  if (val) {
    store.commit('search/addHistory', val)
    store.commit('app/changeSearchText', val)
  }
}
</script>
<style scope></style>
