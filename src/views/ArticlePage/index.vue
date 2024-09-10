<script setup lang="ts">

import TopTabpane from "@/views/ArticlePage/_components/TopTabpane.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <!-- 顶部话题tabs -->
    <div class="w-full h-10 sticky top-0">
      <TopTabpane />
    </div>
    <div style="height: calc(100% - 40px)" class="w-full flex flex-col overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
