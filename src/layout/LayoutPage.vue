<script setup lang="ts">

import AppTabBar from "@/layout/AppTabBar.vue";
import TopSearch from "@/layout/TopSearch.vue";
</script>

<template>
  <div class="w-screen h-screen flex flex-col">
    <!-- app header -->
    <div class="w-full h-16 flex">
      <TopSearch />
    </div>
    <!-- router view -->
    <div style="height: calc(100% - 128px)" class="w-full flex flex-col">
      <RouterView />
    </div>
    <!-- app tab bar -->
    <div class="w-full h-16 flex tab-bar">
      <AppTabBar />
    </div>
  </div>
</template>

<style scoped>
.tab-bar {
  border-top: 1px solid #ebedf0;
}
</style>
