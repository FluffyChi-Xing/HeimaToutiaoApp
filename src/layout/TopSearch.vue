<script setup lang="ts">
import { ref } from 'vue'
withDefaults(defineProps<{
  shape?: 'square' | 'round'
}>(), {
  shape: 'round'
})




/** ===== top search-start ===== **/
const searchValue = ref<string>('')
/** ===== top search-end ===== **/
</script>

<template>
  <div class="w-full h-full flex">
    <div class="w-16 h-full flex justify-center items-center">
      <van-icon class="w-10 h-10 bg-red-950" />
    </div>
    <div style="width: calc(100% - 128px)" class="h-full flex flex-col justify-center">
      <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          :shape="shape"
          clearable
      />
    </div>
    <div class="w-16 h-full flex justify-center items-center">
      <van-icon class="w-10 h-10 bg-red-950" />
    </div>
  </div>
</template>

<style scoped>

</style>
