<template>
  <div class="w-full">
    <my-search v-model="inputValue">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </my-search>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
<style scope></style>
